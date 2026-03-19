import React, { useState } from "react";
import { Plus, BookOpen } from "lucide-react";
import styles from "./ModelsBody.module.css";
import DatabaseCard from "./DatabaseCard";

interface KnowledgeSourcesBodyProps {
    workspaceId: string;
}

const integrationCards = [
    { type: "Vector RAG", name: "Weaviate", description: "AI-native vector database", provider: "Weaviate" },
    { type: "Graph RAG", name: "Neo4j RAG", description: "Graph-powered retrieval augmented generation", provider: "Neo4j" },
    { type: "Vector RAG", name: "Milvus", description: "Open-source vector database", provider: "Zilliz" },
    { type: "Vector RAG", name: "Chroma", description: "AI-native embedding database", provider: "Chroma" },
];

const KnowledgeSourcesBody: React.FC<KnowledgeSourcesBodyProps> = ({ workspaceId }) => {
    const [activeTab, setActiveTab] = useState("View All");
    const tabs = ["View All", "Vector RAG", "Graph RAG"];

    const filteredCards = activeTab === "View All"
        ? integrationCards
        : integrationCards.filter((card) => card.type.toLowerCase() === activeTab.toLowerCase());

    const cardRows = [];
    for (let i = 0; i < filteredCards.length; i += 4) {
        cardRows.push(filteredCards.slice(i, i + 4));
    }

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
                                        <BookOpen className="w-[23px] h-[21px] text-[#FF5714]" />
                                    </div>
                                    <h1 className="text-2xl font-semibold text-text-primary leading-8">Knowledge Sources</h1>
                                </div>
                                <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                                    Manage your organization's custom internal knowledge sources.
                                </p>
                            </div>
                            <div className={styles["actions"]}>
                                <div className={styles["buttonsbutton"]}>
                                    <div className={styles["text-padding"]}>
                                        <div className={styles["text2"]}>
                                            Learn More
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["buttonsbutton2"]}>
                                    <Plus className="w-5 h-5 text-white" />
                                    <div className={styles["text-padding"]}>
                                        <div className={styles["text3"]}>
                                            Knowledge Sources
                                        </div>
                                    </div>
                                </div>
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
                    {cardRows.length === 0 && (
                        <div className="text-center py-8 text-text-tertiary">
                            No knowledge sources found.
                        </div>
                    )}
                    {cardRows.map((row, rowIndex) => (
                        <div key={`row-${rowIndex}`} className={styles["experience"]}>
                            {row.map((card, i) => (
                                <DatabaseCard 
                                    key={`card-${rowIndex}-${card.type}-${i}`}
                                    {...card} 
                                />
                            ))}
                            {/* Fill empty spots in final row to maintain width */}
                            {row.length < 4 && Array.from({ length: 4 - row.length }).map((_, emptyIndex) => (
                                <div key={`empty-${rowIndex}-${emptyIndex}`} style={{ flex: '0 0 323px', width: '323px', visibility: 'hidden' }} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KnowledgeSourcesBody;
