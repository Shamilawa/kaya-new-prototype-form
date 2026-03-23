"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./AddVariableDrawer.module.css";
import { X, Search, HelpCircle, ChevronDown } from "lucide-react";

interface AddVariableDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (variable: { name: string, value: string }) => void;
    initialVariable?: { name: string, value: string } | null;
}

const mockVariables = [
    { name: "user_name", defaultValue: "John Doe" },
    { name: "order_id", defaultValue: "12345" },
    { name: "account_status", defaultValue: "active" },
    { name: "total_amount", defaultValue: "0.00" },
    { name: "currency", defaultValue: "USD" },
];

const AddVariableDrawer: React.FC<AddVariableDrawerProps> = ({
    isOpen,
    onClose,
    onSave,
    initialVariable,
}) => {
    const [selectedVariable, setSelectedVariable] = useState<string | null>(null);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (isOpen) {
            if (initialVariable) {
                setSelectedVariable(initialVariable.name);
                setValue(initialVariable.value);
            } else {
                setSelectedVariable(null);
                setValue("");
            }
        }
    }, [isOpen, initialVariable]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleSelectVariable = (variable: { name: string, defaultValue: string }) => {
        setSelectedVariable(variable.name);
        setValue(variable.defaultValue);
        setIsDropdownOpen(false);
    };

    return (
        <div 
            className={styles.backdrop} 
            onClick={handleBackdropClick}
        >
            <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
                <div className={styles.slideOutMenuHeader}>
                    <div className={styles.content}>
                        <div className={styles.textAndSupportingText}>
                            <div className={styles.textParent}>
                                <div className={styles.text}>Add variable</div>
                                <div className={styles.supportingText}>
                                    Create a new variable to pass dynamic data into your workflow.
                                </div>
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
                        <div className={styles.select}>
                            <div className={styles.inputWithLabel}>
                                <div className="relative w-full" ref={dropdownRef}>
                                    <div 
                                        className={styles.input}
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <div className={styles.content3}>
                                            <Search className="w-5 h-5 text-gray-400" />
                                            <div className={styles.text4}>
                                                {selectedVariable || "Search existing variables..."}
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                    
                                    {isDropdownOpen && (
                                        <div className={styles.dropdownMenu}>
                                            {mockVariables.map((variable) => (
                                                <div 
                                                    key={variable.name}
                                                    className={styles.dropdownItem}
                                                    onClick={() => handleSelectVariable(variable)}
                                                >
                                                    {variable.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.textareaInputField}>
                            <div className={styles.inputWithLabel2}>
                                <div className={styles.labelWrapper}>
                                    <div className={styles.label}>Value</div>
                                    <div className={styles.helpIcon}>
                                        <HelpCircle className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                                <textarea
                                    className={styles.input2}
                                    placeholder="Enter the value for this variable..."
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.content4}>
                        <div className={styles.actions}>
                            <button
                                className={styles.buttonsbutton2}
                                onClick={onClose}
                            >
                                <div className={styles.textPadding}>
                                    <span className={styles.text6}>Cancel</span>
                                </div>
                            </button>
                            <button
                                className={styles.buttonsbutton3}
                                onClick={() => {
                                    if (selectedVariable) {
                                        onSave({ name: selectedVariable, value });
                                        onClose();
                                    }
                                }}
                                disabled={!selectedVariable}
                            >
                                <div className={styles.textPadding}>
                                    <span className={styles.text6}>Add Variable</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVariableDrawer;
