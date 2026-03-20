import React, { useState } from "react";
import { Plus, Globe } from "lucide-react";
import styles from "./ModelsBody.module.css";
import DatabaseCard from "./DatabaseCard";

interface IntegrationsBodyProps {
    workspaceId: string;
}

const integrationCards = [
    { type: "API", name: "Stripe", description: "Payment processing platform", provider: "GET /v1/charges" },
    { type: "MCP", name: "GitHub", description: "Developer platform and repository", provider: "OAuth 2.0" },
    { type: "API", name: "Twilio", description: "Communication APIs for SMS, Voice", provider: "POST /2010-04-01/Accounts" },
    { type: "MCP", name: "Slack", description: "Team communication and collaboration", provider: "OAuth 2.0" },
    { type: "API", name: "SendGrid", description: "Email delivery and API", provider: "POST /v3/mail/send" },
];

const IntegrationsBody: React.FC<IntegrationsBodyProps> = ({ workspaceId }) => {
    const [activeTab, setActiveTab] = useState("View All");
    const tabs = ["View All", "API", "MCP"];

    const filteredCards = activeTab === "View All"
        ? integrationCards
        : integrationCards.filter((card) => card.type.toLowerCase() === activeTab.toLowerCase());

    const cardRows = [];
    for (let i = 0; i < filteredCards.length; i += 3) {
        cardRows.push(filteredCards.slice(i, i + 3));
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
                                        <Globe className="w-[23px] h-[21px] text-[#FF5714]" />
                                    </div>
                                    <h1 className="text-2xl font-semibold text-text-primary leading-8">Integrations</h1>
                                </div>
                                <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                                    Manage your external platform connections and connected API endpoints.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-1 px-3.5 py-2.5 bg-white text-[#414651] rounded-lg text-sm font-semibold border border-[#d5d7da] shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-gray-50 transition-colors cursor-pointer">
                                    <span>Learn More</span>
                                </button>
                                <button className="flex items-center gap-1 px-3.5 py-2.5 bg-[#005BB5] text-white rounded-lg text-sm font-semibold shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-[#004A96] transition-colors cursor-pointer">
                                    <Plus className="w-5 h-5" />
                                    <span>Integration</span>
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
                    {cardRows.length === 0 && (
                        <div className="text-center py-8 text-text-tertiary">
                            No integrations found.
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

export default IntegrationsBody;
