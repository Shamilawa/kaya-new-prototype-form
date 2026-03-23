"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Handle,
  Position,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  ChevronLeft,
  Search,
  Layout,
  Filter,
  MessageSquare,
  Volume2,
  AlertCircle,
  Database,
  FileJson,
  Cpu,
  RefreshCw,
  HelpCircle,
  Save,
  Play,
  UploadCloud,
  GripVertical,
  Zap,
  Bot,
} from "lucide-react";
import AgentForm, { AgentFormData } from "./AgentForm";
import WorkflowTest from "./WorkflowTest";
import PlaygroundSidebar from "./PlaygroundSidebar";
import TutorialModal from "./TutorialModal";
import styles from "./WorkflowEditor.module.css";

interface NodeCardProps {
  title: string;
  icon: React.ElementType;
  variant?: "core" | "data";
}

const StartNode = () => {
  return (
    <div className={styles.startNodeContainer}>
      <div className={styles.startNodeHeader}>
        <div className={styles.startNodeIconWrapper}>
          <Zap className={styles.startNodeIcon} />
        </div>
        <div className={styles.startNodeTitleGroup}>
          <div className={styles.startNodeTitle}>Start</div>
          <div className={styles.startNodeSubtitle}>Workflow trigger</div>
        </div>
      </div>
      <div className={styles.startNodeBadge}>Manual Trigger</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const GhostNode = () => {
  return (
    <div className={styles.ghostNodeContainer}>
      <div className={styles.ghostNodeTitle}>Drag and Drop to get started</div>
      <div className={styles.ghostNodeSubtitle}>
        Start building your workflow
      </div>
      <div className={styles.ghostNodeButtonText}>
        Or choose a template to get started
      </div>
      <Handle
        type="target"
        position={Position.Left}
        style={{ visibility: "hidden" }}
      />
    </div>
  );
};

const BasicAgentNode: React.FC<{ data: any }> = ({ data }) => (
  <div className={styles.basicAgentNodeContainer}>
    <Handle
      type="target"
      position={Position.Left}
      style={{ visibility: "hidden" }}
    />
    <div className={styles.basicAgentNodeGroup}>
      <div className={styles.basicAgentNodeMainContent}>
        <div className={styles.basicAgentNodeHeader}>
          <div className={styles.basicAgentNodeIcon}>
            <Bot className="w-6 h-6 text-[#005BB5]" />
          </div>
          <div className={styles.basicAgentNodeStatusWrapper}>
            <div className={styles.basicAgentNodeStatus}>
              {data.name || "Pending.."}
            </div>
          </div>
        </div>
        <div className={styles.basicAgentNodeDetailWrapper}>
          <div className={styles.basicAgentNodeDetailText}>
            <span className={styles.basicAgentNodeLabel}>
              Prompt Template:{" "}
            </span>
            <span className={styles.basicAgentNodeValue}>
              {data.selectedTemplateName || "Pending..."}
            </span>
          </div>
        </div>
        <div className={styles.basicAgentNodeDetailWrapper}>
          <div className={styles.basicAgentNodeDetailText}>
            <span className={styles.basicAgentNodeLabel}>
              Intelligence Source:{" "}
            </span>
            <span className={styles.basicAgentNodeValue}>
              {data.selectedModelName || "Pending..."}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.basicAgentNodeBadgeGroup}>
        <div className={styles.basicAgentBadgePrimary}>Basic Agent</div>
        <div className={styles.basicAgentBadgeSecondary}>{"{Attribute}"}</div>
        <div className={styles.basicAgentBadgeSecondary}>{"{Attribute}"}</div>
        <div className={styles.basicAgentBadgeSecondary}>{"{Attribute}"}</div>
      </div>
    </div>
    <Handle
      type="source"
      position={Position.Right}
      style={{ visibility: "hidden" }}
    />
  </div>
);

const nodeTypes = {
  start: StartNode,
  ghost: GhostNode,
  basicAgent: BasicAgentNode,
};

const NodeCard: React.FC<
  NodeCardProps & { onDragStart?: (event: React.DragEvent) => void }
> = ({ title, icon: Icon, variant, onDragStart }) => {
  const iconBgClass =
    variant === "core"
      ? styles.featuredIconBlue
      : variant === "data"
        ? styles.featuredIconGreen
        : "";
  const iconColorClass =
    variant === "core"
      ? "text-[#005BB5]"
      : variant === "data"
        ? "text-[#039855]"
        : "text-[#CC3E07]";

  return (
    <div
      className={styles.agentNodeCard}
      draggable={!!onDragStart}
      onDragStart={onDragStart}
    >
      <div className={styles.featuredIconParent}>
        <div className={`${styles.featuredIcon} ${iconBgClass}`}>
          <Icon className={`w-5 h-5 ${iconColorClass}`} />
        </div>
        <div className={styles.dotsVerticalParent}>
          <GripVertical className={styles.dotsVerticalIcon} />
        </div>
      </div>
      <div className={styles.textAndEmailCapture}>
        <div className={styles.headingAndSupportingText}>
          <div className={styles.heading}>{title}</div>
        </div>
      </div>
    </div>
  );
};

const WorkspaceAgentCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className={styles.workspaceAgentCard}>
    <div className={styles.workspaceAgentCardContent}>
      <div className={styles.workspaceAgentCardTextGroup}>
        <div className={styles.workspaceAgentCardHeading}>{title}</div>
        <div className={styles.workspaceAgentCardDescription}>
          {description}
        </div>
      </div>
      <div className={styles.dotsVerticalParent}>
        <GripVertical className={styles.dotsVerticalIcon} />
      </div>
    </div>
  </div>
);

const WorkflowEditorContent: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"all" | "workspace">("all");
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [isTesting, setIsTesting] = useState(false);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  useEffect(() => {
    setIsTutorialOpen(true);
  }, []);
  const workspaceId = params.workspaceId as string;
  const iflowId = params.iflowId as string;

  const displayIFlowName = iflowId
    ? iflowId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Order Support";

  const coreNodes = [
    { title: "Basic Agent", icon: Bot },
    { title: "Decision-maker", icon: Filter },
    { title: "Planner", icon: Layout },
    { title: "Replanner", icon: RefreshCw },
    { title: "Voice", icon: Volume2 },
    { title: "Fallback", icon: AlertCircle },
  ];


  const dataNodesList = [
    { title: "Loader", icon: Database },
    { title: "Cleaner", icon: FileJson },
    { title: "Agent", icon: MessageSquare },
    { title: "Agent", icon: MessageSquare },
    { title: "Voice Agent", icon: Volume2 },
    { title: "Fallback Agent", icon: AlertCircle },
  ];

  const initialNodes = [
    {
      id: "start",
      type: "start",
      position: { x: 50, y: 300 },
      data: { label: "Start" },
    },
    {
      id: "ghost",
      type: "ghost",
      position: { x: 450, y: 195 },
      data: { label: "Ghost" },
      draggable: false,
    },
  ];

  const initialEdges: Edge[] = [
    {
      id: "e1-2",
      source: "start",
      target: "ghost",
      animated: false,
      style: {
        strokeDasharray: "5 5",
        stroke: "#d5d7da",
        strokeWidth: 2,
      },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition, setCenter } = useReactFlow();

  const handleViewInWorkflow = useCallback((agentId: string) => {
    const node = nodes.find((n) => n.id === agentId);
    if (node) {
      setIsTesting(false);
      // Delay slightly to ensure canvas is rendered before centering
      setTimeout(() => {
        setCenter(node.position.x + 150, node.position.y + 100, { zoom: 1.2, duration: 800 });
      }, 100);
    }
  }, [nodes, setCenter]);

  const handleEditAgent = useCallback((agentId: string) => {
    const node = nodes.find((n) => n.id === agentId);
    if (node) {
      setIsTesting(false);
      setSelectedNode(node);
    }
  }, [nodes]);

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNodeId = `node_${Date.now()}`;
      const newNode = {
        id: newNodeId,
        type,
        position,
        data: { label: `${type} node` },
      };

      if (type === "basicAgent") {
        // Remove ghost node and add new node
        setNodes((nds) =>
          nds.filter((node) => node.id !== "ghost").concat(newNode),
        );

        // Remove edge connection to ghost and add new edge from start to basic agent
        setEdges((eds) => {
          const filteredEds = eds.filter((edge) => edge.target !== "ghost");
          return filteredEds.concat({
            id: `edge_${Date.now()}`,
            source: "start",
            target: newNodeId,
            animated: true,
            style: { stroke: "#5ea3e0", strokeWidth: 2 },
          });
        });
      } else {
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [screenToFlowPosition, setNodes, setEdges],
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: any) => {
    if (node.type === "basicAgent") {
      setSelectedNode(node);
    }
  }, []);
  const workspaceAgents = [
    {
      title: "CX Agent",
      description:
        "Sales representative focused on customer engagement and product recommendations",
    },
    {
      title: "Support Agent",
      description: "Handles customer inquiries and technical support tickets",
    },
    {
      title: "Marketing Lead",
      description: "Specializes in campaign optimization and lead generation",
    },
    {
      title: "Data Analyst",
      description: "Processes large datasets to provide actionable insights",
    },
    {
      title: "Finance Bot",
      description: "Automates invoice processing and expense reporting",
    },
    {
      title: "HR Assistant",
      description: "Assists with onboarding and employee documentation",
    },
  ];

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className={styles.bodyContentParent}>
      {/* Left Sidebar */}
      <div className={styles.bodyContent}>
        {isTesting ? (
          <PlaygroundSidebar
            onBack={() => setIsTesting(false)}
            onCancel={() => setIsTesting(false)}
            onSave={() => setIsTesting(false)}
            onViewInWorkflow={handleViewInWorkflow}
            onEditAgent={handleEditAgent}
            agents={nodes
              .filter((node) => node.type === "basicAgent")
              .map((node) => {
                const data = node.data as any;
                return {
                  id: node.id,
                  name: data.name || "Unnamed Agent",
                  promptTemplate: data.selectedTemplateName || "Not set",
                  model: data.selectedModelName || "Not set",
                };
              })}
          />
        ) : selectedNode ? (
          <AgentForm
            onCancel={() => setSelectedNode(null)}
            onSave={(data: AgentFormData) => {
              setNodes((nds) =>
                nds.map((node) =>
                  node.id === selectedNode.id
                    ? {
                        ...node,
                        data: { ...node.data, ...data },
                      }
                    : node,
                ),
              );
              setSelectedNode(null);
            }}
            initialData={selectedNode.data}
          />
        ) : (
          <>
            <div className={styles.bodyContentInner}>
              <div className={styles.headerParent}>
                <div className={styles.header}>
                  <div
                    className={styles.buttonsbutton}
                    onClick={() =>
                      workspaceId &&
                      iflowId &&
                      router.push(`/${workspaceId}/${iflowId}`)
                    }
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <div className={styles.textPadding}>
                      <div className={styles.text}>Back to iFlows</div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <div className={styles.buttonGroupBase}>
                    <div className={styles.text2}>{displayIFlowName}</div>
                  </div>
                  <div className={styles.buttonGroupBase2}>
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                </div>
                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.text3}>Draft</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.saved2minsAgo}>Saved 2mins ago</div>
                </div>
              </div>
            </div>
            <div className={styles.bodyContentChild}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.horizontalTabsWrapper}>
                    <div className={styles.horizontalTabs}>
                      <div
                        className={`${styles.tabButtonBase} ${
                          activeTab === "all" ? "" : styles.tabButtonBase2
                        } ${activeTab === "all" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("all")}
                      >
                        <div className={styles.text}>All Nodes</div>
                        <div className={styles.badge2}>
                          <div className={styles.text3}>19</div>
                        </div>
                      </div>
                      <div
                        className={`${styles.tabButtonBase} ${
                          activeTab === "workspace" ? "" : styles.tabButtonBase2
                        } ${activeTab === "workspace" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("workspace")}
                      >
                        <div className={styles.text}>Workspace Agents</div>
                        <div className={styles.badge3}>
                          <div className={styles.text3}>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.messageAction}>
                    <div className={styles.inputField}>
                      <div className={styles.inputWithLabel}>
                        <div className={styles.input}>
                          <Search className="w-5 h-5 text-text-quaternary" />
                          <div className={styles.content}>
                            <div className={styles.text4}>
                              Search all nodes..
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.scrollableArea}>
                    {activeTab === "all" ? (
                      <>
                        <div
                          className={styles.sectionHeader}
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "10px",
                            alignItems: "center",
                          }}
                        >
                          <div
                            // className={
                            //     styles.subheading
                            // }
                            style={{
                              color: "#535862",
                              fontWeight: "600",
                            }}
                          >
                            Core Agent Templates
                          </div>
                          <div
                            className={styles.number}
                            style={{
                              color: "#535862",
                              fontWeight: "600",
                              border: "1px solid #E5E7EB",
                              borderRadius: "50%",
                              padding: "2px 8px",
                              backgroundColor: "#F9FAFB",
                            }}
                          >
                            6
                          </div>
                        </div>
                        <div className={styles.agentNodeCardParent}>
                          {coreNodes.map((node) => (
                            <NodeCard
                              key={node.title}
                              title={node.title}
                              icon={node.icon}
                              variant="core"
                              onDragStart={
                                node.title === "Basic Agent"
                                  ? (event) => onDragStart(event, "basicAgent")
                                  : undefined
                              }
                            />
                          ))}
                        </div>
                        <div
                          className={styles.sectionHeader}
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "10px",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            className={styles.subheading}
                            style={{
                              color: "#535862",
                              fontWeight: "600",
                            }}
                          >
                            Data Agent Templates
                          </div>
                          <div
                            className={styles.number}
                            style={{
                              color: "#535862",
                              fontWeight: "600",
                              border: "1px solid #E5E7EB",
                              borderRadius: "50%",
                              padding: "2px 8px",
                              backgroundColor: "#F9FAFB",
                            }}
                          >
                            6
                          </div>
                        </div>
                        <div className={styles.agentNodeCardParent}>
                          {dataNodesList.map((node) => (
                            <NodeCard
                              key={node.title}
                              title={node.title}
                              icon={node.icon}
                              variant="data"
                            />
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className={styles.agentNodeCardParent}>
                        {workspaceAgents.map((agent, index) => (
                          <WorkspaceAgentCard
                            key={index}
                            title={agent.title}
                            description={agent.description}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Main Content Area */}
      <div className={`${styles.bodyContent2}`}>
        <div className={styles.groupDiv}>
          <div
            className={styles.bodyContent2}
            onDragOver={onDragOver}
            onDrop={onDrop}
            style={{ height: "100%", width: "100%" }}
          >
            {isTesting ? (
              <WorkflowTest onBack={() => setIsTesting(false)} />
            ) : (
              <>
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  onNodeClick={onNodeClick}
                  nodeTypes={nodeTypes}
                  fitView
                >
                  <Background color="#aaa" gap={20} />
                  <Controls />
                </ReactFlow>

                {/* Floating Action Bar */}
                <div className={styles.floatingActions}>
                  <div className={styles.actionButtonGroup}>
                    <button className={styles.saveButton}>
                      <Save className={styles.actionIcon} />
                      <div className={styles.textPadding}>
                        <span className={styles.actionButtonText}>Save</span>
                      </div>
                    </button>
                    <button
                      className={styles.testButton}
                      onClick={() => setIsTesting(true)}
                    >
                      <Play className={styles.actionIcon} />
                      <div className={styles.textPadding}>
                        <span className={styles.actionButtonText}>
                          Playground
                        </span>
                      </div>
                    </button>
                  </div>
                  <button className={styles.publishButton}>
                    <UploadCloud className={styles.actionIcon} />
                    <div className={styles.textPadding}>
                      <span className={styles.actionButtonText}>Publish</span>
                    </div>
                  </button>
                </div>
              </>
            )}

            <div className={styles.helpmenu}>
              <HelpCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <TutorialModal
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
      />
    </div>
  );
};

const WorkflowEditor: React.FC = () => (
  <ReactFlowProvider>
    <WorkflowEditorContent />
  </ReactFlowProvider>
);

export default WorkflowEditor;
