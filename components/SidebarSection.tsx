import React from "react";

interface SidebarSectionProps {
    title: string;
    children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="text-[12px] font-bold text-[#535862] pb-2 pr-5 tracking-wide uppercase">
                {title}
            </h3>
            <ul className="list-none flex flex-col gap-1">{children}</ul>
        </div>
    );
};

export default SidebarSection;
