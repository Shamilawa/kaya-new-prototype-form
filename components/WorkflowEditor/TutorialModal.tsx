import React from 'react';
import styles from './TutorialModal.module.css';
import { X, ArrowUpRight } from 'lucide-react';

interface TutorialModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose }) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className={styles.overlay} 
            onClick={onClose}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
        >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <div className={styles.content}>
                        <div className={styles.textAndSupportingText}>
                            <div className={styles.text}>Start building your iFlow</div>
                        </div>
                    </div>
                    <div className={styles.buttonsbuttonCloseX} onClick={onClose} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
                        <X size={24} className={styles.xCloseIcon} />
                    </div>
                    <div className={styles.paddingBottom} />
                </div>
                
                <div className={styles.content2}>
                    <div className={styles.pricingCards}>
                        <div className={styles.pricingCard}>
                            <div className={styles.header}>
                                <div className={styles.iconsPlaceholder}>1</div>
                                <div className={styles.headingAndSupportingText}>
                                    <div className={styles.text}>1. Create or Add Agents</div>
                                </div>
                            </div>
                            <div className={styles.content3}>
                                <div className={styles.checkItems}>
                                    <div className={styles.checkItemTextParent}>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Set role & instructions</div>
                                            </div>
                                        </div>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Choose AI model</div>
                                            </div>
                                        </div>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Connect APIs & data</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonsbutton}>
                                        <div className={styles.text5}>Learn More</div>
                                        <ArrowUpRight size={20} className={styles.arrowNarrowUpRightIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pricingCard2}>
                            <div className={styles.header}>
                                <div className={styles.iconsPlaceholder}>2</div>
                                <div className={styles.headingAndSupportingText}>
                                    <div className={styles.text}>2. Connect & Orchestrate Agents</div>
                                </div>
                            </div>
                            <div className={styles.content3}>
                                <div className={styles.checkItems}>
                                    <div className={styles.checkItemTextParent}>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Link agents in sequence</div>
                                            </div>
                                        </div>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Add routing logic</div>
                                            </div>
                                        </div>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Build multi-agent automation</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonsbutton}>
                                        <div className={styles.text5}>Learn More</div>
                                        <ArrowUpRight size={20} className={styles.arrowNarrowUpRightIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pricingCard2}>
                            <div className={styles.header}>
                                <div className={styles.iconsPlaceholder}>3</div>
                                <div className={styles.headingAndSupportingText}>
                                    <div className={styles.text}>3. Test & Deploy</div>
                                </div>
                            </div>
                            <div className={styles.content3}>
                                <div className={styles.checkItems}>
                                    <div className={styles.checkItemTextParent}>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Run with sample data</div>
                                            </div>
                                        </div>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Monitor performance</div>
                                            </div>
                                        </div>
                                        <div className={styles.checkItemText}>
                                            <div className={styles.textAndSupportingText}>
                                                <div className={styles.text2}>• Validate before going live</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonsbutton}>
                                        <div className={styles.text5}>Learn More</div>
                                        <ArrowUpRight size={20} className={styles.arrowNarrowUpRightIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.modalActions}>
                    <div className={styles.dividerWrap} />
                    <div className={styles.content6}>
                        <div className={styles.checkbox}>
                            <div className={styles.input}>
                                <div className={styles.checkboxBase}></div>
                            </div>
                            <div className={styles.textAndSupportingText}>
                                <div className={styles.text14}>Don’t show this again</div>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.buttonsbutton4} onClick={onClose}>
                                <div className={styles.text15}>Skip</div>
                            </div>
                            <div className={styles.buttonsbutton5} onClick={onClose}>
                                <div className={styles.textPadding}>
                                    <div className={styles.text15}>Next</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialModal;
