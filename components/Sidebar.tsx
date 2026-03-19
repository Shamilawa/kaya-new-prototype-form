"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter, usePathname } from "next/navigation";
import {
    LayoutGrid,
    TrendingUp,
    Layers,
    ChevronLeft,
    ChevronDown,
    ChevronUp,
    Plus,
    ShieldCheck,
    Settings,
    Rocket,
    Building2,
    Workflow,
    Globe,
    PlayCircle,
    ClipboardCheck,
    FileCheck2,
    LayoutPanelLeft,
    BarChart3,
    Bot,
    SquarePen,
    ScrollText,
    BookOpen,
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
    defaultOpen = false,
}: {
    title: string;
    icon?: any;
    children: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="flex flex-col w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-2 px-2 rounded-lg hover:bg-[#f0f0f3] transition-colors group"
            >
                <div className="flex items-center gap-3">
                    {Icon && <Icon className="w-4 h-4 text-text-tertiary" />}
                    <span className="text-sm font-semibold text-[#181D27] leading-5">
                        {title}
                    </span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-text-muted" />
                ) : (
                    <ChevronDown className="w-4 h-4 text-text-muted" />
                )}
            </button>
            {isOpen && (
                <div className="mt-2 pt-0 px-3 pb-2 flex flex-col gap-2">
                    {children}
                </div>
            )}
        </div>
    );
};

const VerticalTab = ({
    label,
    isActive = false,
    onClick,
}: {
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center px-6 text-sm font-medium border-l-2 transition-colors ${
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
    const router = useRouter();
    const pathname = usePathname();
    const activeWorkspace = params.workspaceId as string | undefined;
    const activeIFlow = params.iflowId as string | undefined;
    const activeAgent = params.agentId as string | undefined;

    // Convert hyphenated URL back to readable name (simple version)
    const displayWorkspaceName = activeWorkspace
        ? activeWorkspace
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
        : null;

    const displayIFlowName = activeIFlow
        ? activeIFlow
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
        : null;

    const displayAgentName = activeAgent
        ? activeAgent
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
        : null;

    const initialTab =
        activeWorkspace && !activeIFlow && !activeAgent
            ? "Workspace Overview"
            : "All Workspaces";
    const [activeTab, setActiveTab] = React.useState(initialTab);

    // Update active tab when URL parameters change
    React.useEffect(() => {
        if (pathname.includes("/iflows")) {
            setActiveTab("iFlows");
        } else if (pathname.includes("/agents")) {
            setActiveTab("Workspace Agent");
        } else if (pathname.includes("/models")) {
            setActiveTab("Models");
        } else if (pathname.includes("/databases")) {
            setActiveTab("Databases");
        } else if (pathname.includes("/knowledge-sources")) {
            setActiveTab("Knowledge Sources");
        } else if (pathname.includes("/integrations")) {
            setActiveTab("Integrations");
        } else if (pathname.includes("/guardrails")) {
            setActiveTab("Guardrails");
        } else if (pathname.includes("/vaults-and-secrets")) {
            setActiveTab("Vaults & Secrets");
        } else if (pathname.includes("/workspace-variables")) {
            setActiveTab("Workspace Variable");
        } else if (pathname.includes("/executable-functions")) {
            setActiveTab("Executable Functions");
        } else if (activeWorkspace && !activeIFlow && !activeAgent) {
            setActiveTab("Workspace Overview");
        } else if (!activeWorkspace) {
            setActiveTab("All Workspaces");
        }
    }, [activeWorkspace, activeIFlow, activeAgent, pathname]);

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
            <aside className="w-[312px] shrink-0 h-full pl-5 pr-5 flex flex-col justify-between bg-[#F9F9FB]">
                <div className="pt-6 pb-8">
                    <img
                        src="/logo_main.png"
                        alt="Kaya Logo"
                        className="w-[120px] h-[39px]"
                    />
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
                        <div
                            className="w-10 h-10 bg-[#F5F5F5] rounded-full border border-border-secondary flex justify-center items-center text-[16px] font-bold aspect-square"
                            style={{ padding: "8px 0", color: "#717680" }}
                        >
                            OR
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-text-primary leading-5">
                                Olivia Rhye
                            </span>
                            <span className="text-xs text-text-tertiary leading-4">
                                Super Admin
                            </span>
                        </div>
                    </div>
                    <button className="p-1.5 hover:bg-gray-100 rounded-md">
                        <img
                            src="/user-toggle.svg"
                            alt="Toggle"
                            width={9}
                            height={9}
                        />
                    </button>
                </div>
            </aside>
        );
    }

    if (activeAgent) {
        return (
            <aside className="w-[312px] shrink-0 h-full pl-5 flex flex-col justify-between border-r border-border-secondary bg-[#F9F9FB] font-inter">
                <div className="flex-1 flex flex-col overflow-y-auto">
                    {/* Header */}
                    <div className="pt-6 pb-4 flex flex-col gap-4">
                        <img
                            src="/logo_main.png"
                            alt="Kaya Logo"
                            className="w-[120px] h-[39px]"
                        />
                        <Link
                            href={`/${activeWorkspace}`}
                            className="flex items-center gap-1 py-2 text-sm font-semibold text-text-tertiary hover:text-text-primary transition-colors pr-4"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Back to Workspace</span>
                        </Link>
                    </div>

                    {/* Agent Controls */}
                    <div className="pr-5 flex flex-col gap-4 mb-8">
                        <div className="w-full shadow-[0_0_0_1px_#E9EAEB_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)] rounded-lg bg-white overflow-hidden flex items-center justify-between py-2 px-3 gap-2 group cursor-pointer hover:border-border-primary transition-all">
                            <span className="text-sm font-semibold text-[#535862] font-encode overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0">
                                {displayWorkspaceName}
                            </span>
                            <img
                                src="/user-toggle.svg"
                                alt=""
                                className="w-[8px] h-[13px] shrink-0"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <SidebarItem
                                name={displayAgentName || ''}
                                icon={Bot}
                                isActive={true}
                                onClick={() => {}}
                            />
                            <button
                                className="w-full shadow-[0_1px_10px_rgba(0,0,0,0.1)] rounded-lg flex items-center justify-center py-2 px-3 gap-1 hover:opacity-90 transition-opacity active:scale-[0.98]"
                                style={{
                                    backgroundImage: "url(/btn-gradient.svg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <SquarePen
                                    className="w-4 h-4 text-white"
                                    strokeWidth={3}
                                />
                                <span className="text-sm font-semibold text-white">
                                    Edit Agent
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Agent Navigation */}
                    <nav className="flex-1 flex flex-col gap-8 pr-5 pb-8">
                        <SidebarSection title="MANAGE">
                            <SidebarItem
                                name="Prompt Template"
                                icon={ScrollText}
                                isActive={activeTab === "Prompt Template"}
                                onClick={() => setActiveTab("Prompt Template")}
                            />
                            <SidebarItem
                                name="Learning Records"
                                icon={BookOpen}
                                isActive={activeTab === "Learning Records"}
                                onClick={() => setActiveTab("Learning Records")}
                            />
                        </SidebarSection>

                        <SidebarSection title="MONITOR">
                            <SidebarItem
                                name="Track Usage"
                                icon={LayoutPanelLeft}
                                isActive={activeTab === "Track Usage"}
                                onClick={() => setActiveTab("Track Usage")}
                            />
                            <SidebarItem
                                name="Metrics & Analytics"
                                icon={BarChart3}
                                isActive={activeTab === "Metrics & Analytics"}
                                onClick={() =>
                                    setActiveTab("Metrics & Analytics")
                                }
                            />
                        </SidebarSection>
                    </nav>
                </div>

                {/* Account Footer */}
                <div className="py-5 pr-5 pb-6 flex justify-between items-center border-t border-border-secondary bg-[#F9F9FB] sticky bottom-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full border border-border-secondary flex justify-center items-center text-[14px] font-semibold text-text-primary">
                            OR
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-text-primary leading-5">
                                Olivia Rhye
                            </span>
                            <span className="text-xs text-text-tertiary leading-4">
                                Super Admin
                            </span>
                        </div>
                    </div>
                    <button className="p-1.5 hover:bg-gray-100 rounded-md">
                        <ChevronDown className="w-4 h-4 text-text-muted" />
                    </button>
                </div>
            </aside>
        );
    }

    if (activeIFlow) {
        return (
            <aside className="w-[312px] shrink-0 h-full pl-5 flex flex-col justify-between border-r border-border-secondary bg-[#F9F9FB] font-inter">
                <div className="flex-1 flex flex-col overflow-y-auto">
                    {/* Header */}
                    <div className="pt-6 pb-4 flex flex-col gap-4">
                        <img
                            src="/logo_main.png"
                            alt="Kaya Logo"
                            className="w-[120px] h-[39px]"
                        />
                        <Link
                            href={`/${activeWorkspace}`}
                            className="flex items-center gap-1 py-2 text-sm font-semibold text-text-tertiary hover:text-text-primary transition-colors pr-4"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Back to Workspace</span>
                        </Link>
                    </div>

                    {/* iFlow Controls */}
                    <div className="pr-5 flex flex-col gap-4 mb-8">
                        <div className="w-full shadow-[0_0_0_1px_#E9EAEB_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)] rounded-lg bg-white overflow-hidden flex items-center justify-between py-2 px-3 gap-2 group cursor-pointer hover:border-border-primary transition-all">
                            <span className="text-sm font-semibold text-[#535862] font-encode overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0">
                                {displayWorkspaceName}
                            </span>
                            <img
                                src="/user-toggle.svg"
                                alt=""
                                className="w-[8px] h-[13px] shrink-0"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <SidebarItem
                                name={displayIFlowName || ''}
                                icon={Workflow}
                                isActive={true}
                                onClick={() => {}}
                            />
                            <button
                                className="w-full shadow-[0_1px_10px_rgba(0,0,0,0.1)] rounded-lg flex items-center justify-center py-2 px-3 gap-1 hover:opacity-90 transition-opacity active:scale-[0.98]"
                                style={{
                                    backgroundImage: "url(/btn-gradient.svg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <SquarePen
                                    className="w-4 h-4 text-white"
                                    strokeWidth={3}
                                />
                                <span className="text-sm font-semibold text-white">
                                    Edit iFlow
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* iFlow Navigation */}
                    <nav className="flex-1 flex flex-col gap-8 pr-5 pb-8">
                        <SidebarSection title="MANAGE">
                            <SidebarItem
                                name="Agents"
                                icon={Bot}
                                count="10"
                                isActive={activeTab === "Agents"}
                                onClick={() => setActiveTab("Agents")}
                            />
                        </SidebarSection>

                        <SidebarSection title="TEST">
                            <SidebarItem
                                name="Playground"
                                icon={PlayCircle}
                                count="10"
                                isActive={activeTab === "Playground"}
                                onClick={() => setActiveTab("Playground")}
                            />
                            <SidebarItem
                                name="Test Suites"
                                icon={ClipboardCheck}
                                isActive={activeTab === "Test Suites"}
                                onClick={() => setActiveTab("Test Suites")}
                            />
                            <SidebarItem
                                name="Test Suites Execution"
                                icon={FileCheck2}
                                isActive={activeTab === "Test Suites Execution"}
                                onClick={() =>
                                    setActiveTab("Test Suites Execution")
                                }
                            />
                        </SidebarSection>

                        <SidebarSection title="MONITOR">
                            <SidebarItem
                                name="Data Lineage"
                                icon={Bot}
                                isActive={activeTab === "Data Lineage"}
                                onClick={() => setActiveTab("Data Lineage")}
                            />
                            <SidebarItem
                                name="Track Usage"
                                icon={LayoutPanelLeft}
                                isActive={activeTab === "Track Usage"}
                                onClick={() => setActiveTab("Track Usage")}
                            />
                            <SidebarItem
                                name="Metrics & Analytics"
                                icon={BarChart3}
                                isActive={activeTab === "Metrics & Analytics"}
                                onClick={() =>
                                    setActiveTab("Metrics & Analytics")
                                }
                            />
                        </SidebarSection>
                    </nav>
                </div>

                {/* Account Footer */}
                <div className="py-5 pr-5 pb-6 flex justify-between items-center border-t border-border-secondary bg-[#F9F9FB] sticky bottom-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full border border-border-secondary flex justify-center items-center text-[14px] font-semibold text-text-primary">
                            OR
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-text-primary leading-5">
                                Olivia Rhye
                            </span>
                            <span className="text-xs text-text-tertiary leading-4">
                                Super Admin
                            </span>
                        </div>
                    </div>
                    <button className="p-1.5 hover:bg-gray-100 rounded-md">
                        <ChevronDown className="w-4 h-4 text-text-muted" />
                    </button>
                </div>
            </aside>
        );
    }

    return (
        <aside className="w-[296px] shrink-0 h-full pl-5 pr-3 flex flex-col justify-between bg-[#F9F9FB] font-inter">
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Header */}
                <div className="pt-6 pb-4 flex flex-col gap-4">
                    <img
                        src="/logo_main.png"
                        alt="Kaya Logo"
                        className="w-[120px] h-[39px]"
                    />
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
                    <div className="w-full shadow-[0_0_0_1px_#E9EAEB_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)] rounded-lg bg-white overflow-hidden flex items-center justify-between py-2 px-3 gap-2 group cursor-pointer hover:border-border-primary transition-all">
                        <span className="text-sm font-semibold text-[#535862] font-encode overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0">
                            {displayWorkspaceName}
                        </span>
                        <img
                            src="/user-toggle.svg"
                            alt=""
                            className="w-[8px] h-[13px] shrink-0"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <SidebarItem
                            name="Workspace Overview"
                            icon={Building2}
                            isActive={activeTab === "Workspace Overview"}
                            onClick={() => {
                                setActiveTab("Workspace Overview");
                                router.push(`/${activeWorkspace}`);
                            }}
                        />
                        <button
                            className="w-full shadow-[0_1px_10px_rgba(0,0,0,0.1)] rounded-lg flex items-center justify-center py-2 px-3 gap-1 hover:opacity-90 transition-opacity active:scale-[0.98]"
                            style={{
                                backgroundImage: "url(/btn-gradient.svg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <Plus
                                className="w-4 h-4 text-white"
                                strokeWidth={3}
                            />
                            <span className="text-sm font-semibold text-white">
                                Create
                            </span>
                        </button>
                    </div>
                </div>

                {/* Navigation Chunks */}
                <nav className="flex-1 flex flex-col gap-8 pr-5 pb-8">
                    <SidebarSection title="MANAGE">
                        <SidebarItem
                            name="iFlows"
                            iconSrc="/sidebar-workflow.svg"
                            count="3/5"
                            isActive={activeTab === "iFlows"}
                            onClick={() => {
                                setActiveTab("iFlows");
                                router.push(`/${activeWorkspace}/iflows`);
                            }}
                        />
                        <SidebarItem
                            name="Workspace Agent"
                            iconSrc="/sidebar-bot.svg"
                            count="3"
                            isActive={activeTab === "Workspace Agent"}
                            onClick={() => {
                                setActiveTab("Workspace Agent");
                                router.push(`/${activeWorkspace}/agents`);
                            }}
                        />
                    </SidebarSection>

                    <SidebarSection title="SET UP">
                        <div className="flex flex-col gap-2">
                            <CollapsibleSection
                                title="Configurations"
                                icon={Settings}
                                defaultOpen
                            >
                                <VerticalTab
                                    label="Models"
                                    isActive={activeTab === "Models"}
                                    onClick={() => {
                                        setActiveTab("Models");
                                        router.push(
                                            `/${activeWorkspace}/models`,
                                        );
                                    }}
                                />
                                <VerticalTab
                                    label="Databases"
                                    isActive={activeTab === "Databases"}
                                    onClick={() => {
                                        setActiveTab("Databases");
                                        router.push(
                                            `/${activeWorkspace}/databases`,
                                        );
                                    }}
                                />
                                <VerticalTab
                                    label="Knowledge Sources"
                                    isActive={activeTab === "Knowledge Sources"}
                                    onClick={() => {
                                        setActiveTab("Knowledge Sources");
                                        router.push(
                                            `/${activeWorkspace}/knowledge-sources`,
                                        );
                                    }}
                                />
                                <VerticalTab
                                    label="Integrations"
                                    isActive={activeTab === "Integrations"}
                                    onClick={() => {
                                        setActiveTab("Integrations");
                                        router.push(
                                            `/${activeWorkspace}/integrations`,
                                        );
                                    }}
                                />
                            </CollapsibleSection>
                            <CollapsibleSection
                                title="Safety & Governance"
                                icon={ShieldCheck}
                            >
                                <VerticalTab
                                    label="Guardrails"
                                    isActive={activeTab === "Guardrails"}
                                    onClick={() => {
                                        setActiveTab("Guardrails");
                                        router.push(
                                            `/${activeWorkspace}/guardrails`,
                                        );
                                    }}
                                />
                                <VerticalTab
                                    label="Vaults & Secrets"
                                    isActive={activeTab === "Vaults & Secrets"}
                                    onClick={() => {
                                        setActiveTab("Vaults & Secrets");
                                        router.push(
                                            `/${activeWorkspace}/vaults-and-secrets`,
                                        );
                                    }}
                                />
                            </CollapsibleSection>
                            <CollapsibleSection
                                title="Workspace Settings"
                                icon={Globe}
                            >
                                <VerticalTab 
                                    label="Workspace Variable" 
                                    isActive={activeTab === "Workspace Variable"}
                                    onClick={() => {
                                        setActiveTab("Workspace Variable");
                                        router.push(
                                            `/${activeWorkspace}/workspace-variables`,
                                        );
                                    }}
                                />
                                <VerticalTab label="Webhook Configuration" />
                                <VerticalTab label="Workspace Intelligence Sources" />
                            </CollapsibleSection>
                            <CollapsibleSection
                                title="Custom Capabilities"
                                icon={Rocket}
                            >
                                <VerticalTab 
                                    label="Executable Functions" 
                                    isActive={activeTab === "Executable Functions"}
                                    onClick={() => {
                                        setActiveTab("Executable Functions");
                                        router.push(
                                            `/${activeWorkspace}/executable-functions`,
                                        );
                                    }}
                                />
                            </CollapsibleSection>
                        </div>
                    </SidebarSection>

                    <SidebarSection title="DEPLOY">
                        <SidebarItem
                            name="Pull from Registry"
                            iconSrc="/git.svg"
                            isActive={activeTab === "Pull from Registry"}
                            onClick={() => setActiveTab("Pull from Registry")}
                        />
                    </SidebarSection>

                    <SidebarSection title="MONITOR">
                        <SidebarItem
                            name="Track Usage"
                            iconSrc="/track.svg"
                            isActive={activeTab === "Track Usage"}
                            onClick={() => setActiveTab("Track Usage")}
                        />
                        <SidebarItem
                            name="Metrics & Analytics"
                            iconSrc="/metrics.svg"
                            isActive={activeTab === "Metrics & Analytics"}
                            onClick={() => setActiveTab("Metrics & Analytics")}
                        />
                    </SidebarSection>
                </nav>
            </div>

            {/* Account Footer */}
            <div className="py-5 pb-6 flex justify-between items-start border-t border-border-secondary bg-[#F9F9FB] sticky bottom-0">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 bg-[#F5F5F5] rounded-full border border-border-secondary flex justify-center items-center text-[16px] font-bold aspect-square"
                        style={{ padding: "8px 0", color: "#717680" }}
                    >
                        OR
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-text-primary leading-5">
                            Olivia Rhye
                        </span>
                        <span className="text-xs text-text-tertiary leading-4">
                            Super Admin
                        </span>
                    </div>
                </div>
                <button className="p-1.5 hover:bg-gray-100 rounded-md">
                    <img
                        src="/user-toggle.svg"
                        alt="Toggle"
                        width={9}
                        height={9}
                    />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
