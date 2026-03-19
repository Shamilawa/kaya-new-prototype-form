"use client";

import React, { useState } from "react";
import styles from "./CreateIFlowDrawer.module.css";
import { X } from "lucide-react";

interface CreateIFlowDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateIFlowDrawer: React.FC<CreateIFlowDrawerProps> = ({
    isOpen,
    onClose,
}) => {
    const [name, setName] = useState("Marketing site redesign");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.panel}>
                <div className={styles.slideOutMenuHeader}>
                    <div className={styles.content}>
                        <div className={styles.textAndSupportingText}>
                            <div className={styles.text}>Create an iFlow</div>
                            <div className={styles.supportingText}>
                                {`Provide details to start building your iFlow workflow.`}
                            </div>
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
                    <div className={styles.section2}>
                        <div className={styles.inputField}>
                            <div className={styles.inputWithLabel}>
                                <label
                                    className={styles.labelWrapper}
                                    htmlFor="iflow-name"
                                >
                                    <span className={styles.label}>
                                        iFlow name
                                    </span>
                                    <span className={styles.asterisk}>*</span>
                                </label>
                                <input
                                    id="iflow-name"
                                    type="text"
                                    className={styles.input}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter iFlow name"
                                />
                            </div>
                        </div>

                        <div className={styles.inputField}>
                            <div className={styles.inputWithLabel}>
                                <label
                                    className={styles.labelWrapper}
                                    htmlFor="iflow-tags"
                                >
                                    <span className={styles.label}>Tags</span>
                                </label>
                                <input
                                    id="iflow-tags"
                                    type="text"
                                    className={styles.input}
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    placeholder="Select tags..."
                                />
                            </div>
                        </div>

                        <div className={styles.textareaInputField}>
                            <div className={styles.inputWithLabel}>
                                <label
                                    className={styles.labelWrapper}
                                    htmlFor="iflow-description"
                                >
                                    <span className={styles.label}>
                                        Description
                                    </span>
                                </label>
                                <textarea
                                    id="iflow-description"
                                    className={styles.input3}
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    placeholder="Enter a description..."
                                />
                            </div>
                        </div>
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
                                onClick={() => {
                                    // Handle creation logic here
                                    console.log("Creating iFlow:", {
                                        name,
                                        tags,
                                        description,
                                    });
                                    onClose();
                                }}
                            >
                                <div className={styles.textPadding}>
                                    <span className={styles.text7}>
                                        Create iFlow
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateIFlowDrawer;
