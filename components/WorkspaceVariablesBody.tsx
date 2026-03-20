import React from "react";
import { Plus, Settings } from "lucide-react";
import styles from "./ModelsBody.module.css";
import DatabaseCard from "./DatabaseCard";

interface WorkspaceVariablesBodyProps {
  workspaceId: string;
}

const integrationCards = [
  {
    name: "APP_NAME",
    type: "string",
    description: "Global application name identifier",
  },
  {
    name: "MAX_RETRIES",
    type: "int",
    description: "Maximum number of retry attempts",
  },
  {
    name: "TEMPERATURE",
    type: "float",
    description: "Default LLM generation temperature",
  },
  {
    name: "DEBUG_MODE",
    type: "bool",
    description: "Toggles verbose system logging",
  },
  {
    name: "ENABLE_CACHE",
    type: "bool",
    description: "Enables caching layer globally",
  },
  {
    name: "TIMEOUT_MS",
    type: "int",
    description: "Default request timeout in milliseconds",
  },
  {
    name: "SIMILARITY_THRESHOLD",
    type: "float",
    description: "Vector distance threshold cutoff",
  },
];

const WorkspaceVariablesBody: React.FC<WorkspaceVariablesBodyProps> = ({
  workspaceId,
}) => {
  return (
    <div className={styles["frame-parent"]}>
      <div className={styles["container-parent"]}>
        <div className={styles["container"]}>
          <div className={styles["image-wrap"]}>
            <div className={styles["image"]}></div>
          </div>

          <div className={styles["content"]}>
            <div className="flex items-center justify-between flex-wrap gap-5 w-full">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px]">
                    <Settings className="w-[23px] h-[21px] text-[#FF5714]" />
                  </div>
                  <h1 className="text-2xl font-semibold text-text-primary leading-8">
                    Workspace Variables
                  </h1>
                </div>
                <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                  Manage your internal workspace variables and global
                  configuration state.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 px-3.5 py-2.5 bg-white text-[#414651] rounded-lg text-sm font-semibold border border-[#d5d7da] shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-gray-50 transition-colors cursor-pointer">
                  <span>Learn More</span>
                </button>
                <button className="flex items-center gap-1 px-3.5 py-2.5 bg-[#005BB5] text-white rounded-lg text-sm font-semibold shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-[#004A96] transition-colors cursor-pointer">
                  <Plus className="w-5 h-5" />
                  <span>Workspace Variable</span>
                </button>
              </div>
            </div>

            <div className={styles["actions2"]}>
              <div className={styles["buttonsbutton3"]}></div>
              <div className={styles["buttonsbutton4"]}></div>
              <div className={styles["buttonsbutton4"]}></div>
              <div className={styles["buttonsbutton6"]}></div>
            </div>
            <div className={styles["select"]}></div>
          </div>
        </div>

        <div className={styles["experience-parent"]}>
          {integrationCards.length === 0 && (
            <div className="text-center py-8 text-text-tertiary">
              No workspace variables found.
            </div>
          )}
          <div className={styles["experience"]}>
            {integrationCards.map((row, rowIndex) => (
              <DatabaseCard
                key={`card-${rowIndex}-${row.name}-${rowIndex}`}
                {...row}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceVariablesBody;
