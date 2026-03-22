"use client";

import React, { useState } from "react";
import { 
    Search, 
    Plus, 
    ChevronDown, 
    Trash2, 
    FileText, 
    MoreVertical,
    HelpCircle,
    ChevronUp
} from "lucide-react";
import Image from "next/image";
import styles from "./TestSuitesBody.module.css";

interface TestSuitesBodyProps {
    workspaceId: string;
    iflowId: string;
    iflowName: string;
}

const TestSuitesBody: React.FC<TestSuitesBodyProps> = ({ workspaceId, iflowId, iflowName }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const testSuites = [
        {
            id: 1,
            name: "Customer Support Bot",
            description: "Handles inbound customer queries, routes tickets, and drafts responses automatically. Handles inbound customer queries, routes tickets, and drafts responses automatically.",
        },
        {
            id: 2,
            name: "Order Processing Test",
            description: "Validates the end-to-end flow of order creation and status updates.",
        },
        {
            id: 3,
            name: "Refund Policy Check",
            description: "Ensures the bot correctly identifies refund eligibility based on policy rules.",
        },
        {
            id: 4,
            name: "Shipping Carrier Integration",
            description: "Tests the connection and data exchange with third-party shipping APIs.",
        }
    ];

    return (
        <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
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
                                            <div className={styles.text}>Test Suites</div>
                                        </div>
                                        <div className={styles.supportingText}>
                                            Manage and execute test suites to ensure your workflow performs as expected across all scenarios.
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
                                <div className={styles.text3}>New Test Suite</div>
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
                                                    <div className={styles.text3}>Active</div>
                                                </div>
                                                <div className={styles.tabButtonBase2}>
                                                    <div className={styles.text3}>Archived</div>
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
                                            <div className={styles.tableHeaderLabel}>
                                                <div className={styles.text8}>Test Name & Description</div>
                                                <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                            </div>
                                        </div>
                                        {testSuites.map((suite) => (
                                            <div key={suite.id} className={styles.tableCell}>
                                                <div className={styles.textAndSupportingText2}>
                                                    <div className={styles.details}>{suite.name}</div>
                                                    <div className={styles.supportingText2}>
                                                        {suite.description}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.column2}>
                                        <div className={styles.tableHeaderCell2}>
                                        </div>
                                        {testSuites.map((suite) => (
                                            <div key={suite.id} className={styles.tableCell2}>
                                                <button className={styles.buttonsbuttonUtility}>
                                                    <Trash2 className={styles.trash01Icon} />
                                                </button>
                                                <button className={styles.buttonsbuttonUtility2}>
                                                    <MoreVertical className={styles.trash01Icon} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.pagination}>
                                    <div className={styles.pageDetails}>Page 1 of 4</div>
                                    <div className={styles.actions3}>
                                        <button className={styles.buttonsbutton9}>
                                            <div className={styles.textPadding}>
                                                <div className={styles.text3}>Previous</div>
                                            </div>
                                        </button>
                                        <button className={styles.buttonsbutton9}>
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
            </div>
        </div>
    );
};

export default TestSuitesBody;
