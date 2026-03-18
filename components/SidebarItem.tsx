import React from "react";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
    name: string;
    icon: LucideIcon;
    count?: number;
    isActive: boolean;
    onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    name,
    icon: Icon,
    count,
    isActive,
    onClick,
}) => {
    return (
        <li className="w-64 h-11 py-0.5 inline-flex justify-start items-center overflow-hidden list-none">
            <button
                className={`flex-1 px-3 py-2 rounded-md flex justify-start items-center gap-3 transition-all duration-200 ${
                    isActive
                        ? "bg-sidebar-active"
                        : "bg-transparent hover:bg-sidebar-active/50"
                }`}
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
                style={{
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                }}
            >
                <div className="flex-1 flex justify-start items-center gap-2">
                    <div
                        className={`w-4 h-4 rounded flex items-center justify-center outline -outline-offset-1 ${
                            isActive
                                ? "outline-text-primary"
                                : "outline-text-muted"
                        }`}
                    >
                        <Icon
                            className={`w-3.5 h-3.5 stroke-[2px] ${
                                isActive
                                    ? "text-text-primary"
                                    : "text-text-muted"
                            }`}
                        />
                    </div>
                    <div
                        className={`justify-start text-base font-semibold leading-6 ${
                            isActive
                                ? "text-text-primary"
                                : "text-text-tertiary"
                        }`}
                    >
                        {name}
                    </div>
                </div>
                {count !== undefined && (
                    <div className="px-1.5 py-0.5 bg-white rounded-md outline -outline-offset-1 outline-border-secondary flex justify-start items-center">
                        <div className="text-center justify-start text-text-tertiary text-xs font-medium leading-4">
                            {count}
                        </div>
                    </div>
                )}
            </button>
        </li>
    );
};

export default SidebarItem;
