"use client";

import React, { useState } from "react";
import styles from "./PromptTemplateBody.module.css";
import { FileText, Pencil, Check, X } from "lucide-react";

const defaultPromptName = "Executive Summary Generator";

const defaultDescription =
    "Transforms lengthy reports, meeting notes, or data into concise executive summaries tailored for C-suite or board-level audiences. Ideal for strategy, finance, and operations teams.";

const defaultInstructions = `You are a senior business analyst with expertise in executive communication.

CONTEXT:

 - Company/Industry: [COMPANY NAME / INDUSTRY]

 - Audience: [e.g., Board of Directors, C-Suite, Department Heads]

 - Document Type: [e.g., Quarterly Report, Meeting Notes, Market Analysis]

TASK:

Review the following content and produce an executive summary that includes:

1. A 2-3 sentence high-level overview

2. Key findings or decisions (bullet points, max 5)

3. Risks or concerns to flag

4. Recommended next steps

TONE & FORMAT:

 - Tone: [e.g., Formal / Neutral / Urgent]

 - Length: [e.g., Half a page / 1 page max]

 - Format: [e.g., Prose / Bullet points / Both]`;

const PromptTemplateBody = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [promptName, setPromptName] = useState(defaultPromptName);
    const [description, setDescription] = useState(defaultDescription);
    const [instructions, setInstructions] = useState(defaultInstructions);

    // Draft state while editing
    const [draftName, setDraftName] = useState(promptName);
    const [draftDescription, setDraftDescription] = useState(description);
    const [draftInstructions, setDraftInstructions] = useState(instructions);

    const handleEdit = () => {
        setDraftName(promptName);
        setDraftDescription(description);
        setDraftInstructions(instructions);
        setIsEditing(true);
    };

    const handleSave = () => {
        setPromptName(draftName);
        setDescription(draftDescription);
        setInstructions(draftInstructions);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div className={styles.container}>
            {/* Page header */}
            <div className={styles.pageHeader}>
                <div className={styles.titleRow}>
                    <FileText className={styles.titleIcon} />
                    <div>
                        <h1 className={styles.title}>Prompt Template</h1>
                        <p className={styles.subtitle}>(Placeholder text about prompt template for this agent)</p>
                    </div>
                </div>
                <div className={styles.headerActions}>
                    {isEditing ? (
                        <>
                            <button className={styles.cancelBtn} onClick={handleCancel}>
                                <X size={15} />
                                Cancel
                            </button>
                            <button className={styles.saveBtn} onClick={handleSave}>
                                <Check size={15} />
                                Save
                            </button>
                        </>
                    ) : (
                        <button className={styles.editBtn} onClick={handleEdit}>
                            <Pencil size={15} />
                            Edit
                        </button>
                    )}
                </div>
            </div>

            {/* Form */}
            <div className={styles.form}>
                {/* Prompt Name */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Prompt Name</label>
                    {isEditing ? (
                        <input
                            className={styles.input}
                            value={draftName}
                            onChange={(e) => setDraftName(e.target.value)}
                            placeholder="Executive Summary Generator"
                        />
                    ) : (
                        <div className={styles.inputReadOnly}>{promptName}</div>
                    )}
                </div>

                {/* Description */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                        Description <span className={styles.required}>*</span>
                    </label>
                    {isEditing ? (
                        <textarea
                            className={styles.textarea}
                            rows={5}
                            value={draftDescription}
                            onChange={(e) => setDraftDescription(e.target.value)}
                        />
                    ) : (
                        <div className={styles.textareaReadOnly}>{description}</div>
                    )}
                    <p className={styles.hint}>Explain the template&apos;s purpose and ideal use cases.</p>
                </div>

                {/* Prompt Instructions */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                        Prompt instructions{" "}
                        <span className={styles.labelHint}>(Type @ to insert variables and other options.)</span>
                    </label>
                    {isEditing ? (
                        <textarea
                            className={`${styles.textarea} ${styles.instructionsTextarea}`}
                            rows={20}
                            value={draftInstructions}
                            onChange={(e) => setDraftInstructions(e.target.value)}
                        />
                    ) : (
                        <div className={`${styles.textareaReadOnly} ${styles.instructionsReadOnly}`}>
                            {instructions}
                        </div>
                    )}
                    <p className={styles.hint}>Define the agent&apos;s role, tone, and task structure.</p>
                </div>
            </div>
        </div>
    );
};

export default PromptTemplateBody;
