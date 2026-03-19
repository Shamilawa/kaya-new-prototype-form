import React from "react";
import { Plus, Settings } from "lucide-react";
import styles from "./ModelsBody.module.css";
import DatabaseCard from "./DatabaseCard";

interface WorkspaceVariablesBodyProps {
    workspaceId: string;
}

const integrationCards = [
    { name: "APP_NAME", type: "string", description: "Global application name identifier" },
    { name: "MAX_RETRIES", type: "int", description: "Maximum number of retry attempts" },
    { name: "TEMPERATURE", type: "float", description: "Default LLM generation temperature" },
    { name: "DEBUG_MODE", type: "bool", description: "Toggles verbose system logging" },
    { name: "ENABLE_CACHE", type: "bool", description: "Enables caching layer globally" },
    { name: "TIMEOUT_MS", type: "int", description: "Default request timeout in milliseconds" },
    { name: "SIMILARITY_THRESHOLD", type: "float", description: "Vector distance threshold cutoff" },
];

const WorkspaceVariablesBody: React.FC<WorkspaceVariablesBodyProps> = ({ workspaceId }) => {
    const cardRows = [];
    for (let i = 0; i < integrationCards.length; i += 4) {
        cardRows.push(integrationCards.slice(i, i + 4));
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
                                        <Settings className="w-[23px] h-[21px] text-[#FF5714]" />
                                    </div>
                                    <h1 className="text-2xl font-semibold text-text-primary leading-8">Workspace Variables</h1>
                                </div>
                                <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                                    Manage your internal workspace variables and global configuration state.
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
                                            Workspace Variable
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

                    <div style={{ height: "32px", borderBottom: "1px solid #e9eaeb" }}></div>
                </div>

                <div className={styles["experience-parent"]}>
                    {cardRows.length === 0 && (
                        <div className="text-center py-8 text-text-tertiary">
                            No workspace variables found.
                        </div>
                    )}
                    {cardRows.map((row, rowIndex) => (
                        <div key={`row-${rowIndex}`} className={styles["experience"]}>
                            {row.map((card, i) => (
                                <DatabaseCard 
                                    key={`card-${rowIndex}-${card.name}-${i}`}
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

export default WorkspaceVariablesBody;
