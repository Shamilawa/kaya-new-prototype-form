import React from "react";
import { Mic, Paperclip, Smile, ChevronLeft } from "lucide-react";
import styles from "./WorkflowTest.module.css";

interface WorkflowTestProps {
  onBack: () => void;
}

const WorkflowTest: React.FC<WorkflowTestProps> = ({ onBack }) => {
  return (
    <div className={`${styles.bodyContent} m-4! p-0! ml-0!`}>
      <div className={styles.navHeader}>
        <div className={styles.breadcrumbsWrapper}>
          <div className={styles.badge}>
            <div className={styles.dot}>
              <div className={styles.dot2} />
            </div>
            <div className={styles.text}>Ready to Test</div>
          </div>
        </div>
        <button className={styles.backButton} onClick={onBack}>
          <ChevronLeft size={16} />
          <span>Back to Editor</span>
        </button>
      </div>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.text2}>Start testing your Workflow</div>
              <div className={styles.supportingText}>
                Send a message below to test how your workflow responds. Each
                test runs in real-time using your configured settings and
                variables.
              </div>
            </div>
            <div className={styles.messageInput}>
              <div className={styles.messageAction}>
                <div className={styles.textareaInputField}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.input}>
                      <div className={styles.text3}>Message</div>
                    </div>
                  </div>
                </div>
                <button className={styles.buttonsbuttonUtility}>
                  <Mic size={16} />
                </button>
                <div className={styles.actions}>
                  <div className={styles.utilities}>
                    <button className={styles.buttonsbuttonUtility2}>
                      <Paperclip size={16} />
                    </button>
                    <button className={styles.buttonsbuttonUtility2}>
                      <Smile size={16} />
                    </button>
                  </div>
                  <button className={styles.buttonsbutton}>
                    <div className={styles.text4}>Send</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowTest;
