import React, { useState } from "react";
import { X, ArrowUpRight, Search, Check } from "lucide-react";
import styles from "./ModelDrawer.module.css";
import EditorDrawer from "./EditorDrawer";

interface ModelDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: (modelName: string) => void;
}

const ModelDrawer: React.FC<ModelDrawerProps> = ({ isOpen, onClose, onAdd }) => {
  const [selectedModel, setSelectedModel] = useState<string>("GPT-4");

  const handleAdd = () => {
    if (onAdd) {
      onAdd(selectedModel);
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
              <div className={styles.text}>Add Model</div>
              <div className={styles.supportingText}>
                Select the AI model that powers this agent's responses.
              </div>
            </div>
            <div className={styles.buttonsbutton}>
              <div className={styles.text2}>Learn more about models</div>
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
          <div className={styles.selectParent}>
            <div className={styles.select}>
              <div className={styles.inputWithLabel}>
                <div className={styles.input}>
                  <div className={styles.content3}>
                    <Search size={20} />
                    <div className={styles.text5}>Search models...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsbutton3}>
              <ArrowUpRight size={20} />
              <div className={styles.textPadding}>
                <div className={styles.text6}>Connect new model</div>
              </div>
            </div>
          </div>

          <div className={styles.textAndSupportingText3}>
            <div className={styles.textGroup}>
              <div className={styles.text7}>Large Language Models (LLM)</div>
              <div className={styles.badge}>
                <div className={styles.text8}>4</div>
              </div>
            </div>
            <div className={styles.supportingText2}>
              Best for complex reasoning, nuanced understanding, and general-purpose tasks.
            </div>
          </div>

          <div 
            className={`${styles.radioGroupItem} ${selectedModel === "GPT-4" ? styles.selected : ""}`}
            onClick={() => setSelectedModel("GPT-4")}
          >
            <div className={styles.content4}>
              <div className={styles.input2}>
                <div className={`${styles.checkboxBase} ${selectedModel === "GPT-4" ? styles.checked : ""}`}>
                  {selectedModel === "GPT-4" && <div className={styles.check}></div>}
                </div>
              </div>
              <div className={styles.textAndSupportingText4}>
                <div className={styles.textAndSubtextParent}>
                  <div className={styles.textAndSubtext}>
                    <div className={styles.text9}>GPT-4</div>
                    <div className={styles.subtext}>OpenAI</div>
                  </div>
                  <div className={styles.supportingTextWrapper}>
                    <div className={styles.supportingText3}>
                      Best when you need the most accurate, thoughtful answers.
                    </div>
                  </div>
                </div>
                <div className={styles.badgeParent}>
                  <div className={styles.badge2}>
                    <div className={styles.text8}>Best quality</div>
                  </div>
                  <div className={styles.badge3}>
                    <div className={styles.text8}>Higher cost</div>
                  </div>
                  <div className={styles.badge2}>
                    <div className={styles.text8}>Fast</div>
                  </div>
                </div>
                <div className={styles.checkIconParent}>
                  <div className={styles.checkIcon}>
                    <Check size={12} className={styles.icon} />
                  </div>
                  <div className={styles.supportingText4}>
                    Handles long documents (up to 128K tokens)
                  </div>
                </div>
                <div className={styles.checkIconParent}>
                  <div className={styles.checkIcon}>
                    <Check size={12} className={styles.icon} />
                  </div>
                  <div className={styles.supportingText4}>Great for tools & APIs</div>
                </div>
                <div className={styles.checkIconParent}>
                  <div className={styles.checkIcon}>
                    <Check size={12} className={styles.icon} />
                  </div>
                  <div className={styles.supportingText4}>Great for long reasoning</div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`${styles.radioGroupItem2} ${selectedModel === "GPT-5" ? styles.selected : ""}`}
            onClick={() => setSelectedModel("GPT-5")}
          >
            <div className={styles.content4}>
              <div className={styles.input2}>
                <div className={`${styles.checkboxBase2} ${selectedModel === "GPT-5" ? styles.checked : ""}`}>
                  {selectedModel === "GPT-5" && <div className={styles.check}></div>}
                </div>
              </div>
              <div className={styles.textAndSupportingText4}>
                <div className={styles.textAndSubtextParent}>
                  <div className={styles.textAndSubtext}>
                    <div className={styles.text9}>GPT-5</div>
                    <div className={styles.subtext}>OpenAI</div>
                  </div>
                  <div className={styles.supportingTextWrapper}>
                    <div className={styles.supportingText3}>
                      Best when you need the most accurate, thoughtful answers.
                    </div>
                  </div>
                </div>
                <div className={styles.badgeParent}>
                  <div className={styles.badge2}>
                    <div className={styles.text8}>Best quality</div>
                  </div>
                  <div className={styles.badge3}>
                    <div className={styles.text8}>Higher cost</div>
                  </div>
                  <div className={styles.badge2}>
                    <div className={styles.text8}>Fast</div>
                  </div>
                </div>
                <div className={styles.checkIconParent}>
                  <div className={styles.checkIcon}>
                    <Check size={12} className={styles.icon} />
                  </div>
                  <div className={styles.supportingText4}>
                    Handles long documents (up to 128K tokens)
                  </div>
                </div>
                <div className={styles.checkIconParent}>
                  <div className={styles.checkIcon}>
                    <Check size={12} className={styles.icon} />
                  </div>
                  <div className={styles.supportingText4}>Great for tools & APIs</div>
                </div>
                <div className={styles.checkIconParent}>
                  <div className={styles.checkIcon}>
                    <Check size={12} className={styles.icon} />
                  </div>
                  <div className={styles.supportingText4}>Great for long reasoning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.content6}>
          <div className={styles.actions}>
            <button className={styles.buttonsbutton4} onClick={onClose}>
              <div className={styles.textPadding}>
                <div className={styles.text2}>Cancel</div>
              </div>
            </button>
            <button className={styles.buttonsbutton5} onClick={handleAdd}>
              <div className={styles.textPadding}>
                <div className={styles.text2}>Add Model</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </EditorDrawer>
  );
};

export default ModelDrawer;
