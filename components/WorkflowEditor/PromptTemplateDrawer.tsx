import React, { useState } from "react";
import { X, ArrowUpRight, Sparkles } from "lucide-react";
import styles from "./EditorDrawer.module.css";
import EditorDrawer from "./EditorDrawer";

interface PromptTemplateDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (name: string) => void;
}

const PromptTemplateDrawer: React.FC<PromptTemplateDrawerProps> = ({ isOpen, onClose, onCreate }) => {
  const [promptName, setPromptName] = useState("");
  const [description, setDescription] = useState("");
  const [promptInstructions, setPromptInstructions] = useState("");

  const handleCreate = () => {
    if (onCreate && promptName.trim()) {
      onCreate(promptName);
    }
    onClose();
  };

  return (
    <EditorDrawer isOpen={isOpen} onClose={onClose}>
      <div className={styles.slideOutMenuHeader}>
        <div className={styles.content}>
          <div className={styles.featuredIcon}></div>
          <div className={styles.textAndSupportingText}>
            <div className={styles.textParent}>
              <div className={styles.text}>New Prompt Template</div>
              <div className={styles.supportingText}>
                Create a prompt template for your agents.
              </div>
            </div>
            <div className={styles.buttonsbutton}>
              <div className={styles.text2}>Learn more about prompt templates</div>
              <ArrowUpRight className={styles.arrowNarrowUpRightIcon} />
            </div>
          </div>
        </div>
        <button className={styles.buttonsbuttonCloseX} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
      </div>

      <div className={styles.content2}>
        <div className={styles.section2}>
          <div className={styles.inputField}>
            <div className={styles.inputWithLabel}>
              <div className={styles.labelWrapper}>
                <div className={styles.label}>Prompt Name</div>
              </div>
              <input 
                className={styles.input}
                value={promptName}
                onChange={(e) => setPromptName(e.target.value)}
                placeholder="e.g. Onboarding Prompt"
              />
            </div>
          </div>

          <div className={styles.textareaInputField}>
            <div className={styles.inputWithLabel2}>
              <div className={styles.labelWrapper2}>
                <div className={styles.label}>Description</div>
                <div className={styles.asterisk}>*</div>
              </div>
              <textarea 
                className={styles.input2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Summarize customer feedback"
              />
            </div>
            <div className={styles.hintText}>
              Explain the template's purpose and ideal use cases.
            </div>
          </div>

          <div className={styles.textareaInputField}>
            <div className={styles.inputWithLabel2}>
              <div className={styles.labelWrapper3}>
                <div className={styles.label}>
                  <span>Prompt instructions </span>
                  <span className={styles.typeTo}>
                    (Type @ to insert variables and other options.)
                  </span>
                </div>
              </div>
              <textarea 
                className={styles.input2}
                value={promptInstructions}
                onChange={(e) => setPromptInstructions(e.target.value)}
                placeholder="e.g. Summarize customer feedback"
              />
            </div>
            <div className={styles.hintText}>Define the agent's role, tone, and key rules.</div>
          </div>
        </div>

        <div className={styles.banner}>
          <div className={styles.featuredIcon2}>
            <Sparkles size={24} />
          </div>
          <div className={styles.textAndSupportingText3}>
            <div className={styles.text8}>
              Optional: Use AI to apply prompt frameworks and refine instructions.
            </div>
            <div className={styles.supportingText2}>
              Optional: Use AI to apply prompt frameworks and refine instructions.
            </div>
            <div className={styles.buttonsbutton3}>
              <Sparkles size={16} />
              <div className={styles.textPadding}>
                <div className={styles.text2}>Improve prompt</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.content4}>
          <div className={styles.actions2}>
            <button className={styles.buttonsbutton5} onClick={onClose}>
              <div className={styles.textPadding}>
                <div className={styles.text2}>Cancel</div>
              </div>
            </button>
            <button className={styles.buttonsbutton6} onClick={handleCreate}>
              <div className={styles.textPadding}>
                <div className={styles.text2}>Create Template</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </EditorDrawer>
  );
};

export default PromptTemplateDrawer;
