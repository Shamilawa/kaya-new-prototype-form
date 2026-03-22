"use client";

import React, { useState } from "react";
import { 
    Search, 
    Plus, 
    ChevronDown, 
    Play, 
    ChevronUp
} from "lucide-react";
import Image from "next/image";
import styles from "./TestSuiteExecutionBody.module.css";
import TestExecutionDrawer from "./TestExecutionDrawer";

interface TestSuiteExecutionBodyProps {
    workspaceId: string;
    iflowId: string;
    iflowName: string;
}

const TestSuiteExecutionBody: React.FC<TestSuiteExecutionBodyProps> = ({ workspaceId, iflowId, iflowName }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedSuiteId, setExpandedSuiteId] = useState<number | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedSessionId, setSelectedSessionId] = useState<string | undefined>(undefined);

    const testSuites = [
        {
            id: 1,
            name: "Xinfinity Smoke Test",
            type: "Workflow",
            executionsCount: 2,
            executions: [
                {
                    id: "ddbe1896-b1a3-41fe-8b38-65873705fa47",
                    duration: "0.32s",
                    executedAt: "Feb 2, 2026 · 12:35:39",
                    status: "Success"
                },
                {
                    id: "ddbe1896-b1a3-41fe-8b38-65873705fa48",
                    duration: "0.32s",
                    executedAt: "Feb 2, 2026 · 12:35:39",
                    status: "Fail"
                }
            ]
        },
        {
            id: 2,
            name: "Customer Support Bot",
            type: "Workflow",
            executionsCount: 3,
            executions: [
                {
                    id: "eeba1896-b1a3-41fe-8b38-65873705fa49",
                    duration: "0.45s",
                    executedAt: "Feb 3, 2026 · 09:15:20",
                    status: "Success"
                },
                {
                    id: "eeba1896-b1a3-41fe-8b38-65873705fa50",
                    duration: "0.42s",
                    executedAt: "Feb 3, 2026 · 10:20:15",
                    status: "Success"
                },
                {
                    id: "eeba1896-b1a3-41fe-8b38-65873705fa51",
                    duration: "0.48s",
                    executedAt: "Feb 3, 2026 · 11:45:10",
                    status: "Fail"
                }
            ]
        },
        {
            id: 3,
            name: "Invoice Processing Logic",
            type: "Workflow",
            executionsCount: 1,
            executions: [
                {
                    id: "ffba1896-b1a3-41fe-8b38-65873705fa52",
                    duration: "0.28s",
                    executedAt: "Feb 4, 2026 · 14:05:33",
                    status: "Success"
                }
            ]
        },
        {
            id: 4,
            name: "Data Enrichment Flow",
            type: "Workflow",
            executionsCount: 0,
            executions: []
        },
        {
            id: 5,
            name: "Email Notification System",
            type: "Workflow",
            executionsCount: 2,
            executions: [
                {
                    id: "11ba1896-b1a3-41fe-8b38-65873705fa53",
                    duration: "0.15s",
                    executedAt: "Feb 5, 2026 · 16:20:11",
                    status: "Success"
                },
                {
                    id: "11ba1896-b1a3-41fe-8b38-65873705fa54",
                    duration: "0.18s",
                    executedAt: "Feb 5, 2026 · 17:05:45",
                    status: "Success"
                }
            ]
        }
    ];

    return (
        <div className={styles.frameParent}>
            <div className={styles.headerSectionParent}>
                <div className={styles.headerSection}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.textAndSupportingTextWrapper}>
                                <div className={styles.textAndSupportingText}>
                                    <div className={styles.iconsParent}>
                                        <div className={styles.icons}>
                                            <Image src="/card-workflow.svg" alt="" width={22} height={20} />
                                        </div>
                                        <div className={styles.text}>Test Suite Execution</div>
                                    </div>
                                    <div className={styles.supportingText}>
                                        View and manage all test suite runs for this workflow. Each execution tests your workflow against a defined set of cases to validate behaviour and catch regressions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.actions2}>
                    <button className={styles.buttonsbutton7}>
                        <div className={styles.textPadding}>
                            <div className={styles.text2}>Learn more</div>
                        </div>
                    </button>
                    <button className={styles.buttonsbutton8}>
                        <Plus className={styles.plusIcon} />
                        <div className={styles.textPadding}>
                            <div className={styles.text3}>New Execution</div>
                        </div>
                    </button>
                </div>
            </div>

            <div className={styles.cardWrapper}>
                <div className={styles.card}>
                    <div className={styles.headingAndContent}>
                        <div className={styles.table}>
                            <div className={styles.metrics}>
                                <div className={styles.numberAndTabsParent}>
                                    <div className={styles.numberAndTabs}>
                                        <div className={styles.horizontalTabs}>
                                            <div className={styles.tabButtonBase}>
                                                <div className={styles.text3}>All</div>
                                            </div>
                                            <div className={styles.tabButtonBase2}>
                                                <div className={styles.text3}>Success</div>
                                            </div>
                                            <div className={styles.tabButtonBase2}>
                                                <div className={styles.text3}>Fail</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.select2}>
                                        <div className={styles.headingAndContent}>
                                            <div className={styles.input}>
                                                <div className={styles.content2}>
                                                    <Search className="w-4 h-4 text-text-quaternary" />
                                                    <input 
                                                        type="text" 
                                                        placeholder="Search" 
                                                        className={styles.text7}
                                                        value={searchQuery}
                                                        onChange={(e) => setSearchQuery(e.target.value)}
                                                        style={{ border: 'none', outline: 'none', background: 'transparent', width: '100%' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.content3}>
                                <div className={styles.column}>
                                    <div className={styles.tableHeaderCell}>
                                        <div className={styles.checkbox}></div>
                                        <div className={styles.tableHeaderLabel}>
                                            <div className={styles.text8}>Test Suite Name</div>
                                            <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.column2}>
                                    <div className={styles.tableHeaderCell2}>
                                        <div className={styles.tableHeaderLabel}>
                                            <div className={styles.text8}>Test Suite Type</div>
                                            <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.column3}>
                                    <div className={styles.tableHeaderCell2}>
                                        <div className={styles.tableHeaderLabel}>
                                            <div className={styles.text8}>Executions</div>
                                            <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.column4}>
                                    <div className={styles.tableHeaderCell2}></div>
                                </div>
                            </div>

                            {testSuites.map((suite) => (
                                <React.Fragment key={suite.id}>
                                    <div className={styles.content3} style={{ borderTop: 'none' }}>
                                        <div className={styles.column}>
                                            <div 
                                                className={styles.tableCell} 
                                                onClick={() => setExpandedSuiteId(expandedSuiteId === suite.id ? null : suite.id)} 
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        setExpandedSuiteId(expandedSuiteId === suite.id ? null : suite.id);
                                                    }
                                                }}
                                                tabIndex={0}
                                                role="button"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className={styles.numberAndTabs}>
                                                    {expandedSuiteId === suite.id ? <ChevronUp className="w-5 h-5 text-text-quaternary" /> : <ChevronDown className="w-5 h-5 text-text-quaternary" />}
                                                </div>
                                                <div className={styles.textAndSupportingText2}>
                                                    <div className={styles.details}>{suite.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.column2}>
                                            <div className={styles.tableCell2}>
                                                <div className={styles.textAndSupportingText3}>
                                                    <div className={styles.supportingText2}>{suite.type}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.column3}>
                                            <div className={styles.tableCell2}>
                                                <div className={styles.textAndSupportingText3}>
                                                    <div className={styles.supportingText2}>{suite.executionsCount} Executions</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.column4}>
                                            <div className={styles.tableCell4}>
                                                <div 
                                                    className={styles.buttonsbutton9}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsDrawerOpen(true);
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.stopPropagation();
                                                            setIsDrawerOpen(true);
                                                        }
                                                    }}
                                                    tabIndex={0}
                                                    role="button"
                                                >
                                                    <Play className="w-4 h-4" />
                                                    <div className={styles.details}>Execute</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {expandedSuiteId === suite.id && suite.executions.length > 0 && (
                                        <div className={styles.content4}>
                                            <div className={styles.columnParent}>
                                                <div className={styles.column5}>
                                                    <div className={styles.tableHeaderCell5}>
                                                        <div className={styles.tableHeaderLabel4}>
                                                            <div className={styles.text8}>Execution ID</div>
                                                        </div>
                                                    </div>
                                                    {suite.executions.map((exec) => (
                                                        <div key={exec.id} className={styles.tableCell5}>
                                                            <div className={styles.supportingText2}>{exec.id}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={styles.column6}>
                                                    <div className={styles.tableHeaderCell6}>
                                                        <div className={styles.tableHeaderLabel4}>
                                                            <div className={styles.text8}>Duration</div>
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                    {suite.executions.map((exec) => (
                                                        <div key={exec.id} className={styles.tableCell7}>
                                                            <div className={styles.supportingText2}>{exec.duration}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={styles.column6}>
                                                    <div className={styles.tableHeaderCell6}>
                                                        <div className={styles.tableHeaderLabel4}>
                                                            <div className={styles.text8}>Executed At</div>
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                    {suite.executions.map((exec) => (
                                                        <div key={exec.id} className={styles.tableCell7}>
                                                            <div className={styles.supportingText2}>{exec.executedAt}</div>
                                                            </div>
                                                    ))}
                                                </div>
                                                <div className={styles.column8}>
                                                    <div className={styles.tableHeaderCell8}>
                                                        <div className={styles.tableHeaderLabel}>
                                                            <div className={styles.text8}>Status</div>
                                                        </div>
                                                    </div>
                                                    {suite.executions.map((exec) => (
                                                        <div key={exec.id} className={exec.status === "Success" ? styles.tableCell11 : styles.tableCell12}>
                                                            <div className={exec.status === "Success" ? styles.badge : styles.badge2}>
                                                                <div className={styles.text19}>{exec.status}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={styles.column9}>
                                                    <div className={styles.tableHeaderCell9}></div>
                                                    {suite.executions.map((exec) => (
                                                        <div key={exec.id} className={styles.tableCell13}>
                                                            <div 
                                                                className={styles.buttonsbutton10}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedSessionId(exec.id);
                                                                    setIsDrawerOpen(true);
                                                                }}
                                                                onKeyDown={(e) => {
                                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                                        e.stopPropagation();
                                                                        setSelectedSessionId(exec.id);
                                                                        setIsDrawerOpen(true);
                                                                    }
                                                                }}
                                                                tabIndex={0}
                                                                role="button"
                                                            >
                                                                <div className={styles.details}>Review</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}

                            <div className={styles.pagination}>
                                <div className={styles.details}>Page 1 of 4</div>
                                <div className={styles.actions3}>
                                    <button className={styles.buttonsbutton13}>
                                        <div className={styles.textPadding}>
                                            <div className={styles.text3}>Previous</div>
                                        </div>
                                    </button>
                                    <button className={styles.buttonsbutton13}>
                                        <div className={styles.textPadding}>
                                            <div className={styles.text3}>Next</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TestExecutionDrawer 
                isOpen={isDrawerOpen} 
                onClose={() => setIsDrawerOpen(false)} 
                sessionId={selectedSessionId}
            />
        </div>
    );
};

export default TestSuiteExecutionBody;
