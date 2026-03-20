"use client";

import React, { useState, useRef, useEffect } from "react";
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
    Globe,
    PlayCircle,
    ClipboardCheck,
    FileCheck2,
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
        className={`w-full flex items-center px-6 text-sm font-medium text-left border-l-2 transition-colors ${
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
    const [isWorkspaceDropdownOpen, setIsWorkspaceDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const workspaces = [
        { id: "claims-operations-overview", name: "Claims Operations Overview" },
        { id: "hr-automation", name: "HR Automation" },
        { id: "telecom-ops", name: "TelecomOps" },
        { id: "healthfirst", name: "Healthfirst" },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsWorkspaceDropdownOpen(false);
            }
        };

        if (isWorkspaceDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isWorkspaceDropdownOpen]);

    // Update active tab when URL parameters change
    React.useEffect(() => {
        if (pathname.includes("/track-usage")) {
            setActiveTab("Track Usage");
        } else if (pathname.includes("/metrics-and-analytics")) {
            setActiveTab("Metrics & Analytics");
        } else if (pathname.includes("/iflows")) {
            setActiveTab("iFlows");
        } else if (pathname.includes("/learning-records")) {
            setActiveTab("Learning Records");
        } else if (pathname.includes("/playground")) {
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
        } else if (pathname.includes("/registry")) {
            setActiveTab("Pull from Registry");
        } else if (pathname.includes("/lineage")) {
            setActiveTab("Data Lineage");
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
        { name: "Insights", icon: TrendingUp, section: "ENTERPRISE OVERVIEW", disabled: true },
        { name: "Licensing", icon: Layers, count: 10, section: "ADMIN", disabled: true },
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
                                        disabled={item.disabled}
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
                        <div className="relative" ref={dropdownRef}>
                            <div
                                className="w-full shadow-[0_0_0_1px_#E9EAEB_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)] rounded-lg bg-white overflow-hidden flex items-center justify-between py-2 px-3 gap-2 group cursor-pointer hover:border-border-primary transition-all"
                                role="button"
                                tabIndex={0}
                                onClick={() =>
                                    setIsWorkspaceDropdownOpen(
                                        !isWorkspaceDropdownOpen,
                                    )
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        setIsWorkspaceDropdownOpen(
                                            !isWorkspaceDropdownOpen,
                                        );
                                    }
                                }}
                            >
                                <span className="text-sm font-semibold text-text-tertiary font-encode overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0">
                                    {displayWorkspaceName}
                                </span>
                                <img
                                    src="/user-toggle.svg"
                                    alt=""
                                    className={`w-[8px] h-[13px] shrink-0 transition-transform ${
                                        isWorkspaceDropdownOpen
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>

                            {isWorkspaceDropdownOpen && (
                                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-border-secondary rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] z-50 py-1">
                                    {workspaces.map((ws) => (
                                        <button
                                            key={ws.id}
                                            className="w-full text-left px-3 py-2 text-sm hover:bg-[#F9F9FB] transition-colors"
                                            onClick={() => {
                                                setIsWorkspaceDropdownOpen(
                                                    false,
                                                );
                                                router.push(`/${ws.id}`);
                                            }}
                                        >
                                            <span
                                                className={
                                                    activeWorkspace === ws.id
                                                        ? "font-semibold text-brand-orange"
                                                        : "text-text-tertiary"
                                                }
                                            >
                                                {ws.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <SidebarItem
                                name={displayAgentName || ''}
                                iconSrc="/sidebar-bot.svg"
                                isActive={true}
                                onClick={() => {
                                    router.push(`/${activeWorkspace}/${activeIFlow}/${activeAgent}`);
                                }}
                            />
                            <div
                                className="w-full rounded-lg p-[2px] hover:opacity-90 transition-opacity active:scale-[0.98]"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(0, 91, 181, 0.5) 35%, rgba(255, 87, 20, 0.5) 100%)",
                                    boxShadow:
                                        "0 1px 10px 1px rgba(0, 0, 0, 0.20)",
                                }}
                            >
                                <button className="w-full bg-white rounded-[6px] flex items-center justify-center py-2 px-3 gap-1">
                                    <SquarePen
                                        className="w-4 h-4 text-text-tertiary"
                                        strokeWidth={3}
                                    />
                                    <span className="text-sm font-semibold text-text-tertiary">
                                        Edit Agent
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Agent Navigation */}
                    <nav className="flex-1 flex flex-col gap-8 pr-5 pb-8">
                        <SidebarSection title="MANAGE">
                            <SidebarItem
                                name="Prompt Template"
                                icon={ScrollText}
                                isActive={activeTab === "Prompt Template"}
                                onClick={() => {
                                    setActiveTab("Prompt Template");
                                    router.push(`/${activeWorkspace}/agents/${activeAgent}/prompt-template`);
                                }}
                            />
                            <SidebarItem
                                name="Learning Records"
                                icon={BookOpen}
                                isActive={activeTab === "Learning Records"}
                                onClick={() => {
                                    setActiveTab("Learning Records");
                                    router.push(`/${activeWorkspace}/agents/${activeAgent}/learning-records`);
                                }}
                            />
                        </SidebarSection>

                        <SidebarSection title="MONITOR">
                            <SidebarItem
                                name="Track Usage"
                                iconSrc="/track.svg"
                                isActive={activeTab === "Track Usage"}
                                onClick={() => {
                                    setActiveTab("Track Usage");
                                    router.push(
                                        `/${activeWorkspace}/agents/${activeAgent}/track-usage`,
                                    );
                                }}
                            />
                            <SidebarItem
                                name="Metrics & Analytics"
                                iconSrc="/metrics.svg"
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
                        <div className="relative" ref={dropdownRef}>
                            <div
                                className="w-full shadow-[0_0_0_1px_#E9EAEB_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)] rounded-lg bg-white overflow-hidden flex items-center justify-between py-2 px-3 gap-2 group cursor-pointer hover:border-border-primary transition-all"
                                role="button"
                                tabIndex={0}
                                onClick={() =>
                                    setIsWorkspaceDropdownOpen(
                                        !isWorkspaceDropdownOpen,
                                    )
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        setIsWorkspaceDropdownOpen(
                                            !isWorkspaceDropdownOpen,
                                        );
                                    }
                                }}
                            >
                                <span className="text-sm font-semibold text-text-tertiary font-encode overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0">
                                    {displayWorkspaceName}
                                </span>
                                <img
                                    src="/user-toggle.svg"
                                    alt=""
                                    className={`w-[8px] h-[13px] shrink-0 transition-transform ${
                                        isWorkspaceDropdownOpen
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>

                            {isWorkspaceDropdownOpen && (
                                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-border-secondary rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] z-50 py-1">
                                    {workspaces.map((ws) => (
                                        <button
                                            key={ws.id}
                                            className="w-full text-left px-3 py-2 text-sm hover:bg-[#F9F9FB] transition-colors"
                                            onClick={() => {
                                                setIsWorkspaceDropdownOpen(
                                                    false,
                                                );
                                                router.push(`/${ws.id}`);
                                            }}
                                        >
                                            <span
                                                className={
                                                    activeWorkspace === ws.id
                                                        ? "font-semibold text-brand-orange"
                                                        : "text-text-tertiary"
                                                }
                                            >
                                                {ws.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <SidebarItem
                                name={displayIFlowName || ""}
                                iconSrc="/sidebar-workflow.svg"
                                isActive={true}
                                onClick={() => {
                                    router.push(`/${activeWorkspace}/${activeIFlow}`);
                                }}
                            />
                            <div
                                className="w-full rounded-lg p-[2px] hover:opacity-90 transition-opacity active:scale-[0.98]"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(0, 91, 181, 0.5) 35%, rgba(255, 87, 20, 0.5) 100%)",
                                    boxShadow:
                                        "0 1px 10px 1px rgba(0, 0, 0, 0.20)",
                                }}
                            >
                                <button className="w-full bg-white rounded-[6px] flex items-center justify-center py-2 px-3 gap-1">
                                    <SquarePen
                                        className="w-4 h-4 text-text-tertiary"
                                        strokeWidth={3}
                                    />
                                    <span className="text-sm font-semibold text-text-tertiary">
                                        Edit iFlow
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* iFlow Navigation */}
                    <nav className="flex-1 flex flex-col gap-8 pr-5 pb-8">
                        <SidebarSection title="MANAGE">
                            <SidebarItem
                                name="Agents"
                                iconSrc="/sidebar-bot.svg"
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
                                iconSrc="/sidebar-bot.svg"
                                isActive={activeTab === "Data Lineage"}
                                onClick={() => {
                                    setActiveTab("Data Lineage");
                                    router.push(
                                        `/${activeWorkspace}/${activeIFlow}/lineage`,
                                    );
                                }}
                            />
                            <SidebarItem
                                name="Track Usage"
                                iconSrc="/track.svg"
                                isActive={activeTab === "Track Usage"}
                                onClick={() => {
                                    setActiveTab("Track Usage");
                                    router.push(
                                        `/${activeWorkspace}/${activeIFlow}/track-usage`,
                                    );
                                }}
                            />
                            <SidebarItem
                                name="Metrics & Analytics"
                                iconSrc="/metrics.svg"
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
                    <div className="relative" ref={dropdownRef}>
                        <div
                            className="w-full shadow-[0_0_0_1px_#E9EAEB_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)] rounded-lg bg-white overflow-hidden flex items-center justify-between py-2 px-3 gap-2 group cursor-pointer hover:border-border-primary transition-all"
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                                setIsWorkspaceDropdownOpen(
                                    !isWorkspaceDropdownOpen,
                                )
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    setIsWorkspaceDropdownOpen(
                                        !isWorkspaceDropdownOpen,
                                    );
                                }
                            }}
                        >
                            <span className="text-sm font-semibold text-text-tertiary font-encode overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0">
                                {displayWorkspaceName}
                            </span>
                            <img
                                src="/user-toggle.svg"
                                alt=""
                                className={`w-[8px] h-[13px] shrink-0 transition-transform ${
                                    isWorkspaceDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                        </div>

                        {isWorkspaceDropdownOpen && (
                            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-border-secondary rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] z-50 py-1">
                                {workspaces.map((ws) => (
                                    <button
                                        key={ws.id}
                                        className="w-full text-left px-3 py-2 text-sm hover:bg-[#F9F9FB] transition-colors"
                                        onClick={() => {
                                            setIsWorkspaceDropdownOpen(false);
                                            router.push(`/${ws.id}`);
                                        }}
                                    >
                                        <span
                                            className={
                                                activeWorkspace === ws.id
                                                    ? "font-semibold text-brand-orange"
                                                    : "text-text-tertiary"
                                            }
                                        >
                                            {ws.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}
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
                                    isActive={
                                        activeTab === "Workspace Variable"
                                    }
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
                                    isActive={
                                        activeTab === "Executable Functions"
                                    }
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
                            onClick={() => {
                                setActiveTab("Pull from Registry");
                                router.push(`/${activeWorkspace}/registry`);
                            }}
                        />
                    </SidebarSection>

                    <SidebarSection title="MONITOR">
                        <SidebarItem
                            name="Track Usage"
                            iconSrc="/track.svg"
                            isActive={activeTab === "Track Usage"}
                            onClick={() => {
                                setActiveTab("Track Usage");
                                router.push(`/${activeWorkspace}/track-usage`);
                            }}
                        />
                        <SidebarItem
                            name="Metrics & Analytics"
                            iconSrc="/metrics.svg"
                            isActive={activeTab === "Metrics & Analytics"}
                            onClick={() => {
                                setActiveTab("Metrics & Analytics");
                                router.push(
                                    `/${activeWorkspace}/metrics-and-analytics`,
                                );
                            }}
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
