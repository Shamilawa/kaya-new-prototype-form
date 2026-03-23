"use client";

import React from "react";
import styles from "./AgentMetricsAndAnalyticsBody.module.css";
import MetricCard from "./MetricCard";
import { 
    AlertCircle, ArrowRight, X, BarChart3, 
    Calendar, ArrowUpRight, Search,
    TrendingUp, TrendingDown, Bot
} from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";

const AgentMetricsAndAnalyticsBody: React.FC = () => {
    const params = useParams();
    const agentId = params.agentId as string;

    const agentName = agentId
        ? agentId.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        : "Agent";

    return (
        <div className={styles.groupParent}>
            <div className={styles.alertParent}>
                {/* Alert Banner */}
                <div className={styles.alert}>
                    <div className={styles.alertContainer}>
                        <div className={styles.alertContent}>
                            <div className={styles.alertContent2}>
                                <div className={styles.featuredIconOutline}>
                                    <AlertCircle className="w-5 h-5 text-[#d92d20]" />
                                </div>
                                <div className={styles.alertTextAndSupportingText}>
                                    <div className={styles.alertText}>Elevated failure rate detected</div>
                                    <div className={styles.alertSupportingText}>
                                        {agentName} has failed 6 of its last 10 runs. Last error: API timeout
                                    </div>
                                </div>
                            </div>
                            <div className={styles.alertActions}>
                                <div className={styles.alertButtonsButton}>
                                    <div>View Details</div>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                <button className="p-1 hover:bg-[#fee4e2] rounded-md transition-colors">
                                    <X className="w-5 h-5 text-[#d92d20]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Section */}
                <div className={styles.headerSection}>
                    <div className={styles.headerContainer}>
                        <div className={styles.headerContent}>
                            <div className={styles.iconsParent}>
                                <div className={styles.icons}>
                                    <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px]">
                                        <Image src="/sidebar-bot.svg" alt="" width={23} height={21} className="w-[23px] h-[21px]" />
                                    </div>
                                </div>
                                <div className={styles.headerTitle}>Agent Metrics & Analytics</div>
                            </div>
                            <div className={styles.headerSupportingText}>
                                Track performance, activity, and reliability for {agentName}.
                            </div>
                        </div>
                        
                        <div className="w-full h-px bg-border-secondary"></div>
                        
                        <div className={styles.tabsAndFilters}>
                            <div className={styles.buttonGroup}>
                                <div className={styles.buttonGroupBase}>12 months</div>
                                <div className={styles.buttonGroupBase2}>30 days</div>
                                <div className={styles.buttonGroupBase2}>7 days</div>
                                <div className={styles.buttonGroupBase9}>24 hours</div>
                            </div>
                            
                            <div>
                                <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-border-secondary shadow-sm text-sm font-semibold text-text-quaternary hover:bg-gray-50">
                                    <Calendar className="w-5 h-5 text-text-quaternary" />
                                    <span>Select dates</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Metrics Cards */}
                <div className={styles.metricCardsScroll}>
                    <div className={styles.metricItemParent}>
                        <div className={styles.metricItem}>
                            <div className={styles.headingWrapper}>
                                <div className={styles.heading}>Most Active Workflow</div>
                            </div>
                            <div className={styles.metricContent}>
                                <div className={styles.numberAndBadge}>
                                    <div className={styles.number}>Xinfinity CLV Prediction</div>
                                    <div className={styles.number2}>This agent's highest volume workflow</div>
                                    <div className={styles.text14}>
                                        <b>312 runs</b> this month
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.headingWrapper}>
                                <div className={styles.heading}>Highest Token Usage</div>
                            </div>
                            <div className={styles.metricContent}>
                                <div className={styles.numberAndBadge}>
                                    <div className={styles.number}>Run #3c2dd4e1</div>
                                    <div className={styles.text14}>
                                        <b>142,300 tokens</b> in a single run
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.headingWrapper}>
                                <div className={styles.heading}>Slowest Response</div>
                            </div>
                            <div className={styles.metricContent}>
                                <div className={styles.numberAndBadge}>
                                    <div className={styles.number}>Run #a9f3bc12</div>
                                    <div className={styles.text14}>
                                        <b>1.2s response time</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* High Level Metrics */}
                <div className={styles.metricGroup}>
                    <MetricCard 
                        title="Total Runs" 
                        value="847" 
                        trend={{ value: '10%', isUp: true }}
                    />
                    <MetricCard 
                        title="Success Rate" 
                        value="94.3%" 
                        trend={{ value: '12%', isUp: true }}
                    />
                    <MetricCard 
                        title="Avg. Response Time" 
                        value="1.8s" 
                        trend={{ value: '2%', isUp: false }}
                    />
                    <MetricCard 
                        title="Active in Workflows" 
                        value="4" 
                    />
                </div>

                {/* Agent Performance Chart */}
                <div className={styles.pageHeaderParent}>
                    <div className={styles.text20}>Agent Performance</div>
                    <div className={styles.frameContainer}>
                        <div className={styles.lineAndBarChartParent}>
                            <div className="w-full h-80 relative flex items-center">
                                 <img src="/chart-data3.svg" alt="Agent Performance Chart" className="absolute object-fill" style={{zIndex: 1, top: '16px', bottom: '16px', left: '68px', width: 'calc(100% - 68px)', height: 'calc(100% - 32px)'}} />
                                 <div className="absolute inset-0 flex flex-row">
                                    <div className="flex items-center justify-center" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                                        <span className="text-xs text-text-tertiary">No. of Runs</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex-1 flex flex-col justify-between py-4">
                                            {['1,000', '800', '600', '400', '200', '0'].map(val => (
                                                <div key={val} className="w-full flex items-center h-4 text-xs text-text-tertiary">
                                                    <span className="w-10 text-right mr-3">{val}</span>
                                                    <div className="flex-1 border-t border-dashed border-border-secondary"></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="ml-[52px] mr-4 flex justify-between text-xs text-text-tertiary">
                                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
                                        </div>
                                        <div className="text-center text-xs text-text-tertiary mt-1">Month</div>
                                    </div>
                                 </div>
                            </div>
                            <div className="flex items-center gap-6 mt-2 ml-16">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#2970FF]"></span>
                                    <span className="text-xs text-text-secondary">Total Runs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#F04438]"></span>
                                    <span className="text-xs text-text-secondary">Failed Runs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Workflow Summary Table */}
                <div className={styles.pageHeaderParent}>
                    <div className={styles.text20}>Workflow Summary Table</div>
                    <div className={styles.card}>
                        <div className={styles.metrics}>
                            <div className={styles.horizontalTabs}>
                                <div className={styles.tabButtonBase}>All</div>
                                <div className={styles.tabButtonBase2}>{'{Filter}'}</div>
                                <div className={styles.tabButtonBase2}>{'{Filter}'}</div>
                            </div>
                            <div className={styles.searchWrapper}>
                                <Search className="w-4 h-4 text-gray-400" />
                                <input type="text" placeholder="Search" className={styles.searchInput} />
                            </div>
                        </div>
                        
                        <div className={styles.tableContainer}>
                            <div className={styles.table}>
                                <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                    <div className={styles.tableCell}>Workflow name</div>
                                    <div className={styles.tableCell}>Avg Time</div>
                                    <div className={styles.tableCell}>Longest</div>
                                    <div className={styles.tableCell}>API Calls</div>
                                    <div className={styles.tableCell}>LLM Calls</div>
                                    <div className={styles.tableCell}>SLM Calls</div>
                                    <div className={styles.tableCell}>Success Rate</div>
                                    <div className={styles.tableCell}>Session Count</div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} ${styles.agentNameCell}`}>CLV Predictor</div>
                                    <div className={styles.tableCell}>0.3s</div>
                                    <div className={styles.tableCell}>2s</div>
                                    <div className={styles.tableCell}>0</div>
                                    <div className={styles.tableCell}>0</div>
                                    <div className={styles.tableCell}>0</div>
                                    <div className={styles.tableCell}>90%</div>
                                    <div className={styles.tableCell}>6</div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} ${styles.agentNameCell}`}>Churn Classifier</div>
                                    <div className={styles.tableCell}>2s</div>
                                    <div className={styles.tableCell}>3s</div>
                                    <div className={styles.tableCell}>4</div>
                                    <div className={styles.tableCell}>4</div>
                                    <div className={styles.tableCell}>4</div>
                                    <div className={styles.tableCell}>93%</div>
                                    <div className={styles.tableCell}>14</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specialized Tables */}
                <div className="w-full flex flex-col gap-8">
                    {/* LLM Time Table */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>LLM Time Table</div>
                        <div className={styles.tableContainer}>
                            <div className={styles.table}>
                                <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                    <div className={styles.tableCell}>LLM</div>
                                    <div className={styles.tableCell}>Avg Time Taken <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Longest Time Taken <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Avg Tokens <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Most Tokens <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Execution Count <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} font-semibold text-gray-900`}>gpt-4o</div>
                                    <div className={styles.tableCell}>0.8s</div>
                                    <div className={styles.tableCell}>0.9s</div>
                                    <div className={styles.tableCell}>2,000</div>
                                    <div className={styles.tableCell}>14,300</div>
                                    <div className={styles.tableCell}>14,300</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pagination}>
                            <div className="text-gray-500 text-sm font-medium">Page 1 of 4</div>
                            <div className={styles.paginationButtons}>
                                <button className={styles.paginationButton}>Previous</button>
                                <button className={styles.paginationButton}>Next</button>
                            </div>
                        </div>
                    </div>

                    {/* SLM Time Table */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>SLM Time Table</div>
                        <div className={styles.tableContainer}>
                            <div className={styles.table}>
                                <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                    <div className={styles.tableCell}>SLM</div>
                                    <div className={styles.tableCell}>Avg Time Taken <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Longest Time Taken <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Avg Tokens <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Most Tokens <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Execution Count <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} font-semibold text-gray-900`}>mistral-small-24v1:0</div>
                                    <div className={styles.tableCell}>0.8s</div>
                                    <div className={styles.tableCell}>0.9s</div>
                                    <div className={styles.tableCell}>2,000</div>
                                    <div className={styles.tableCell}>14,300</div>
                                    <div className={styles.tableCell}>14,300</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pagination}>
                            <div className="text-gray-500 text-sm font-medium">Page 1 of 4</div>
                            <div className={styles.paginationButtons}>
                                <button className={styles.paginationButton}>Previous</button>
                                <button className={styles.paginationButton}>Next</button>
                            </div>
                        </div>
                    </div>

                    {/* API Time Table */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>API Time Table</div>
                        <div className={styles.tableContainer}>
                            <div className={styles.table}>
                                <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                    <div className={styles.tableCell}>API</div>
                                    <div className={styles.tableCell}>Execution Count <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Failure Count <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Avg Time Taken <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                    <div className={styles.tableCell}>Longest Time Taken <ArrowUpRight className="w-3 h-3 inline ml-1" /></div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} font-semibold text-gray-900`}>mistral-small-24v1:0</div>
                                    <div className={styles.tableCell}>14,300</div>
                                    <div className={styles.tableCell}>1,300</div>
                                    <div className={styles.tableCell}>0.8s</div>
                                    <div className={styles.tableCell}>0.9s</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pagination}>
                            <div className="text-gray-500 text-sm font-medium">Page 1 of 4</div>
                            <div className={styles.paginationButtons}>
                                <button className={styles.paginationButton}>Previous</button>
                                <button className={styles.paginationButton}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentMetricsAndAnalyticsBody;
