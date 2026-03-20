import React, { useState, useEffect } from "react";
import styles from "./AgentForm.module.css";
import { ChevronLeft, ChevronRight, HelpCircle, Pencil, Trash2, Minus } from "lucide-react";
import PromptTemplateDrawer from "./PromptTemplateDrawer";
import ModelDrawer from "./ModelDrawer";
import AdvancedDrawer from "./AdvancedDrawer";

export interface AgentFormData {
  name: string;
  purpose: string;
  selectedTemplateName: string | null;
  selectedModelName: string | null;
  addedTools: any[];
  isHumanReviewEnabled: boolean;
  isSelfLearningEnabled: boolean;
}

interface AgentFormProps {
  onCancel: () => void;
  onSave: (data: AgentFormData) => void;
  initialData?: Partial<AgentFormData>;
}

const AgentForm: React.FC<AgentFormProps> = ({ onCancel, onSave, initialData }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isModelDrawerOpen, setIsModelDrawerOpen] = useState(false);
  const [isAdvancedDrawerOpen, setIsAdvancedDrawerOpen] = useState(false);
  
  const [agentName, setAgentName] = useState(initialData?.name || "Order Support");
  const [agentPurpose, setAgentPurpose] = useState(initialData?.purpose || "");
  const [selectedTemplateName, setSelectedTemplateName] = useState<string | null>(initialData?.selectedTemplateName || null);
  const [selectedModelName, setSelectedModelName] = useState<string | null>(initialData?.selectedModelName || null);

  const [isAdvancedExpanded, setIsAdvancedExpanded] = useState(false);
  const [addedTools, setAddedTools] = useState<any[]>(initialData?.addedTools || []);
  const [isHumanReviewEnabled, setIsHumanReviewEnabled] = useState(initialData?.isHumanReviewEnabled || false);
  const [isSelfLearningEnabled, setIsSelfLearningEnabled] = useState(initialData?.isSelfLearningEnabled || false);

  // Sync with initialData if it changes
  useEffect(() => {
    if (initialData) {
      if (initialData.name) setAgentName(initialData.name);
      if (initialData.purpose) setAgentPurpose(initialData.purpose);
      if (initialData.selectedTemplateName !== undefined) setSelectedTemplateName(initialData.selectedTemplateName);
      if (initialData.selectedModelName !== undefined) setSelectedModelName(initialData.selectedModelName);
      if (initialData.addedTools) setAddedTools(initialData.addedTools);
      if (initialData.isHumanReviewEnabled !== undefined) setIsHumanReviewEnabled(initialData.isHumanReviewEnabled);
      if (initialData.isSelfLearningEnabled !== undefined) setIsSelfLearningEnabled(initialData.isSelfLearningEnabled);
    }
  }, [initialData]);

  const handleCreateTemplate = (name: string) => {
    setSelectedTemplateName(name);
    setIsEditorOpen(false);
  };

  const handleAddModel = (name: string) => {
    setSelectedModelName(name);
    setIsModelDrawerOpen(false);
  };

  const handleAddTools = (tools: any[]) => {
    setAddedTools(tools);
    setIsAdvancedDrawerOpen(false);
    if (tools.length > 0) {
      setIsAdvancedExpanded(true);
    }
  };

  const handleAdvancedOptionsClick = () => {
    if (addedTools.length === 0 && !isAdvancedExpanded) {
      setIsAdvancedDrawerOpen(true);
    } else {
      setIsAdvancedExpanded(!isAdvancedExpanded);
    }
  };

  const handleSave = () => {
    onSave({
      name: agentName,
      purpose: agentPurpose,
      selectedTemplateName,
      selectedModelName,
      addedTools,
      isHumanReviewEnabled,
      isSelfLearningEnabled
    });
  };

  return (
    <>
      <div className={styles.bodyContentInner}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <div className={styles.buttonsbutton} onClick={onCancel}>
              <ChevronLeft className={styles.chevronLeftIcon} />
              <div className={styles.textPadding}>
                <div className={styles.text}>Back to iFlows</div>
              </div>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <div className={styles.buttonGroupBase}>
              <div className={styles.text2}>{agentName}</div>
            </div>
            <div className={styles.buttonGroupBase2}>
              <ChevronLeft className={styles.chevronLeftIcon} />
            </div>
          </div>
          <div className={styles.badgeParent}>
            <div className={styles.badge}>
              <div className={styles.text3}>Draft</div>
            </div>
            <div className={styles.frameChild}></div>
            <div className={styles.saved2minsAgo}>Saved 2mins ago</div>
          </div>
        </div>
      </div>
      <div className={styles.bodyContentChild}>
        <div className={styles.subheadingWrapperParent}>
          <div className={styles.subheadingWrapper}>
            <b className={styles.configureAgent}>CONFIGURE AGENT</b>
          </div>
          <div className={styles.accordion}>
            <div className={styles.frameParent}>
              <div className={styles.agentBasicsParent}>
                <div className={styles.agentBasics}>Agent Basics</div>
                <div className={styles.badge2}>
                  <div className={styles.text3}>Required</div>
                </div>
              </div>
              <div className={styles.inputFieldParent}>
                <div className={styles.inputField}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.labelWrapper}>
                      <div className={styles.label}>Name</div>
                    </div>
                    <input 
                      className={styles.input}
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      placeholder="e.g. Customer Service Agent"
                    />
                  </div>
                </div>
                <div className={styles.textareaInputField}>
                  <div className={styles.inputWithLabel2}>
                    <div className={styles.labelWrapper2}>
                      <div className={styles.label}>Purpose</div>
                    </div>
                    <textarea 
                      className={styles.input2}
                      value={agentPurpose}
                      onChange={(e) => setAgentPurpose(e.target.value)}
                      placeholder="What does this agent do?"
                    />
                  </div>
                </div>
                <div className={styles.textareaInputField2}>
                  <div className={styles.inputWithLabel3}>
                    <div className={styles.labelWrapper3}>
                      <div className={styles.label}>Prompt instructions</div>
                      <div className={styles.helpIcon}>
                        <HelpCircle className={styles.helpCircleIcon} />
                      </div>
                    </div>
                    {selectedTemplateName ? (
                      <div className={styles.selectedTemplateCard}>
                        <div className={styles.templateName}>{selectedTemplateName}</div>
                        <div className={styles.templateActions}>
                          <div 
                            className={styles.actionIcon} 
                            onClick={(e) => { e.stopPropagation(); setIsEditorOpen(true); }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && setIsEditorOpen(true)}
                          >
                            <Pencil size={18} />
                          </div>
                          <div 
                            className={styles.actionIcon} 
                            onClick={(e) => { e.stopPropagation(); setSelectedTemplateName(null); }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && setSelectedTemplateName(null)}
                          >
                            <Trash2 size={18} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={styles.navMenuItemCardParent}
                        onClick={() => setIsEditorOpen(true)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setIsEditorOpen(true)}
                      >
                        <div className={styles.navMenuItemCard}>
                          <div className={styles.content2}>
                            <div className={styles.textAndSupportingText}>
                              <div className={styles.text7}>Set up prompt instruction</div>
                              <div className={styles.supportingText}>
                                No prompt instruction configured yet
                              </div>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className={styles.chevronRightIcon} />
                      </div>
                    )}
                  </div>
                  <div className={styles.hintText}>Define the agent's role, tone, and key rules.</div>
                </div>
                <div className={styles.textareaInputField2}>
                  <div className={styles.inputWithLabel3}>
                    <div className={styles.labelWrapper3}>
                      <div className={styles.label4}>Model</div>
                      <div className={styles.helpIcon2}>
                        <HelpCircle className={styles.helpCircleIcon} />
                      </div>
                    </div>
                    {selectedModelName ? (
                      <div className={styles.selectedTemplateCard}>
                        <div className={styles.templateName}>{selectedModelName}</div>
                        <div className={styles.templateActions}>
                          <div 
                            className={styles.actionIcon} 
                            onClick={(e) => { e.stopPropagation(); setIsModelDrawerOpen(true); }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && setIsModelDrawerOpen(true)}
                          >
                            <Pencil size={18} />
                          </div>
                          <div 
                            className={styles.actionIcon} 
                            onClick={(e) => { e.stopPropagation(); setSelectedModelName(null); }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && setSelectedModelName(null)}
                          >
                            <Trash2 size={18} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={styles.navMenuItemCardParent}
                        onClick={() => setIsModelDrawerOpen(true)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setIsModelDrawerOpen(true)}
                      >
                        <div className={styles.navMenuItemCard}>
                          <div className={styles.content2}>
                            <div className={styles.textAndSupportingText}>
                              <div className={styles.text7}>Select model</div>
                              <div className={styles.supportingText}>
                                No intelligence source configured yet
                              </div>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className={styles.chevronRightIcon} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.accordionItem}>
              <div 
                className={styles.accordionTitle}
                onClick={handleAdvancedOptionsClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleAdvancedOptionsClick()}
              >
                <div className={styles.title}>Advanced Options</div>
                {isAdvancedExpanded ? <Minus size={16} /> : <ChevronRight className={styles.chevronLeftIcon} />}
              </div>
              
              {isAdvancedExpanded && (
                <div className={styles.advancedSection}>
                  <div className={styles.advancedCategory}>
                    <div className={styles.categoryTitleWrapper}>
                      <div className={styles.categoryTitle}>Data and Tools</div>
                      <HelpCircle size={14} color="#717680" />
                    </div>
                    
                    <div className={styles.addedToolsList}>
                      {addedTools.map((tool) => (
                        <div key={tool.id} className={styles.selectedTemplateCard}>
                          <div className={styles.templateName}>{tool.name}</div>
                          <div className={styles.templateActions}>
                            <div className={styles.actionIcon} onClick={() => setAddedTools(addedTools.filter(t => t.id !== tool.id))}>
                              <Trash2 size={18} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.dashCard} onClick={() => setIsAdvancedDrawerOpen(true)}>
                      <div className={styles.dashCardContent}>
                        <div className={styles.dashCardTitle}>Add data and tools</div>
                        <div className={styles.dashCardSub}>No tools and/or data configured yet</div>
                      </div>
                      <ChevronRight size={20} color="#717680" />
                    </div>
                  </div>

                  <div className={styles.advancedCategory}>
                    <div className={styles.categoryTitleWrapper}>
                      <div className={styles.categoryTitle}>Guardrails</div>
                      <HelpCircle size={14} color="#717680" />
                    </div>
                    <div className={styles.dashCard}>
                      <div className={styles.dashCardContent}>
                        <div className={styles.dashCardTitle}>Setup guardrails</div>
                        <div className={styles.dashCardSub}>No guardrails configured yet</div>
                      </div>
                      <ChevronRight size={20} color="#717680" />
                    </div>
                  </div>

                  <div className={styles.advancedCategory}>
                    <div className={styles.categoryTitleWrapper}>
                      <div className={styles.categoryTitle}>Output Broadcasting</div>
                      <HelpCircle size={14} color="#717680" />
                    </div>
                    <div className={styles.dashCard}>
                      <div className={styles.dashCardContent}>
                        <div className={styles.dashCardTitle}>Add output broadcasting</div>
                        <div className={styles.dashCardSub}>No guardrails configured yet</div>
                      </div>
                      <ChevronRight size={20} color="#717680" />
                    </div>
                  </div>

                  <div className={styles.toggleRow}>
                    <div className={styles.toggleText}>
                      <div className={styles.toggleLabel}>Human Review</div>
                      <div className={styles.toggleDescription}>
                        Require human approval before the agent performs certain actions.
                      </div>
                    </div>
                    <div 
                      className={`${styles.toggleSwitch} ${isHumanReviewEnabled ? styles.active : ""}`}
                      onClick={() => setIsHumanReviewEnabled(!isHumanReviewEnabled)}
                    >
                      <div className={styles.toggleThumb}></div>
                    </div>
                  </div>

                  <div className={styles.toggleRow}>
                    <div className={styles.toggleText}>
                      <div className={styles.toggleLabel}>Self-learning</div>
                      <div className={styles.toggleDescription}>
                        Let your agent learn from past interactions to improve over time.
                      </div>
                    </div>
                    <div 
                      className={`${styles.toggleSwitch} ${isSelfLearningEnabled ? styles.active : ""}`}
                      onClick={() => setIsSelfLearningEnabled(!isSelfLearningEnabled)}
                    >
                      <div className={styles.toggleThumb}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.content4}>
          <div className={styles.actions}>
            <div className={styles.buttonsbutton2} onClick={onCancel}>
              <div className={styles.textPadding}>
                <div className={styles.text}>Cancel</div>
              </div>
            </div>
            <div className={styles.buttonsbutton3} onClick={handleSave}>
              <div className={styles.textPadding}>
                <div className={styles.text}>Save</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PromptTemplateDrawer
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onCreate={handleCreateTemplate}
      />
      <ModelDrawer
        isOpen={isModelDrawerOpen}
        onClose={() => setIsModelDrawerOpen(false)}
        onAdd={handleAddModel}
      />
      <AdvancedDrawer
        isOpen={isAdvancedDrawerOpen}
        onClose={() => setIsAdvancedDrawerOpen(false)}
        onAdd={handleAddTools}
      />
    </>
  );
};

export default AgentForm;
