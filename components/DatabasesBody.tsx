import React, { useState } from "react";
import { Plus, Database } from "lucide-react";
import styles from "./ModelsBody.module.css";
import DatabaseCard from "./DatabaseCard";

interface DatabasesBodyProps {
  workspaceId: string;
}

const integrationCards = [
  {
    type: "Vector",
    name: "Pinecone",
    description: "Fully-managed vector database for AI apps",
    provider: "Pinecone Systems",
  },
  {
    type: "Relational",
    name: "PostgreSQL",
    description: "Advanced open source relational database",
    provider: "PostgreSQL Global Development Group",
  },
  {
    type: "Graph",
    name: "Neo4j",
    description: "Graph database management system",
    provider: "Neo4j, Inc.",
  },
  {
    type: "Nosql",
    name: "MongoDB",
    description: "Source-available cross-platform document-oriented database",
    provider: "MongoDB Inc.",
  },
  {
    type: "Vector",
    name: "Qdrant",
    description: "Vector Database for the next generation of AI apps",
    provider: "Qdrant",
  },
  {
    type: "Relational",
    name: "MySQL",
    description: "Open-source relational database management system",
    provider: "Oracle",
  },
];

const DatabasesBody: React.FC<DatabasesBodyProps> = ({ workspaceId }) => {
  const [activeTab, setActiveTab] = useState("View All");
  const tabs = ["View All", "Vector", "Graph", "Relational", "Nosql"];

  const filteredCards =
    activeTab === "View All"
      ? integrationCards
      : integrationCards.filter((card) => {
          if (activeTab === "Nosql") return card.type.toLowerCase() === "nosql";
          return card.type.toLowerCase() === activeTab.toLowerCase();
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
                    <Database className="w-[23px] h-[21px] text-[#FF5714]" />
                  </div>
                  <h1 className="text-2xl font-semibold text-text-primary leading-8">
                    Databases
                  </h1>
                </div>
                <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                  Easily connect, manage, and scale the top databases for your
                  specific use cases.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 px-3.5 py-2.5 bg-white text-[#414651] rounded-lg text-sm font-semibold border border-[#d5d7da] shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-gray-50 transition-colors cursor-pointer">
                  <span>Learn More</span>
                </button>
                <button className="flex items-center gap-1 px-3.5 py-2.5 bg-[#005BB5] text-white rounded-lg text-sm font-semibold shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-[#004A96] transition-colors cursor-pointer">
                  <Plus className="w-5 h-5" />
                  <span>Database</span>
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
              No databases found.
            </div>
          )}
          <div className={styles["experience"]}>
            {filteredCards.map((card, rowIndex) => (
              <DatabaseCard key={`card-${rowIndex}-${card.type}`} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabasesBody;
