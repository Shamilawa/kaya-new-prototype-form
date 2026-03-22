import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import styles from './TestExecutionDrawer.module.css';

interface TestExecutionDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    sessionId?: string;
}

const TestExecutionDrawer: React.FC<TestExecutionDrawerProps> = ({ isOpen, onClose, sessionId = "ddbe1896-b1a3-41fe-8b38-65873705fa47" }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className={styles.overlay} onClick={onClose} role="none" tabIndex={-1} />
            <div className={styles.panel}>
                <div className={styles.slideOutMenuHeader}>
                    <div className={styles.content}>
                        <div className={styles.featuredIcon} />
                        <div className={styles.textAndSupportingText}>
                            <div className={styles.textParent}>
                                <div className={styles.text}>
                                    <span className={styles.sessionId}>Session ID: </span>
                                    <span>{sessionId}</span>
                                </div>
                                <div className={styles.badgeParent}>
                                    <div className={styles.badge}>
                                        <div className={styles.text2}>Passed</div>
                                    </div>
                                    <div className={styles.badge2}>
                                        <div className={styles.text2}>Feb 2, 2026 · 12:35:39</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className={styles.buttonsbuttonCloseX} 
                        onClick={onClose}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                onClose();
                            }
                        }}
                        tabIndex={0}
                        role="button"
                    >
                        <X className={styles.xCloseIcon} />
                    </div>
                </div>
                <div className={styles.content2}>
                    <div className={styles.section2}>
                        <div className={styles.textAndSupportingTextParent}>
                            <div className={styles.textAndSupportingText2}>
                                <div className={styles.text6}>Summary</div>
                                <div className={styles.supportingText}>Evaluation of Finance Assistant LLM across reasoning accuracy, financial calculation, safety guardrails, and prompt injection resistance.</div>
                            </div>
                            <div className={styles.textAndSupportingTextGroup}>
                                <div className={styles.legend}>
                                    <div className={styles.text4}>Test Suite</div>
                                    <div className={styles.supportingText2}>Finance Assistant LLM</div>
                                </div>
                                <div className={styles.legend}>
                                    <div className={styles.text4}>Type</div>
                                    <div className={styles.supportingText2}>Model</div>
                                </div>
                                <div className={styles.legend}>
                                    <div className={styles.text4}>Duration</div>
                                    <div className={styles.supportingText2}>0.32s</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.metricGroupParent}>
                        <div className={styles.metricGroup}>
                            <div className={styles.metricItem}>
                                <div className={styles.heading}>Total Inputs</div>
                                <div className={styles.numberAndBadge}>
                                    <div className={styles.number}>847</div>
                                </div>
                            </div>
                            <div className={styles.metricItem}>
                                <div className={styles.heading}>Total Pass</div>
                                <div className={styles.numberAndBadge2}>
                                    <div className={styles.number2}>94.3%</div>
                                </div>
                            </div>
                            <div className={styles.metricItem}>
                                <div className={styles.heading}>Total Fail</div>
                                <div className={styles.numberAndBadge2}>
                                    <div className={styles.number2}>1.8s</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.section3}>
                            <div className={styles.container}>
                                <div className={styles.sectionHeader}>
                                    <div className={styles.content3}>
                                        <div className={styles.textAndSupportingText7}>
                                            <div className={styles.text6}>Pass Fail Distribution</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.pieChart}>
                                    <div className={styles.pieChart2}>
                                        <div className={styles.background} />
                                        <div className={styles.series2} />
                                    </div>
                                    <div className={styles.legend}>
                                        <div className={styles.legendSeries}>
                                            <div className={styles.dotIcon} style={{ background: '#099250' }} />
                                            <div className={styles.series22}>Pass</div>
                                        </div>
                                        <div className={styles.legendSeries}>
                                            <div className={styles.dotIcon} style={{ background: '#d92d20' }} />
                                            <div className={styles.series22}>Fail</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textAndSupportingTextContainer}>
                        <div className={styles.textAndSupportingText7}>
                            <div className={styles.text6}>Test Cases </div>
                        </div>
                        <div className={styles.content4}>
                            <div className={styles.column}>
                                <div className={styles.tableHeaderCell}>
                                    <div className={styles.tableHeaderLabel}>
                                        <div className={styles.text12}>Test Cases</div>
                                        <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                    </div>
                                </div>
                                <div className={styles.tableCell}>
                                    <div className={styles.textAndSupportingText9}>
                                        <div className={styles.series22}>Charge card with valid payment method</div>
                                    </div>
                                </div>
                                <div className={styles.tableCell2}>
                                    <div className={styles.textAndSupportingText9}>
                                        <div className={styles.series22}>Charge card with valid payment method</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.column2}>
                                <div className={styles.tableHeaderCell2}>
                                    <div className={styles.tableHeaderLabel}>
                                        <div className={styles.text12}>Status</div>
                                        <ChevronDown className={styles.chevronSelectorVerticalIcon} />
                                    </div>
                                </div>
                                <div className={styles.tableCell}>
                                    <div className={styles.badge3}>
                                        <div className={styles.dot}>
                                            <div className={styles.dot2} />
                                        </div>
                                        <div className={styles.text14}>Passed</div>
                                    </div>
                                </div>
                                <div className={styles.tableCell2}>
                                    <div className={styles.badge3}>
                                        <div className={styles.dot}>
                                            <div className={styles.dot4} />
                                        </div>
                                        <div className={styles.text14}>Failed</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.column3}>
                                <div className={styles.tableHeaderCell3} />
                                <div className={styles.tableCell5}>
                                    <div className={styles.buttonsbutton2}>
                                        <div className={styles.text16}>View Report</div>
                                    </div>
                                </div>
                                <div className={styles.tableCell5}>
                                    <div className={styles.buttonsbutton2}>
                                        <div className={styles.text16}>View Report</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.content5}>
                        <div className={styles.actions}>
                            <div className={styles.buttonsbutton4} onClick={onClose}>
                                <div className={styles.textPadding}>
                                    <div className={styles.text16}>Cancel</div>
                                </div>
                            </div>
                            <div className={styles.buttonsbutton5}>
                                <div className={styles.textPadding}>
                                    <div className={styles.text16}>Create Template</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestExecutionDrawer;
