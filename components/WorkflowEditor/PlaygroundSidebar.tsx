import React from "react";
import {
  ChevronLeft,
  HelpCircle,
  Edit2,
  Trash2,
  Plus,
  Bot,
  ChevronDown,
} from "lucide-react";
import styles from "./PlaygroundSidebar.module.css";
import AddVariableDrawer from "./AddVariableDrawer";

interface PlaygroundSidebarProps {
  onBack: () => void;
  onCancel: () => void;
  onSave: () => void;
  agents: { id: string, name: string, promptTemplate: string, model: string }[];
  onViewInWorkflow: (agentId: string) => void;
  onEditAgent: (agentId: string) => void;
}

const PlaygroundSidebar: React.FC<PlaygroundSidebarProps> = ({
  onBack,
  onCancel,
  onSave,
  agents,
  onViewInWorkflow,
  onEditAgent,
}) => {
  const [isAddVariableDrawerOpen, setIsAddVariableDrawerOpen] = React.useState(false);
  const [variables, setVariables] = React.useState<{ name: string, value: string }[]>([
    { name: "user_name", value: "John" }
  ]);
  const [editingVariable, setEditingVariable] = React.useState<{ name: string, value: string } | null>(null);

  const handleAddOrUpdateVariable = (variable: { name: string, value: string }) => {
    setVariables(prev => {
      const exists = prev.find(v => v.name === variable.name);
      if (exists) {
        return prev.map(v => v.name === variable.name ? variable : v);
      }
      return [...prev, variable];
    });
  };

  const handleDeleteVariable = (name: string) => {
    setVariables(prev => prev.filter(v => v.name !== name));
  };

  const handleEditClick = (variable: { name: string, value: string }) => {
    setEditingVariable(variable);
    setIsAddVariableDrawerOpen(true);
  };

  return (
    <div className={`${styles.bodyContent} h-[calc(100%-32px)]! m-4! w-fit!`}>
      <div className={styles.bodyContentInner}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <div className={styles.buttonsButton} onClick={onBack}>
              <ChevronLeft className={styles.chevronLeftIcon} />
              <div className={styles.textPadding}>
                <div className={styles.text}>Back</div>
              </div>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <div className={styles.buttonGroupBase}>
              <div className={styles.text2}>Order Support</div>
            </div>
            <div className={styles.buttonGroupBase2}>
              <ChevronDown className="w-5 h-5" />
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

      <div className={`${styles.bodyContentChild} font-sans!`}>
        <div className={styles.frameParent}>
          <div className={styles.subheadingWrapperParent}>
            <div className={styles.subheadingWrapper}>
              <b className={styles.testInPlayground}>TEST IN PLAYGROUND</b>
            </div>
          </div>

          <div className={styles.textareaInputFieldParent}>
            <div className={styles.textareaInputField}>
              <div className={styles.inputWithLabel}>
                <div className={styles.variablesParent}>
                  <div className={styles.variables}>Variables</div>
                  <HelpCircle className={styles.helpCircleIcon} />
                </div>
                <div className={styles.cards}>
                  {variables.map((v, i) => (
                    <React.Fragment key={v.name}>
                      <div className={styles.navMenuItemCard}>
                        <div className={styles.content}>
                          <div className={styles.textAndSupportingText}>
                            <div className={styles.text4}>{v.name}</div>
                            <div className={styles.text5}>{v.value}</div>
                          </div>
                        </div>
                        <div className={styles.actions}>
                          <div 
                            className={styles.buttonsButtonUtility3}
                            onClick={() => handleEditClick(v)}
                          >
                            <Edit2 className="w-4 h-4 text-text-quaternary" />
                          </div>
                          <div 
                            className={styles.buttonsButtonUtility3}
                            onClick={() => handleDeleteVariable(v.name)}
                          >
                            <Trash2 className="w-4 h-4 text-text-quaternary" />
                          </div>
                        </div>
                      </div>
                      {i < variables.length - 1 && <div className={styles.dividerIcon} />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <button 
              className={styles.buttonsButton4}
              onClick={() => {
                setEditingVariable(null);
                setIsAddVariableDrawerOpen(true);
              }}
            >
              <Plus className="w-5 h-5" />
              <div className={styles.textPadding}>
                <div className={styles.text6}>Add workflow variables</div>
              </div>
            </button>
          </div>

          <div className={styles.textareaInputFieldParent}>
            <div className={styles.accordionTitle}>
              <div className={styles.workflowAgents}>Workflow Agents</div>
            </div>
            <div className={styles.sectionParent}>
              {agents.length > 0 ? (
                agents.map((agent, i) => (
                  <div key={i} className={styles.card}>
                    <div className={styles.content3}>
                      <div className={styles.frameGroup}>
                        <div
                          className={`${styles.featuredIconParent} font-sans!`}
                        >
                          <div className={styles.featuredIcon}>
                            <Bot className="w-6 h-6" />
                          </div>
                          <div className={styles.sectionHeader}>
                            <div className={styles.content4}>
                              <div className={styles.text7}>{agent.name}</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.accordionTitle}>
                          <div className={styles.promptTemplateCxContainer}>
                            <span className={styles.promptTemplate}>
                              Prompt Template:{" "}
                            </span>
                            <span className={styles.cxPrompt}>
                              {agent.promptTemplate}
                            </span>
                          </div>
                        </div>
                        <div className={styles.testInPlayground}>
                          <span className={styles.promptTemplate}>
                            Intelligence Source:{" "}
                          </span>
                          <span className={styles.cxPrompt}>{agent.model}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sectionFooter}>
                      <div className={styles.dividerIcon} />
                      <div className={styles.content5}>
                        <div className={styles.actions2}>
                          <button
                            className={`${styles.buttonsButton7} font-sans!`}
                            onClick={() => onViewInWorkflow(agent.id)}
                          >
                            View in workflow
                          </button>
                          <button 
                            className={styles.buttonsButton8}
                            onClick={() => onEditAgent(agent.id)}
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  No agents setup in the workflow editor yet. Add an agent template from the left sidebar to get started.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.content18}>
          <div className={styles.actions6}>
            <button className={styles.buttonsButton25} onClick={onCancel}>
              Cancel
            </button>
            <button
              className={`${styles.buttonsButton26} bg-[#005BB5]!`}
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <AddVariableDrawer 
        isOpen={isAddVariableDrawerOpen} 
        onClose={() => {
          setIsAddVariableDrawerOpen(false);
          setEditingVariable(null);
        }} 
        onSave={handleAddOrUpdateVariable}
        initialVariable={editingVariable}
      />
    </div>
  );
};

export default PlaygroundSidebar;
