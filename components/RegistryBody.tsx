import React, { useState } from "react";
import styles from "./RegistryBody.module.css";
import { 
    GitPullRequest, 
    Plus, 
    Search, 
    ChevronDown, 
    MoreVertical
} from "lucide-react";

const RegistryBody: React.FC = () => {
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
                            <div className={styles.textAndSupportingTextParent}>
                                <div className={styles.textAndSupportingText}>
                                    <div className={styles.iconsParent}>
                                        <div className="w-10 h-10 rounded-lg shadow-sm border border-border-secondary flex items-center justify-center bg-white">
                                            <GitPullRequest className="w-5 h-5 text-text-secondary" />
                                        </div>
                                        <div className={styles.text}>Pull from Registry</div>
                                    </div>
                                    <div className={styles.supportingText}>Browse and pull versioned workflows published to your registry.</div>
                                </div>
                                <div className={styles.actions}>
                                    <div className={styles.buttonsbutton}>
                                    </div>
                                    <div className={styles.buttonsbutton2}>
                                    </div>
                                    <div className={styles.buttonsbutton3}>
                                        <div className={styles.textPadding}>
                                            <div className={styles.text2}>Learn more</div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonsbutton4}>
                                        <Plus className={styles.plusIcon} />
                                        <div className={styles.textPadding}>
                                            <div className={styles.text3}>Publish Workflow</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.actions2}>
                                <div className={styles.buttonsbutton5}>
                                </div>
                                <div className={styles.buttonsbutton6}>
                                </div>
                                <div className={styles.buttonsbutton6}>
                                </div>
                                <div className={styles.buttonsbutton8}>
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
                        <div className={styles.table}>
                            <div className={styles.metrics}>
                                <div className={styles.numberAndTabsParent}>
                                    <div className={styles.numberAndTabs}>
                                        <div className={styles.horizontalTabs}>
                                            <div className={styles.tabButtonBase}>
                                                <div className={styles.text3}>All</div>
                                            </div>
                                            <div className={styles.tabButtonBase2}>
                                                <div className={styles.text3}>Filter</div>
                                            </div>
                                            <div className={styles.tabButtonBase2}>
                                                <div className={styles.text3}>Filter</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.select2}>
                                        <div className={styles.headerSection}>
                                            <div className={styles.input}>
                                                <div className={styles.content2}>
                                                    <Search className="w-4 h-4 text-text-muted" />
                                                    <div className={styles.text7}>Search</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Workflow Row: Customer Support Bot */}
                            <div 
                                className={styles.content3} 
                                onClick={() => toggleRow('customer-support')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        toggleRow('customer-support');
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                            >
                                <div className={styles.column}>
                                    <div className={styles.tableHeaderCell}>
                                        <div className={styles.checkbox}>
                                            <input type="checkbox" className="rounded border-gray-300" />
                                        </div>
                                        <div className={styles.tableHeaderLabel}>
                                            <div className={styles.text8}>Workflow</div>
                                            <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                        </div>
                                    </div>
                                    <div className={styles.tableCell}>
                                        <div className={styles.numberAndTabs}>
                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                                                <GitPullRequest className="w-4 h-4 text-gray-500" />
                                            </div>
                                        </div>
                                        <div className={styles.dropdown}>
                                            <div className={styles.details}>Customer Support Bot</div>
                                            <div className={styles.supportingText2}>Handles inbound customer queries, routes tickets, and drafts responses automatically.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.column2}>
                                    <div className={styles.tableHeaderCell2}>
                                        <div className={styles.tableHeaderLabel}>
                                            <div className={styles.text8}>Status</div>
                                            <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                        </div>
                                    </div>
                                    <div className={styles.tableCell2}>
                                        <div className={styles.badge}>
                                            <div className={styles.dot}>
                                                <div className={styles.dot2}>
                                                </div>
                                            </div>
                                            <div className={styles.text11}>Installed · V1.2.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.column3}>
                                    <div className={styles.tableHeaderCell3}>
                                    </div>
                                    <div className={styles.tableCell3}>
                                        <div className={styles.dropdown}>
                                            <MoreVertical className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Area: Customer Support Bot */}
                            {expandedRows.includes('customer-support') && (
                                <div className={styles.content4}>
                                    <div className={styles.columnParent}>
                                        <div className={styles.column4}>
                                            <div className={styles.tableHeaderCell4}>
                                                <div className={styles.tableHeaderLabel3}>
                                                    <div className={styles.text8}>Workflow </div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell4}>
                                                <div className={styles.dropdown}>
                                                    <div className={styles.details}>Customer Support Bot</div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell5}>
                                                <div className={styles.dropdown}>
                                                    <div className={styles.details}>Customer Support Bot</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.column5}>
                                            <div className={styles.tableHeaderCell5}>
                                                <div className={styles.tableHeaderLabel3}>
                                                    <div className={styles.text8}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell6}>
                                                <div className={styles.badge2}>
                                                    <div className={styles.text11}>Latest</div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell5}>
                                            </div>
                                        </div>
                                        <div className={styles.column6}>
                                            <div className={styles.tableHeaderCell4}>
                                                <div className={styles.tableHeaderLabel3}>
                                                    <div className={styles.text8}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell8}>
                                                <div className={styles.buttonsbutton9}>
                                                    <Search className="w-4 h-4" />
                                                    <div className={styles.text3}>Release Notes</div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell5}>
                                                <div className={styles.buttonsbutton9}>
                                                    <Search className="w-4 h-4" />
                                                    <div className={styles.text3}>Release Notes</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.column7}>
                                            <div className={styles.tableHeaderCell7}>
                                                <div className={styles.tableHeaderLabel}>
                                                    <div className={styles.text8}>Version</div>
                                                    <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                                </div>
                                            </div>
                                            <div className={styles.tableCell10}>
                                                <div className={styles.dropdown}>
                                                    <div className={styles.supportingText3}>V1.2.0</div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell11}>
                                                <div className={styles.dropdown}>
                                                    <div className={styles.supportingText3}>V1.1.0</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.column7}>
                                            <div className={styles.tableHeaderCell7}>
                                                <div className={styles.tableHeaderLabel}>
                                                    <div className={styles.text8}>Released</div>
                                                    <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                                </div>
                                            </div>
                                            <div className={styles.tableCell10}>
                                                <div className={styles.dropdown}>
                                                    <div className={styles.supportingText3}>Mar 15, 2024</div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell11}>
                                                <div className={styles.dropdown}>
                                                    <div className={styles.supportingText3}>Mar 10, 2024</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.column9}>
                                            <div className={styles.tableHeaderCell9}>
                                                <div className={styles.tableHeaderLabel3}>
                                                    <div className={styles.text8}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell14}>
                                                <div className={styles.buttonsbutton9}>
                                                    <Plus className="w-4 h-4" />
                                                    <div className={styles.text3}>Install</div>
                                                </div>
                                            </div>
                                            <div className={styles.tableCell15}>
                                                <div className={styles.buttonsbutton9}>
                                                    <Plus className="w-4 h-4" />
                                                    <div className={styles.text3}>Switch to this version</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Workflow Row: Sales Qualifier */}
                            <div 
                                className={styles.tableCellParent} 
                                onClick={() => toggleRow('sales-qualifier')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        toggleRow('sales-qualifier');
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                            >
                                <div className={styles.tableCell16}>
                                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-3">
                                        <GitPullRequest className="w-4 h-4 text-gray-500" />
                                    </div>
                                    <div className={styles.dropdown}>
                                        <div className={styles.details}>Sales Qualifier</div>
                                        <div className={styles.supportingText2}>Scores and qualifies inbound leads based on your criteria before passing to your CRM.</div>
                                    </div>
                                </div>
                                <div className={styles.tableCell17}>
                                    <div className={styles.badge}>
                                        <div className={styles.dot}>
                                            <div className={styles.dot4}>
                                            </div>
                                        </div>
                                        <div className={styles.text11}>Not Installed</div>
                                    </div>
                                </div>
                                <div className={styles.tableCell18}>
                                    <div className={styles.dropdown}>
                                        <MoreVertical className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Expanded Area: Sales Qualifier (Placeholder) */}
                            {expandedRows.includes('sales-qualifier') && (
                                <div className={styles.content4}>
                                    <div className="p-8 text-center text-text-tertiary">
                                        No versions found for this workflow.
                                    </div>
                                </div>
                            )}

                            <div className={styles.pagination}>
                                <div className={styles.details}>Page 1 of 4</div>
                                <div className={styles.actions3}>
                                    <div className={styles.buttonsbutton13}>
                                        <div className={styles.textPadding}>
                                            <div className={styles.text3}>Previous</div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonsbutton13}>
                                        <div className={styles.textPadding}>
                                            <div className={styles.text3}>Next</div>
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

export default RegistryBody;
