import React, { useState } from "react";
import styles from "./DataLineageBody.module.css";
import { 
    Database, 
    Search, 
    ChevronDown
} from "lucide-react";

const DataLineageBody: React.FC = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const toggleRow = (id: string) => {
        setExpandedRows(prev => 
            prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
        );
    };

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
                            <div className={styles.textAndSupportingTextWrapper}>
                                <div className={styles.textAndSupportingText}>
                                    <div className={styles.iconsParent}>
                                        <div className="w-10 h-10 rounded-lg shadow-sm border border-border-secondary flex items-center justify-center bg-white">
                                            <Database className="w-5 h-5 text-text-secondary" />
                                        </div>
                                        <div className={styles.text}>Data Lineage</div>
                                    </div>
                                    <div className={styles.supportingText}>Placeholder text about what is shown in data lineage.</div>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={styles.buttonsbutton}>
                                </div>
                                <div className={styles.buttonsbutton2}>
                                </div>
                                <div className={styles.buttonsbutton2}>
                                </div>
                                <div className={styles.buttonsbutton4}>
                                </div>
                            </div>
                            <div className={styles.select}>
                            </div>
                        </div>
                        <img className={styles.dividerIcon} alt="" />
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
                                                        <div className={styles.text5}>Search</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Data Lineage Row 1 */}
                                <div 
                                    className={styles.content3} 
                                    onClick={() => toggleRow('session-1')}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleRow('session-1');
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={expandedRows.includes('session-1')}
                                >
                                    <div className={styles.column}>
                                        <div className={styles.tableHeaderCell}>
                                            <div className={styles.checkbox}>
                                                <input type="checkbox" className="rounded border-gray-300" />
                                            </div>
                                            <div className={styles.tableHeaderLabel}>
                                                <div className={styles.text6}>Session ID</div>
                                                <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                            </div>
                                        </div>
                                        <div className={styles.tableCell}>
                                            <div className={styles.numberAndTabs}>
                                                <Search className="w-4 h-4 text-text-muted" />
                                            </div>
                                            <div className={styles.textAndSupportingText2}>
                                                <div className={styles.text7}>ddbe1896-b1a3-41fe-8b38-65873705fa47</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.column2}>
                                        <div className={styles.tableHeaderCell2}>
                                            <div className={styles.tableHeaderLabel}>
                                                <div className={styles.text6}>Triggered By</div>
                                                <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                            </div>
                                        </div>
                                        <div className={styles.tableCell2}>
                                            <div className={styles.textAndSupportingText3}>
                                                <div className={styles.supportingText2}>Xinfinity CLV Prediction</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.column2}>
                                        <div className={styles.tableHeaderCell2}>
                                            <div className={styles.tableHeaderLabel}>
                                                <div className={styles.text6}>Started</div>
                                                <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                            </div>
                                        </div>
                                        <div className={styles.tableCell2}>
                                            <div className={styles.textAndSupportingText4}>
                                                <div className={styles.supportingText2}>Mar 18, 2026 · 9:42am</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.column4}>
                                        <div className={styles.tableHeaderCell2}>
                                            <div className={styles.tableHeaderLabel}>
                                                <div className={styles.text6}>Duration</div>
                                                <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                            </div>
                                        </div>
                                        <div className={styles.tableCell2}>
                                            <div className={styles.textAndSupportingText4}>
                                                <div className={styles.supportingText2}>0.3s</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.column4}>
                                        <div className={styles.tableHeaderCell2}>
                                            <div className={styles.tableHeaderLabel}>
                                                <div className={styles.text6}>Status</div>
                                                <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                            </div>
                                        </div>
                                        <div className={styles.tableCell5}>
                                            <div className={styles.badge}>
                                                <div className={styles.dot}>
                                                    <div className={styles.dot2}>
                                                    </div>
                                                </div>
                                                <div className={styles.text12}>Success</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Detail for Row 1 */}
                                {expandedRows.includes('session-1') && (
                                    <div className={styles.content4}>
                                        <div className={styles.columnParent}>
                                            <div className={styles.column6}>
                                                <div className={styles.tableHeaderCell6}>
                                                    <div className={styles.tableHeaderLabel6}>
                                                        <div className={styles.text6}>Execution ID</div>
                                                    </div>
                                                </div>
                                                <div className={styles.tableCell6}>
                                                    <div className={styles.textAndSupportingText4}>
                                                        <div className={styles.details}>ddbe1896-b1a3-41fe-8b38-65873705fa47</div>
                                                    </div>
                                                </div>
                                                <div className={styles.tableCell7}>
                                                    <div className={styles.textAndSupportingText4}>
                                                        <div className={styles.details}>ddbe1896-b1a3-41fe-8b38-65873705fa47</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.column7}>
                                                <div className={styles.tableHeaderCell7}>
                                                    <div className={styles.tableHeaderLabel}>
                                                        <div className={styles.text6}>Start Time</div>
                                                        <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                                    </div>
                                                </div>
                                                <div className={styles.tableCell8}>
                                                    <div className={styles.textAndSupportingText4}>
                                                        <div className={styles.supportingText2}>Feb 2, 2026 · 12:35:39</div>
                                                    </div>
                                                </div>
                                                <div className={styles.tableCell9}>
                                                    <div className={styles.textAndSupportingText4}>
                                                        <div className={styles.supportingText2}>Feb 2, 2026 · 12:35:39</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.column7}>
                                                <div className={styles.tableHeaderCell7}>
                                                    <div className={styles.tableHeaderLabel}>
                                                        <div className={styles.text6}>End Time</div>
                                                        <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                                    </div>
                                                </div>
                                                <div className={styles.tableCell8}>
                                                    <div className={styles.textAndSupportingText4}>
                                                        <div className={styles.supportingText2}>Feb 2, 2026 · 12:35:39</div>
                                                    </div>
                                                </div>
                                                <div className={styles.tableCell9}>
                                                    <div className={styles.textAndSupportingText4}>
                                                        <div className={styles.supportingText2}>Feb 2, 2026 · 12:35:39</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.column9}>
                                                <div className={styles.tableHeaderCell9}>
                                                    <div className={styles.tableHeaderLabel}>
                                                        <div className={styles.text6}>Status</div>
                                                        <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                                    </div>
                                                </div>
                                                <div className={styles.tableCell12}>
                                                    <div className={styles.badge2}>
                                                        <div className={styles.text12}>Success</div>
                                                    </div>
                                                </div>
                                                <div className={styles.tableCell13}>
                                                    <div className={styles.badge3}>
                                                        <div className={styles.text12}>Fail</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Other Data Lineage Rows */}
                                <div 
                                    className={styles.tableCellParent}
                                    onClick={() => toggleRow('session-2')}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleRow('session-2');
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={expandedRows.includes('session-2')}
                                >
                                    <div className={styles.tableCell14}>
                                        <Search className="w-4 h-4 text-text-muted" />
                                        <div className={styles.textAndSupportingText4}>
                                            <div className={styles.details}>ddbe1896-b1a3-41fe-8b38-65873705fa47</div>
                                        </div>
                                    </div>
                                    <div className={styles.tableCell15}>
                                        <div className={styles.textAndSupportingText4}>
                                            <div className={styles.supportingText2}>Xinfinity CLV Prediction</div>
                                        </div>
                                    </div>
                                    <div className={styles.tableCell15}>
                                        <div className={styles.textAndSupportingText4}>
                                            <div className={styles.supportingText2}>Mar 18, 2026 · 9:42am</div>
                                        </div>
                                    </div>
                                    <div className={styles.tableCell17}>
                                        <div className={styles.textAndSupportingText4}>
                                            <div className={styles.supportingText2}>0.3s</div>
                                        </div>
                                    </div>
                                    <div className={styles.tableCell18}>
                                        <div className={styles.badge}>
                                            <div className={styles.dot}>
                                                <div className={styles.dot2}>
                                                </div>
                                            </div>
                                            <div className={styles.text12}>Success</div>
                                        </div>
                                    </div>
                                </div>

                                {expandedRows.includes('session-2') && (
                                    <div className={styles.content4}>
                                        <div className="p-8 text-center text-text-tertiary">
                                            No additional execution details for this session.
                                        </div>
                                    </div>
                                )}

                                <div className={styles.pagination}>
                                    <div className={styles.details}>Page 1 of 4</div>
                                    <div className={styles.actions2}>
                                        <div className={styles.buttonsbutton5}>
                                            <div className={styles.textPadding}>
                                                <div className={styles.text2}>Previous</div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonsbutton5}>
                                            <div className={styles.textPadding}>
                                                <div className={styles.text2}>Next</div>
                                            </div>
                                        </div>
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

export default DataLineageBody;
