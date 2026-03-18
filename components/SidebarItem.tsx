import React from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface SidebarItemProps {
    name: string;
    icon: LucideIcon;
    iconSrc?: string;
    count?: number | string;
    isActive: boolean;
    onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    name,
    icon: Icon,
    iconSrc,
    count,
    isActive,
    onClick,
}) => {
    return (
        <li className="w-full inline-flex justify-start items-center overflow-hidden list-none">
            <button
                className={`flex-1 flex items-center gap-3 transition-all duration-200 ${
                    isActive
                        ? "bg-[#F0F0F3]"
                        : "bg-transparent hover:bg-[#F0F0F3]/50"
                }`}
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
                style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: "12px",
                }}
            >
                <div className="flex-1 flex justify-start items-center gap-3">
                    <div
                        className={`p-1 rounded inline-grid place-items-center shadow-[0_0_6px_0_rgba(164,167,174,0.35)] ${
                            isActive
                                ? "bg-[#F0F0F3]"
                                : "bg-white"
                        }`}
                    >
                        {iconSrc ? (
                            <Image src={iconSrc} alt={name} width={18} height={18} />
                        ) : (
                            <Icon
                                className="w-[18px] h-[18px] stroke-[2px] text-[#181D27]"
                            />
                        )}
                    </div>
                    <div
                        className={`justify-start text-base leading-6 ${
                            isActive
                                ? "font-semibold text-text-primary"
                                : "font-medium text-text-tertiary"
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
