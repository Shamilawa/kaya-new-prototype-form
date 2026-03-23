"use client";

import { useTheme } from "next-themes";
import styles from "../components/WorkflowEditor/AgentForm.module.css";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-bg-secondary"
    >
      <span className="text-sm text-text-primary dark:text-white">
        {theme === "dark" ? "Dark" : "Light"} Mode
      </span>
      <span className="text-xs text-text-muted">
        <div
          className={`${styles.toggleSwitch} ${theme === "dark" ? styles.active : ""}`}
        >
          <div className={styles.toggleThumb}></div>
        </div>
      </span>
    </button>
  );
};
