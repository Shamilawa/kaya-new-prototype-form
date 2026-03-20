import React, { useState } from "react";
import styles from "./AgentForm.module.css";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import EditorDrawer from "./EditorDrawer";

interface AgentFormProps {
  onCancel: () => void;
  onSave: () => void;
}

const AgentForm: React.FC<AgentFormProps> = ({ onCancel, onSave }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

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
              <div className={styles.text2}>Order Support</div>
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
                    <div className={styles.input}>
                      <div className={styles.content}>
                        <div className={styles.text5}>e.g. Customer Service Agent</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textareaInputField}>
                  <div className={styles.inputWithLabel2}>
                    <div className={styles.labelWrapper2}>
                      <div className={styles.label}>Purpose</div>
                    </div>
                    <div className={styles.input2}>
                      <div className={styles.text6}>What does this agent do?</div>
                    </div>
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
                    <div
                      className={styles.navMenuItemCardParent}
                      onClick={() => setIsEditorOpen(true)}
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
                  </div>
                </div>
                <div className={styles.textareaInputField2}>
                  <div className={styles.inputWithLabel3}>
                    <div className={styles.labelWrapper3}>
                      <div className={styles.label4}>Model</div>
                      <div className={styles.helpIcon2}>
                        <HelpCircle className={styles.helpCircleIcon} />
                      </div>
                    </div>
                    <div className={styles.navMenuItemCardParent}>
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
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordionItem}>
              <div className={styles.accordionTitle}>
                <div className={styles.title}>Advanced Options</div>
                <ChevronRight className={styles.chevronLeftIcon} />
              </div>
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
            <div className={styles.buttonsbutton3} onClick={onSave}>
              <div className={styles.textPadding}>
                <div className={styles.text}>Save</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditorDrawer
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        title="Setup Prompt Template"
        subtitle="Provide details to start building your prompt instruction."
      />
    </>
  );
};

export default AgentForm;
