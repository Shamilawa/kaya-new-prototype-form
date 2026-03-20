import React from "react";
import styles from "./AgentTrackUsageBody.module.css";
import MetricCard from "./MetricCard";
import { 
    Calendar, TrendingUp, TrendingDown,
    Search, LayoutPanelLeft, ArrowUp, ChevronDown
} from "lucide-react";

interface AgentTrackUsageBodyProps {
    workspaceId: string;
    agentId: string;
    agentName: string;
}

const AgentTrackUsageBody: React.FC<AgentTrackUsageBodyProps> = ({ workspaceId, agentId, agentName }) => {
    return (
        <div className="w-full flex flex-col items-start gap-5 font-inter bg-white rounded-xl pt-6 overflow-x-hidden min-h-full">
            <div className={styles.headerSectionParent}>
                <div className={styles.headerSection}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.textAndSupportingText}>
                                <div className={styles.iconsParent}>
                                    <div className="w-10 h-10 rounded-lg shadow-sm border border-border-secondary flex items-center justify-center bg-white">
                                        <img src="/track.svg" alt="" className="w-5 h-5" />
                                    </div>
                                    <div className={styles.text}>Track Agent Usage</div>
                                </div>
                                <div className={styles.supportingText}>
                                    See how much {agentName} is consuming in credits, tokens, and compute time this month.
                                </div>
                            </div>
                        </div>

                        <div className={styles.tabsAndFilters}>
                            <div className={styles.buttonGroup}>
                                <div className={styles.buttonGroupBase}>
                                    <div className={styles.text2}>12 months</div>
                                </div>
                                <div className={styles.buttonGroupBase2}>
                                    <div className={styles.text2}>30 days</div>
                                </div>
                                <div className={styles.buttonGroupBase3}>
                                    <div className={styles.text2}>7 days</div>
                                </div>
                                <div className={styles.buttonGroupBase9}>
                                    <div className={styles.text2}>24 hours</div>
                                </div>
                            </div>
                            <div className={styles.actions2}>
                                <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-border-secondary shadow-sm text-sm font-semibold text-[#717680] hover:bg-gray-50">
                                    <Calendar className="w-5 h-5 text-[#717680]" />
                                    <span>Select dates</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.metricItemParent}>
                    <MetricCard 
                        title="Total Runs" 
                        value="312" 
                        subtitle={<span className="text-text-tertiary font-encode">Across 2 workflows this month</span>}
                    />
                    <MetricCard 
                        title="Credits Used" 
                        value="7.79K" 
                        subtitle={<span className="text-text-tertiary">of 500K used</span>}
                        trend={{ value: '44.35K', isUp: false }} 
                        chartSrc="/chart-red.svg"
                    />
                    <MetricCard 
                        title="Tokens Used" 
                        value="682K" 
                        subtitle={<span className="text-text-tertiary">of 250K used</span>}
                        trend={{ value: '4,363K', isUp: false }} 
                        chartSrc="/chart-red.svg"
                    />
                </div>

                {/* Agent Run History Table */}
                 <div className={styles.pageHeaderParent}>
                    <div className="flex flex-col h-7 justify-center">
                        <div className={styles.text15}>Run History</div>
                    </div>
                    
                    <div className={styles.card}>
                        <div className={styles.table}>
                            <div className={styles.metrics2}>
                                <div className={styles.numberAndTabsParent}>
                                    <div className={styles.horizontalTabs}>
                                        <div className={styles.tabButtonBase}>
                                            All
                                        </div>
                                        <div className={styles.tabButtonBase2}>
                                            Filter
                                        </div>
                                        <div className={styles.tabButtonBase2}>
                                            Filter
                                        </div>
                                    </div>
                                    <div className={styles.select2}>
                                        <div className={styles.input}>
                                            <Search className="w-4 h-4 text-text-muted" />
                                            <input type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.content11}>
                                <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                    <div className={styles.tableCell}>Run ID</div>
                                    <div className={styles.tableCell}>Workflow <ChevronDown className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>Executed At <ChevronDown className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>Duration <ChevronDown className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>Credits used <ChevronDown className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>Tokens used <ChevronDown className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>LLM Calls <ChevronDown className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>API Calls <ChevronDown className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>Status <ChevronDown className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}></div>
                                </div>

                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} ${styles.change2} font-medium`}>3c2dd4e1</div>
                                    <div className={styles.tableCell}>Xinfinity CLV Prediction</div>
                                    <div className={styles.tableCell}>Mar 18, 2026, 9:42am</div>
                                    <div className={styles.tableCell}>2s</div>
                                    <div className={styles.tableCell}>142,300</div>
                                    <div className={styles.tableCell}>2.84K</div>
                                    <div className={styles.tableCell}>2.84K</div>
                                    <div className={styles.tableCell}>1</div>
                                    <div className={styles.tableCell}><span className={styles.badge4}>Success</span></div>
                                    <div className={styles.tableCell}><Calendar className="w-4 h-4 text-text-tertiary"/></div>
                                </div>

                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} ${styles.change2} font-medium`}>3c2dd4e1</div>
                                    <div className={styles.tableCell}>Xinfinity CLV Prediction</div>
                                    <div className={styles.tableCell}>Mar 18, 2026, 9:42am</div>
                                    <div className={styles.tableCell}>2s</div>
                                    <div className={styles.tableCell}>389,500</div>
                                    <div className={styles.tableCell}>7.79K</div>
                                    <div className={styles.tableCell}>7.79K</div>
                                    <div className={styles.tableCell}>0</div>
                                    <div className={styles.tableCell}><span className={styles.badge4}>Success</span></div>
                                    <div className={styles.tableCell}><Calendar className="w-4 h-4 text-text-tertiary"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Padding at the bottom */}
                <div className="h-10"></div>
            </div>
        </div>
    );
};

export default AgentTrackUsageBody;
