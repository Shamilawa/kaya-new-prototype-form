"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
    LayoutGrid, TrendingUp, Layers, 
    ChevronLeft, ChevronDown, ChevronUp, Plus,
    Activity, ShieldCheck, Settings, Rocket,
    Building2, Workflow, Users2, Globe
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";

interface SidebarProps {
    // These are no longer strictly needed as we use useParams
}

const CollapsibleSection = ({ 
    title, 
    icon: Icon, 
    children, 
    defaultOpen = false 
}: { 
    title: string, 
    icon?: any, 
    children: React.ReactNode, 
    defaultOpen?: boolean 
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="flex flex-col w-full">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-2 px-3 rounded-lg hover:bg-[#f0f0f3] transition-colors group"
            >
                <div className="flex items-center gap-3">
                    {Icon && <Icon className="w-4 h-4 text-text-tertiary" />}
                    <span className="text-sm font-semibold text-text-primary leading-5">{title}</span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-text-muted" />
                ) : (
                    <ChevronDown className="w-4 h-4 text-text-muted" />
                )}
            </button>
            {isOpen && <div className="mt-1">{children}</div>}
        </div>
    );
};

const VerticalTab = ({ 
    label, 
    isActive = false, 
    onClick 
}: { 
    label: string, 
    isActive?: boolean, 
    onClick?: () => void 
}) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center px-6 py-1.5 text-sm font-medium border-l-2 transition-colors ${
            isActive 
                ? "border-brand-orange text-[#CC3E07]" 
                : "border-border-secondary text-text-tertiary hover:border-text-muted hover:text-text-primary"
        }`}
    >
        {label}
    </button>
);

const Sidebar: React.FC<SidebarProps> = () => {
    const params = useParams();
    const activeWorkspace = params.workspaceId as string | undefined;
    
    // Convert hyphenated URL back to readable name (simple version)
    const displayWorkspaceName = activeWorkspace 
        ? activeWorkspace.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : null;

    const [activeTab, setActiveTab] = React.useState("All Workspaces");

    const enterpriseItems = [
        {
            name: "All Workspaces",
            icon: LayoutGrid,
            iconSrc: "/workflow.svg",
            count: 10,
            section: "ENTERPRISE OVERVIEW",
        },
        { name: "Insights", icon: TrendingUp, section: "ENTERPRISE OVERVIEW" },
        { name: "Licensing", icon: Layers, count: 10, section: "ADMIN" },
    ];

    const enterpriseSections = ["ENTERPRISE OVERVIEW", "ADMIN"];

    if (!activeWorkspace) {
        return (
            <aside className="w-[296px] h-full pl-5 pr-5 flex flex-col justify-between bg-[#F9F9FB]">
                <div className="pt-6 pb-8">
                    <img src="/logo_main.png" alt="Kaya Logo" className="w-[120px] h-[39px]" />
                </div>

                <nav className="flex-1 flex flex-col gap-6 overflow-y-auto">
                    {enterpriseSections.map((section) => (
                        <SidebarSection key={section} title={section}>
                            {enterpriseItems
                                .filter((item) => item.section === section)
                                .map((item) => (
                                    <SidebarItem
                                        key={item.name}
                                        name={item.name}
                                        icon={item.icon}
                                        iconSrc={item.iconSrc}
                                        count={item.count}
                                        isActive={activeTab === item.name}
                                        onClick={() => setActiveTab(item.name)}
                                    />
                                ))}
                        </SidebarSection>
                    ))}
                </nav>

                <div className="py-5 pb-6 flex justify-between items-start border-t border-border-secondary">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#F5F5F5] rounded-full border border-border-secondary flex justify-center items-center text-[16px] font-bold aspect-square" style={{ padding: '8px 0', color: '#717680' }}>
                            OR
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-text-primary leading-5">Olivia Rhye</span>
                            <span className="text-xs text-text-tertiary leading-4">Super Admin</span>
                        </div>
                    </div>
                    <button className="p-1.5 hover:bg-gray-100 rounded-md">
                        <img src="/user-toggle.svg" alt="Toggle" width={9} height={9} />
                    </button>
                </div>
            </aside>
        );
    }

    return (
        <aside className="w-[296px] h-full pl-5 pr-5 flex flex-col justify-between bg-[#F9F9FB] font-inter">
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Header */}
                <div className="pt-6 pb-4 flex flex-col gap-4">
                    <img src="/logo_main.png" alt="Kaya Logo" className="w-[120px] h-[39px]" />
                    <Link 
                        href="/"
                        className="flex items-center gap-1 py-2 text-sm font-semibold text-text-tertiary hover:text-text-primary transition-colors pr-4"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span>Back to Enterprise</span>
                    </Link>
                </div>

                {/* Workspace Controls */}
                <div className="pr-5 flex flex-col gap-4 mb-8">
                    <div className="w-full shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] rounded-lg bg-white overflow-hidden flex items-center justify-between p-2 pl-3 group cursor-pointer border border-transparent hover:border-border-primary transition-all">
                        <span className="text-sm font-semibold text-text-primary font-encode">{displayWorkspaceName}</span>
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <ChevronDown className="w-4 h-4 text-text-muted" />
                            </div>
                            <div className="w-4 h-4 flex items-center justify-center -ml-2">
                                <ChevronUp className="w-4 h-4 text-text-muted" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <SidebarItem 
                            name="Workspace Overview" 
                            icon={Building2} 
                            isActive={activeTab === "Workspace Overview"}
                            onClick={() => setActiveTab("Workspace Overview")}
                        />
                        <button className="w-full shadow-[0_1px_10px_rgba(0,0,0,0.1)] rounded-lg flex items-center justify-center py-2 px-3 gap-1 hover:opacity-90 transition-opacity active:scale-[0.98]"
                            style={{ background: 'radial-gradient(423.78% 126.68% at 24.61% -88.89%, #005bb5 19.07%, #36374c 39.42%, #32191d 48.08%, #ff5714 83.65%)' }}>
                            <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                            <span className="text-sm font-semibold text-white">Create</span>
                        </button>
                    </div>
                </div>

                {/* Navigation Chunks */}
                <nav className="flex-1 flex flex-col gap-8 pr-5 pb-8">
                    <SidebarSection title="MANAGE">
                        <SidebarItem name="iFlows" icon={Workflow} count="3/5" isActive={activeTab === "iFlows"} onClick={() => setActiveTab("iFlows")} />
                        <SidebarItem name="Workspace Agent" icon={Users2} count="3" isActive={activeTab === "Workspace Agent"} onClick={() => setActiveTab("Workspace Agent")} />
                    </SidebarSection>

                    <SidebarSection title="SET UP">
                        <div className="flex flex-col gap-2">
                            <CollapsibleSection title="Configurations" icon={Settings} defaultOpen>
                                <VerticalTab label="Models" isActive />
                                <VerticalTab label="Databases" />
                                <VerticalTab label="Knowledge Sources" />
                                <VerticalTab label="Integrations" />
                            </CollapsibleSection>
                            <CollapsibleSection title="Safety & Governance" icon={ShieldCheck}>
                                <VerticalTab label="Guardrails" />
                                <VerticalTab label="Vaults & Secrets" />
                            </CollapsibleSection>
                            <CollapsibleSection title="Workspace Settings" icon={Globe}>
                                <VerticalTab label="Variables" />
                                <VerticalTab label="Webhooks" />
                                <VerticalTab label="Sources" />
                            </CollapsibleSection>
                            <CollapsibleSection title="Custom Capabilities" icon={Rocket}>
                                <VerticalTab label="Executable Functions" />
                            </CollapsibleSection>
                        </div>
                    </SidebarSection>

                    <SidebarSection title="DEPLOY">
                        <SidebarItem name="Pull from Registry" icon={Rocket} isActive={activeTab === "Pull from Registry"} onClick={() => setActiveTab("Pull from Registry")} />
                    </SidebarSection>

                    <SidebarSection title="MONITOR">
                        <SidebarItem name="Track Usage" icon={Activity} isActive={activeTab === "Track Usage"} onClick={() => setActiveTab("Track Usage")} />
                        <SidebarItem name="Metrics & Analytics" icon={TrendingUp} isActive={activeTab === "Metrics & Analytics"} onClick={() => setActiveTab("Metrics & Analytics")} />
                    </SidebarSection>
                </nav>
            </div>

            {/* Account Footer */}
            <div className="py-5 pb-6 flex justify-between items-start border-t border-border-secondary bg-[#F9F9FB] sticky bottom-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F5F5F5] rounded-full border border-border-secondary flex justify-center items-center text-[16px] font-bold aspect-square" style={{ padding: '8px 0', color: '#717680' }}>
                        OR
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-text-primary leading-5">Olivia Rhye</span>
                        <span className="text-xs text-text-tertiary leading-4">Super Admin</span>
                    </div>
                </div>
                <button className="p-1.5 hover:bg-gray-100 rounded-md">
                    <img src="/user-toggle.svg" alt="Toggle" width={9} height={9} />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
