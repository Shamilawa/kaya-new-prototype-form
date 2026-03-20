"use client";

import React, { useEffect } from "react";
import styles from "./EditorDrawer.module.css";

interface EditorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const EditorDrawer: React.FC<EditorDrawerProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={styles.backdrop} 
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={styles.panel}>{children}</div>
    </div>
  );
};

export default EditorDrawer;
