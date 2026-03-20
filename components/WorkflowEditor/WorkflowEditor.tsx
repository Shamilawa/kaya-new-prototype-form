"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  ChevronLeft,
  Search,
  MoreVertical,
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
  Zap,
} from "lucide-react";
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
      <div className={styles.ghostNodeSubtitle}>Start building your workflow</div>
      <div className={styles.ghostNodeButtonText}>Or choose a template to get started</div>
      <Handle type="target" position={Position.Left} style={{ visibility: "hidden" }} />
    </div>
  );
};

const nodeTypes = {
  start: StartNode,
  ghost: GhostNode,
};

const NodeCard: React.FC<NodeCardProps> = ({ title, icon: Icon, variant }) => {
  const iconBgClass = variant === "core" ? styles.featuredIconBlue : variant === "data" ? styles.featuredIconGreen : "";
  const iconColorClass = variant === "core" ? "text-[#005BB5]" : variant === "data" ? "text-[#039855]" : "text-[#CC3E07]";

  return (
    <div className={styles.agentNodeCard}>
      <div className={styles.featuredIconParent}>
        <div className={`${styles.featuredIcon} ${iconBgClass}`}>
          <Icon className={`w-5 h-5 ${iconColorClass}`} />
        </div>
        <div className={styles.dotsVerticalParent}>
          <MoreVertical className={styles.dotsVerticalIcon} />
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
        <div className={styles.workspaceAgentCardDescription}>{description}</div>
      </div>
      <div className={styles.dotsVerticalParent}>
        <MoreVertical className={styles.dotsVerticalIcon} />
      </div>
    </div>
  </div>
);

const WorkflowEditor: React.FC = () => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<"all" | "workspace">("all");
  const workspaceId = params.workspaceId as string;
  const iflowId = params.iflowId as string;

  const coreNodes = [
    { title: "Basic Agent", icon: Cpu },
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
      style: { strokeDasharray: "5 5", stroke: "#d5d7da", strokeWidth: 2 },
    },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const workspaceAgents = [
    {
      title: "CX Agent",
      description: "Sales representative focused on customer engagement and product recommendations",
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
    [setEdges]
  );

  return (
    <div className={styles.bodyContentParent}>
      {/* Left Sidebar */}
      <div className={styles.bodyContent}>
        <div className={styles.bodyContentInner}>
          <div className={styles.headerParent}>
            <div className={styles.header}>
              <Link href={`/${workspaceId}/${iflowId}`} className={styles.buttonsbutton}>
                <ChevronLeft className={styles.chevronLeftIcon} />
                <div className={styles.textPadding}>
                  <div className={styles.text}>Back to iFlows</div>
                </div>
              </Link>
            </div>
            <div className={styles.buttonGroup}>
              <div className={styles.buttonGroupBase}>
                <div className={styles.text2}>Order Support</div>
              </div>
              <div className={styles.buttonGroupBase2}>
                <ChevronLeft className="w-5 h-5 text-text-quaternary rotate-180" />
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
                  <div className={styles.horizontalTabsWrapper}>
                    <div className={styles.input}>
                      <div className={styles.content}>
                        <Search className="w-5 h-5 text-text-quaternary" />
                        <div className={styles.text8}>Search all nodes.. </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.bodyContent} custom-scrollbar`}>
            {activeTab === "all" ? (
              <>
                <div className={styles.agentTemplatesGroup}>
                  <div className={styles.header6}>
                    <div className={styles.coreAgentTemplates}>Core Agent Templates</div>
                    <div className={styles.badge3}>
                      <div className={styles.text7}>6</div>
                    </div>
                  </div>
                  <div className={styles.agentNodeCardParent}>
                    {coreNodes.map((node) => (
                      <NodeCard key={node.title} title={node.title} icon={node.icon} variant="core" />
                    ))}
                  </div>
                </div>

                <div className={styles.agentTemplatesGroup}>
                  <div className={styles.header6}>
                    <div className={styles.coreAgentTemplates}>Data Agent Templates</div>
                    <div className={styles.badge3}>
                      <div className={styles.text7}>6</div>
                    </div>
                  </div>
                  <div className={styles.agentNodeCardParent}>
                    {dataNodesList.map((node, index) => (
                      <NodeCard
                        key={`${node.title}-${index}`}
                        title={node.title}
                        icon={node.icon}
                        variant="data"
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.workspaceAgentsList}>
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

      {/* Main Content Area */}
      <div className={styles.bodyContent2}>
        <div className={styles.groupDiv}>
            <div className={styles.bodyContentLivesHereParent}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
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
                <button className={styles.testButton}>
                  <Play className={styles.actionIcon} />
                  <div className={styles.textPadding}>
                    <span className={styles.actionButtonText}>Test</span>
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

            <div className={styles.helpmenu}>
              <HelpCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowEditor;
