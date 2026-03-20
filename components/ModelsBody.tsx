import React, { useState } from "react";
import { Plus, Cpu } from "lucide-react";
import styles from "./ModelsBody.module.css";

interface ModelsBodyProps {
  workspaceId: string;
}

const integrationCards = [
  { type: "LLM", brand: "Open AI", used: "6 workflows" },
  { type: "SLM", brand: "Open AI", used: "4 workflows" },
  { type: "LLM", brand: "Open AI", used: "2 workflows" },
  { type: "LLM", brand: "Open AI", used: "8 workflows" },
  { type: "STS", brand: "Open AI", used: "1 workflow" },
  { type: "LLM", brand: "Open AI", used: "3 workflows" },
];

const ModelsBody: React.FC<ModelsBodyProps> = ({ workspaceId }) => {
  const [activeTab, setActiveTab] = useState("View all");
  const tabs = ["View all", "LLMs", "SLM", "STS"];

  const filteredCards =
    activeTab === "View all"
      ? integrationCards
      : integrationCards.filter((card) => {
          if (activeTab === "LLMs") return card.type === "LLM";
          return card.type === activeTab;
        });

  return (
    <div className={styles["frame-parent"]}>
      <div className={styles["container-parent"]}>
        <div className={styles["container"]}>
          <div className={styles["image-wrap"]}>
            <div className={styles["image"]}></div>
          </div>

          <div className={styles["content"]}>
            <div className="flex items-center justify-between flex-wrap gap-5 w-full">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px]">
                    <Cpu className="w-[23px] h-[21px] text-[#FF5714]" />
                  </div>
                  <h1 className="text-2xl font-semibold text-text-primary leading-8">
                    Models
                  </h1>
                </div>
                <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                  Easily connect, manage, and scale the top AI models for your
                  specific use cases.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 px-3.5 py-2.5 bg-white text-[#414651] rounded-lg text-sm font-semibold border border-[#d5d7da] shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-gray-50 transition-colors cursor-pointer">
                  <span>Learn more</span>
                </button>
                <button className="flex items-center gap-1 px-3.5 py-2.5 bg-[#005BB5] text-white rounded-lg text-sm font-semibold shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-[#004A96] transition-colors cursor-pointer">
                  <Plus className="w-5 h-5" />
                  <span>Model</span>
                </button>
              </div>
            </div>

            <div className={styles["actions2"]}>
              <div className={styles["buttonsbutton3"]}></div>
              <div className={styles["buttonsbutton4"]}></div>
              <div className={styles["buttonsbutton4"]}></div>
              <div className={styles["buttonsbutton6"]}></div>
            </div>
            <div className={styles["select"]}></div>
          </div>

          <div className={styles["divider-icon"]}></div>
        </div>

        <div className={styles["horizontal-tabs"]}>
          <div className={styles["tabs"]}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={
                  activeTab === tab
                    ? styles["tab-button-base"]
                    : styles["tab-button-base2"]
                }
                onClick={() => setActiveTab(tab)}
              >
                <div className={styles["text3"]}>{tab}</div>
              </button>
            ))}
          </div>
        </div>

        <div className={styles["experience-parent"]}>
          {filteredCards.length === 0 && (
            <div className="text-center py-8 text-text-tertiary">
              No models found.
            </div>
          )}
          <div className={styles["experience"]}>
            {filteredCards.map((card, rowIndex) => (
              <div
                key={`card-${rowIndex}-${card.type}`}
                className={styles["integration-card-desktop"]}
              >
                <div className={styles["content3"]}>
                  <div className={styles["heading-and-toggle"]}>
                    <div className={styles["heading-and-icon-parent"]}>
                      <div className={styles["heading-and-icon"]}>
                        <div className={styles["icon-wrap"]}>
                          <div className={styles["linear"]}></div>
                        </div>
                        <div className={styles["heading"]}>GPT - 4</div>
                      </div>

                      {card.type === "LLM" && (
                        <div className={styles["badge-wrapper"]}>
                          <div className={styles["badge"]}>
                            <div className={styles["text8"]}>{card.type}</div>
                          </div>
                        </div>
                      )}
                      {card.type === "SLM" && (
                        <div className={styles["badge-frame"]}>
                          <div className={styles["badge3"]}>
                            <div className={styles["text8"]}>{card.type}</div>
                          </div>
                        </div>
                      )}
                      {card.type === "STS" && (
                        <div className={styles["badge-wrapper6"]}>
                          <div className={styles["badge9"]}>
                            <div className={styles["text8"]}>{card.type}</div>
                          </div>
                        </div>
                      )}

                      <div className={styles["badge-container"]}>
                        <div className={styles["badge2"]}>
                          <div className={styles["text8"]}>{card.brand}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["supporting-text2"]}>
                      Used in {card.used}
                    </div>
                  </div>
                </div>
                <div className={styles["section-footer"]}>
                  <div className={styles["divider-icon2"]}></div>
                  <div className={styles["content4"]}>
                    <div className={styles["actions3"]}>
                      <div className={styles["button"]}>
                        <div className={styles["text3"]}>View</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsBody;
