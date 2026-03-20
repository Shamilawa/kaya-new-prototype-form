import React, { useState } from "react";
import { X, Search, Link, ChevronRight } from "lucide-react";
import styles from "./AdvancedDrawer.module.css";
import EditorDrawer from "./EditorDrawer";

interface AdvancedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: (items: any[]) => void;
}

const TABS = ["APIs", "MCP Servers", "Vector RAGs", "Graph RAGs", "Connectors", "Functions"];

const DUMMY_DATA: Record<string, any[]> = {
  APIs: [
    {
      id: "crm-api",
      name: "CRM API",
      description: "Get customer profiles and interaction history.",
      badges: ["GET · Read only", "Sign-in: API key"],
    },
    {
      id: "erp-api",
      name: "ERP API",
      description: "Access supply chain and inventory data.",
      badges: ["GET/POST", "Sign-in: OAuth"],
    },
    {
      id: "billing-api",
      name: "Billing API",
      description: "Manage subscriptions and invoice generation.",
      badges: ["POST · Write", "Sign-in: API key"],
    },
  ],
  "MCP Servers": [
    {
      id: "github-mcp",
      name: "GitHub MCP",
      description: "Interact with repositories, issues, and PRs.",
      badges: ["Full access", "Personal Token"],
    },
    {
      id: "slack-mcp",
      name: "Slack MCP",
      description: "Post messages and read channel history.",
      badges: ["Write/Read", "Bot Token"],
    },
  ],
  "Vector RAGs": [
    {
      id: "product-docs",
      name: "Product Docs",
      description: "Technical documentation for all company products.",
      badges: ["Read only", "Internal"],
    },
    {
      id: "hr-manuals",
      name: "HR Manuals",
      description: "Employee handbook and policy documents.",
      badges: ["Read only", "Secret"],
    },
  ],
  "Graph RAGs": [
    {
      id: "customer-graph",
      name: "Customer Graph",
      description: "Relationship map between users and products.",
      badges: ["Query only", "Managed"],
    },
  ],
  Connectors: [
    {
      id: "snowflake",
      name: "Snowflake",
      description: "Direct connection to the data warehouse.",
      badges: ["Read/Write", "SQL"],
    },
  ],
  Functions: [
    {
      id: "python-runner",
      name: "Python Script Runner",
      description: "Execute custom python logic safely.",
      badges: ["Execute", "Sandboxed"],
    },
  ],
};

const AdvancedDrawer: React.FC<AdvancedDrawerProps> = ({ isOpen, onClose, onAdd }) => {
  const [activeTab, setActiveTab] = useState("APIs");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAdd = () => {
    if (onAdd) {
      // Find all selected item objects across all tabs
      const selectedItemObjects: any[] = [];
      Object.values(DUMMY_DATA).forEach((items) => {
        items.forEach((item) => {
          if (selectedItems.includes(item.id)) {
            selectedItemObjects.push(item);
          }
        });
      });
      onAdd(selectedItemObjects);
    }
    onClose();
  };

  const currentData = DUMMY_DATA[activeTab] || [];

  return (
    <EditorDrawer isOpen={isOpen} onClose={onClose}>
      <div className={styles.slideOutMenuHeader}>
        <div className={styles.content}>
          <div className={styles.featuredIcon}></div>
          <div className={styles.textAndSupportingText}>
            <div className={styles.textParent}>
              <div className={styles.text}>Add data and tools</div>
              <div className={styles.supportingText}>
                Connect the apps and data sources your agent can use to answer questions and take action.
              </div>
            </div>
          </div>
        </div>
        <button className={styles.buttonsbuttonCloseX} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
      </div>

      <div className={styles.content2}>
        <div className={styles.section}>
          <div className={styles.textAndSupportingText2}>
            <div className={styles.text2}>Share project</div>
            <div className={styles.iconAndText}>
              <Link className={styles.link01} size={16} />
              <div className={styles.text3}>untitledui.com/project/marketing-site</div>
            </div>
          </div>
          <div className={styles.buttonsbutton}></div>
        </div>

        <div className={styles.section2}>
          <div className={styles.selectParent}>
            <div className={styles.select}>
              <div className={styles.inputWithLabel}>
                <div className={styles.input}>
                  <div className={styles.content3}>
                    <Search size={20} />
                    <div className={styles.text4}>Search {activeTab}...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsbutton2}>
              <div className={styles.textPadding}>
                <div className={styles.text5}>Connect new integration</div>
              </div>
            </div>
          </div>

          <div className={styles.horizontalTabsParent}>
            <div className={styles.horizontalTabs}>
              <div className={styles.tabs}>
                {TABS.map((tab) => (
                  <div
                    key={tab}
                    className={activeTab === tab ? styles.tabButtonBase : styles.tabButtonBase2}
                    onClick={() => setActiveTab(tab)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveTab(tab)}
                  >
                    <div className={styles.text6}>{tab}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.supportingTextParent}>
              <div className={styles.supportingText2}>
                Connect the apps and data sources your agent can use to answer questions and take action.
              </div>
              <div className={styles.buttonsbutton3}>
                <div className={styles.text6}>Learn more about {activeTab}</div>
                <ChevronRight size={14} style={{ marginLeft: '4px' }} />
              </div>
            </div>
          </div>

          {currentData.map((item) => (
            <div
              key={item.id}
              className={selectedItems.includes(item.id) ? styles.radioGroupItem : styles.radioGroupItem2}
              onClick={() => toggleItem(item.id)}
              role="checkbox"
              aria-checked={selectedItems.includes(item.id)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleItem(item.id)}
            >
              <div className={styles.content4}>
                <div className={styles.input2}>
                  <div className={selectedItems.includes(item.id) ? styles.checkboxBase : styles.checkboxBase2}>
                    {selectedItems.includes(item.id) && <X className={styles.checkIcon} size={14} />}
                  </div>
                </div>
                <div className={styles.textAndSupportingText3}>
                  <div className={styles.textParent}>
                    <div className={styles.textAndSubtext}>
                      <div className={styles.text13}>{item.name}</div>
                    </div>
                    <div className={styles.supportingTextWrapper}>
                      <div className={styles.supportingText3}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <div className={styles.badgeParent}>
                    {item.badges.map((badge: string, idx: number) => (
                      <div key={idx} className={idx === 0 ? styles.badge : styles.badge2}>
                        <div className={styles.text14}>{badge}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.content6}>
          <div className={styles.actions}>
            <button className={styles.buttonsbutton4} onClick={onClose}>
              <div className={styles.textPadding}>
                <div className={styles.text6}>Cancel</div>
              </div>
            </button>
            <button className={styles.buttonsbutton5} onClick={handleAdd}>
              <div className={styles.textPadding}>
                <div className={styles.text6}>Add Selected ({selectedItems.length})</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </EditorDrawer>
  );
};

export default AdvancedDrawer;
