"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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
} from "lucide-react";
import styles from "./WorkflowEditor.module.css";

interface NodeCardProps {
  title: string;
  icon: React.ElementType;
  className?: string;
}

const NodeCard: React.FC<NodeCardProps> = ({ title, icon: Icon, className }) => (
  <div className={styles.agentNodeCard}>
    <div className={styles.featuredIconParent}>
      <div className={styles.featuredIcon}>
        <Icon className="w-5 h-5 text-[#CC3E07]" />
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

const WorkflowEditor: React.FC = () => {
  const params = useParams();
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

  const dataNodes = [
    { title: "Loader", icon: Database },
    { title: "Cleaner", icon: FileJson },
    { title: "Agent", icon: MessageSquare },
    { title: "Agent", icon: MessageSquare },
    { title: "Voice Agent", icon: Volume2 },
    { title: "Fallback Agent", icon: AlertCircle },
  ];

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
                  <div className={styles.tabButtonBase}>
                    <div className={styles.text}>All Nodes</div>
                    <div className={styles.badge2}>
                      <div className={styles.text3}>19</div>
                    </div>
                  </div>
                  <div className={styles.tabButtonBase2}>
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

            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.coreAgentTemplatesParent}>
                  <div className={styles.text}>Core Agent Templates</div>
                  <div className={styles.badge3}>
                    <div className={styles.text3}>6</div>
                  </div>
                </div>
                <div className={styles.agentNodeCardParent}>
                  {coreNodes.map((node) => (
                    <NodeCard key={node.title} title={node.title} icon={node.icon} />
                  ))}
                </div>
              </div>

              <div className={styles.frameGroup}>
                <div className={styles.coreAgentTemplatesParent}>
                  <div className={styles.text}>Data Agent Templates</div>
                  <div className={styles.badge3}>
                    <div className={styles.text3}>6</div>
                  </div>
                </div>
                <div className={styles.agentNodeCardParent}>
                  {dataNodes.map((node) => (
                    <NodeCard key={node.title} title={node.title} icon={node.icon} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.bodyContent2}>
        <div className={styles.groupDiv}>
          <div className={styles.bodyContentLivesHereParent}>
            <div className={styles.bodyContentLives}>Body Content lives here...</div>

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

            <div className={styles.dragAndDropToGetStartedParent}>
              <div className={styles.dragAndDrop}>Drag and Drop to get started</div>
              <div className={styles.startBuildingYour}>Start building your workflow</div>
              <div className={styles.buttonsbutton2}>
                <div className={styles.text}>Or choose a template to get started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowEditor;
