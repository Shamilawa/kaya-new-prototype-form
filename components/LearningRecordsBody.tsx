import React from "react";
import styles from "./LearningRecordsBody.module.css";
import { 
    BookOpen, 
    Download, 
    Search, 
    ChevronDown, 
    Trash2 
} from "lucide-react";

const LearningRecordsBody: React.FC = () => {
    return (
        <div className={styles.frameParent}>
            <div className={styles.headerSectionParent}>
                <div className={styles.headerSection}>
                    <div className={styles.container}>
                        <div className={styles.imageWrap}>
                            <div className={styles.image}>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.breadcrumbs}>
                            </div>
                            <div className={styles.textAndSupportingTextParent}>
                                <div className={styles.textAndSupportingText}>
                                    <div className={styles.iconsParent}>
                                        <div className="w-10 h-10 rounded-lg shadow-sm border border-border-secondary flex items-center justify-center bg-white">
                                            <BookOpen className="w-5 h-5 text-text-secondary" />
                                        </div>
                                        <div className={styles.text}>Learning Records</div>
                                    </div>
                                    <div className={styles.supportingText}>Review and approve feedback submitted on agent outputs. Approved records are used to improve agent behaviour over time.</div>
                                </div>
                                <div className={styles.actions}>
                                    <div className={styles.buttonsbutton3}>
                                        <Download className="w-4 h-4 text-text-secondary" />
                                        <div className={styles.textPadding}>
                                            <div className={styles.text2}>Download Report</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.headerSection}>
                            <div className={styles.table}>
                                <div className={styles.metrics}>
                                    <div className={styles.numberAndTabsParent}>
                                        <div className={styles.numberAndTabs}>
                                            <div className={styles.horizontalTabs}>
                                                <div className={styles.tabButtonBase}>
                                                    <div className={styles.text2}>All</div>
                                                </div>
                                                <div className={styles.tabButtonBase2}>
                                                    <div className={styles.text2}>Filter</div>
                                                </div>
                                                <div className={styles.tabButtonBase2}>
                                                    <div className={styles.text2}>Filter</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.select2}>
                                            <div className={styles.headerSection}>
                                                <div className={styles.input}>
                                                    <div className={styles.content2}>
                                                        <Search className="w-4 h-4 text-text-muted" />
                                                        <div className={styles.text6}>Search</div>
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
                                                <div className={styles.text7}>Feedback</div>
                                                <ChevronDown className="w-4 h-4 text-text-muted" />
                                            </div>
                                        </div>
                                        <div className={styles.tableCell}>
                                            <div className={styles.textAndSupportingText2}>
                                                <div className={styles.supportingText2}>Handles inbound customer queries, routes tickets, and drafts responses automatically. Handles inbound customer queries, routes tickets, and drafts responses automatically.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.column2}>
                                        <div className={styles.tableHeaderCell}>
                                            <div className={styles.tableHeaderLabel2}>
                                                <div className={styles.text7}>Approved/Rejected</div>
                                            </div>
                                        </div>
                                        <div className={styles.tableCell2}>
                                            <div className={styles.badge}>
                                                <div className={styles.dot}>
                                                    <div className={styles.dot2}>
                                                    </div>
                                                </div>
                                                <div className={styles.text9}>Awaiting Review</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.column2}>
                                        <div className={styles.tableHeaderCell}>
                                            <div className={styles.tableHeaderLabel2}>
                                                <div className={styles.text7}>Approval Status</div>
                                            </div>
                                        </div>
                                        <div className={styles.tableCell2}>
                                            <div className={styles.badge2}>
                                                <div className={styles.text9}>Pending Approval</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.column4}>
                                        <div className={styles.tableHeaderCell4}>
                                        </div>
                                        <div className={styles.tableCell4}>
                                            <button className={styles.buttonsbutton8}>
                                                <div className={styles.textPadding}>
                                                    <div className={styles.text2}>Review</div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.column5}>
                                        <div className={styles.tableHeaderCell4}>
                                        </div>
                                        <div className={styles.tableCell5}>
                                            <button className={styles.buttonsbutton9}>
                                                <Trash2 className="w-4 h-4 text-text-tertiary" />
                                            </button>
                                            <button className={styles.buttonsbutton10}>
                                                <div className={styles.text2}>View</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.pagination}>
                                    <div className={styles.details}>Page 1 of 4</div>
                                    <div className={styles.actions3}>
                                        <button className={styles.buttonsbutton8}>
                                            <div className={styles.textPadding}>
                                                <div className={styles.text2}>Previous</div>
                                            </div>
                                        </button>
                                        <button className={styles.buttonsbutton8}>
                                            <div className={styles.textPadding}>
                                                <div className={styles.text2}>Next</div>
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

export default LearningRecordsBody;
