"use client";

import React from "react";
import styles from "./CreateConfigurationDrawer.module.css";
import { X } from "lucide-react";

interface CreateConfigurationDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
}

const CreateConfigurationDrawer: React.FC<CreateConfigurationDrawerProps> = ({
    isOpen,
    onClose,
    title,
    description,
}) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
        if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
            onClose();
        }
    };

    return (
        <div 
            className={styles.backdrop} 
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Close drawer backdrop"
        >
            <div className={styles.slideOutMenu}>
                <div className={styles.panel}>
                    <div className={styles.slideOutMenuHeader}>
                        <div className={styles.content}>
                            <div className={styles.textAndSupportingText}>
                                <div className={styles.text}>{title}</div>
                                {description && (
                                    <div className={styles.supportingText}>
                                        {description}
                                    </div>
                                )}
                            </div>
                        </div>
                        <button
                            className={styles.buttonsbuttonCloseX}
                            onClick={onClose}
                            aria-label="Close drawer"
                        >
                            <X className={styles.xCloseIcon} />
                        </button>
                    </div>

                    <div className={styles.content2}>
                        <div className={styles.placeholderMessage}>
                            Form will be there
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.content5}>
                            <div className={styles.actions}>
                                <button
                                    className={styles.buttonsbutton2}
                                    onClick={onClose}
                                >
                                    <div className={styles.textPadding}>
                                        <span className={styles.text7}>Cancel</span>
                                    </div>
                                </button>
                                <button
                                    className={styles.buttonsbutton3}
                                    onClick={onClose}
                                >
                                    <div className={styles.textPadding}>
                                        <span className={styles.text7}>
                                            Save
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateConfigurationDrawer;
