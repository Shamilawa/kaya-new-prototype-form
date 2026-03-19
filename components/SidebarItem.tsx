import React from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface SidebarItemProps {
    name: string;
    icon?: LucideIcon;
    iconSrc?: string;
    count?: number | string;
    isActive: boolean;
    onClick: () => void;
    disabled?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    name,
    icon: Icon,
    iconSrc,
    count,
    isActive,
    onClick,
    disabled = false,
}) => {
    return (
        <li className="w-full inline-flex justify-start items-center overflow-hidden list-none">
            <button
                className={`flex-1 flex items-center gap-3 transition-all duration-200 ${
                    isActive
                        ? "bg-[#F0F0F3]"
                        : disabled
                          ? "bg-transparent cursor-not-allowed opacity-50"
                          : "bg-transparent hover:bg-[#F0F0F3]/50"
                }`}
                onClick={(e) => {
                    e.preventDefault();
                    if (!disabled) onClick();
                }}
                disabled={disabled}
                title={disabled ? "Coming soon" : undefined}
                style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "none",
                    textAlign: "left",
                    cursor: disabled ? "not-allowed" : "pointer",
                    gap: "12px",
                }}
            >
                <div className="flex-1 flex justify-start items-center gap-3">
                    <div
                        className={`p-1 rounded inline-grid place-items-center shadow-[0_0_6px_0_rgba(164,167,174,0.35)] ${
                            isActive ? "bg-[#F0F0F3]" : "bg-white"
                        }`}
                    >
                        {iconSrc ? (
                            <Image
                                src={iconSrc}
                                alt={name}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                            />
                        ) : Icon ? (
                            <Icon
                                className="w-5 h-5 text-[#181D27]"
                                strokeWidth={1.75}
                            />
                        ) : null}
                    </div>
                    <div
                        className={`justify-start text-sm leading-5 ${
                            isActive
                                ? "font-semibold text-text-primary"
                                : "font-medium text-text-tertiary"
                        }`}
                    >
                        {name}
                    </div>
                </div>
                {count !== undefined && (
                    <div className="flex items-center px-1.5 py-0.5 bg-white rounded-md border border-[#D5D7DA] shadow-[0_1px_2px_0_rgba(10,13,18,0.05)]">
                        <div className="text-center text-text-tertiary text-xs font-medium leading-4">
                            {count}
                        </div>
                    </div>
                )}
            </button>
        </li>
    );
};

export default SidebarItem;
