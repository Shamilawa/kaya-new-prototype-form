"use client";

import React from "react";
import { LayoutGrid, TrendingUp, Layers, MoreVertical } from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
    const [activeTab, setActiveTab] = React.useState("All Workspaces");

    const navItems = [
        {
            name: "All Workspaces",
            icon: LayoutGrid,
            count: 10,
            section: "ENTERPRISE OVERVIEW",
        },
        { name: "Insights", icon: TrendingUp, section: "ENTERPRISE OVERVIEW" },
        { name: "Licensing", icon: Layers, count: 10, section: "ADMIN" },
    ];

    const sections = ["ENTERPRISE OVERVIEW", "ADMIN"];

    return (
        <aside className="w-[296px] h-full pl-5 flex flex-col justify-between border-border-secondary">
            <div className="pt-6 pb-8">
                <div className="logo-container">
                    <img
                        src="/logo_main.png"
                        alt="Kaya Logo"
                        className="w-[120px] h-[39px]"
                    />
                </div>
            </div>

            <nav className="flex-1 flex flex-col gap-6">
                {sections.map((section) => (
                    <SidebarSection key={section} title={section}>
                        {navItems
                            .filter((item) => item.section === section)
                            .map((item) => (
                                <SidebarItem
                                    key={item.name}
                                    name={item.name}
                                    icon={item.icon}
                                    count={item.count}
                                    isActive={activeTab === item.name}
                                    onClick={() => setActiveTab(item.name)}
                                />
                            ))}
                    </SidebarSection>
                ))}
            </nav>

            <div className="py-5 pr-2 pb-6 flex justify-between items-center border-t border-border-secondary">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#F5F5F5] rounded-full border border-border-secondary flex justify-center items-center text-[16px] font-semibold text-text-quaternary">
                        OR
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-text-primary">
                            Olivia Rhye
                        </span>
                        <span className="text-sm text-text-tertiary">
                            Super Admin
                        </span>
                    </div>
                </div>
                <button className="bg-none border-none p-1.5 cursor-pointer rounded-md flex items-center">
                    <MoreVertical className="w-4 h-4 text-text-muted" />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
