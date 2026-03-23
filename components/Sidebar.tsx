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
  ChevronsDown,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";
import CreateIFlowDrawer from "./CreateIFlowDrawer";
import { SidebarUserProfileTrigger } from "./sidebar-user-profile-trigger";
import { useTheme } from "next-themes";

const ScrollCue = ({
  containerRef,
}: {
  containerRef: React.RefObject<any>;
}) => {
  const [show, setShow] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 20;
        const atTop = scrollTop <= 20;
        setShow(!atBottom || !atTop);
        setIsScrolledDown(atBottom && !atTop);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Initial check
      checkScroll();
      // Re-check on window resize
      window.addEventListener("resize", checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, [containerRef]);

  if (!show) return null;

  return (
    <div
      className="sticky bottom-4 z-50 flex justify-end pr-4 pointer-events-none"
      style={{ marginTop: "-48px" }}
    >
      <div className="group pointer-events-auto">
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-[#181D27] text-white text-xs font-semibold py-1.5 px-3 rounded-lg whitespace-nowrap shadow-lg">
          {isScrolledDown ? "Back to top" : "Continue scrolling"}
          <div className="absolute top-full right-4 w-2 h-2 bg-[#181D27] rotate-45 -translate-y-1" />
        </div>
        <button
          onClick={() => {
            if (isScrolledDown) {
              containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              containerRef.current?.scrollBy({ top: 100, behavior: "smooth" });
            }
          }}
          className="w-10 h-10 bg-[#181D27] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        >
          <ChevronsDown
            className={`w-5 h-5 text-white transition-transform duration-500 ${isScrolledDown ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

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
        <div className="mt-2 pt-0 px-3 pb-2 flex flex-col gap-[8px]">
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
  const { theme } = useTheme();
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
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const enterpriseNavRef = useRef<HTMLElement>(null);
  const agentNavRef = useRef<HTMLDivElement>(null);
  const iflowNavRef = useRef<HTMLDivElement>(null);
  const workspaceNavRef = useRef<HTMLDivElement>(null);

  const workspaces = [
    {
      id: "claims-operations-overview",
      name: "Claims Operations Overview",
    },
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
      setActiveTab("Playground");
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
    {
      name: "Insights",
      icon: TrendingUp,
      section: "ENTERPRISE OVERVIEW",
      disabled: true,
    },
    {
      name: "Licensing",
      icon: Layers,
      count: 10,
      section: "ADMIN",
      disabled: true,
    },
  ];

  const enterpriseSections = ["ENTERPRISE OVERVIEW", "ADMIN"];

  if (!activeWorkspace) {
    return (
      <aside className="w-[312px] shrink-0 h-full pl-5 pr-1 flex flex-col justify-between bg-sidebar-bg">
        <div className="pt-6">
          <img
            src={theme === "dark" ? "/logo_main_light.png" : "/logo_main.png"}
            alt="Kaya Logo"
            className="w-[120px] h-[39px]"
          />
        </div>

        {/* New Workspace Button */}
        <button
          className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundImage: "url(/btn-gradient.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: "32px 0",
          }}
        >
          <Plus className="w-5 h-5 text-white" />
          New Workspace
        </button>

        <nav
          ref={enterpriseNavRef}
          className="flex-1 flex flex-col gap-6 overflow-y-auto relative"
        >
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
          <ScrollCue containerRef={enterpriseNavRef} />
        </nav>

        {/* New Features Notification Card */}
        <div className="mx-0 mb-4 p-4 rounded-xl border border-border-secondary bg-white flex flex-col gap-3 dark:bg-[#0C0E12] dark:border-[#22262F]">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/featured-icon.svg" alt="" className="w-10 h-10" />
            </div>
            <button className="text-text-tertiary hover:text-text-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-semibold text-text-primary leading-5 dark:text-[#F7F7F7]">
              New features available!
            </div>
            <div className="text-sm text-text-tertiary leading-5 dark:text-[#94979C]">
              Check out the new configurations that we've just added to our
              setup options!
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-[#535862] hover:text-text-primary leading-5 dark:text-[#94979C]">
              Dismiss
            </button>
            <button className="text-sm font-semibold text-[#004A96] hover:text-[#003570] leading-5 dark:text-[#CECFD2]">
              Go to Setup!
            </button>
          </div>
        </div>

        <SidebarUserProfileTrigger />
      </aside>
    );
  }

  if (activeAgent) {
    return (
      <aside className="w-[312px] shrink-0 h-full pl-5 flex flex-col justify-between font-inter">
        <div
          ref={agentNavRef}
          className="flex-1 flex flex-col overflow-y-auto relative"
        >
          {/* Header */}
          <div className="pt-6 pb-[32px]">
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
            <div className="flex flex-col gap-2">
              <div
                className="w-full rounded-lg p-[2px] hover:opacity-90 transition-opacity active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 91, 181, 0.5) 35%, rgba(255, 87, 20, 0.5) 100%)",
                  boxShadow: "0 1px 10px 1px rgba(0, 0, 0, 0.10)",
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
              <SidebarItem
                name={displayAgentName || ""}
                iconSrc="/sidebar-bot.svg"
                isActive={true}
                onClick={() => {
                  router.push(
                    `/${activeWorkspace}/${activeIFlow}/${activeAgent}`,
                  );
                }}
              />
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
                  router.push(
                    `/${activeWorkspace}/agents/${activeAgent}/prompt-template`,
                  );
                }}
              />
              <SidebarItem
                name="Learning Records"
                icon={BookOpen}
                isActive={activeTab === "Learning Records"}
                onClick={() => {
                  setActiveTab("Learning Records");
                  router.push(
                    `/${activeWorkspace}/agents/${activeAgent}/learning-records`,
                  );
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
                onClick={() => {
                  setActiveTab("Metrics & Analytics");
                  router.push(
                    `/${activeWorkspace}/agents/${activeAgent}/metrics-and-analytics`,
                  );
                }}
              />
            </SidebarSection>
          </nav>
          <ScrollCue containerRef={agentNavRef} />
        </div>

        {/* Account Footer */}
        <SidebarUserProfileTrigger />
      </aside>
    );
  }

  if (activeIFlow) {
    return (
      <aside className="w-[312px] shrink-0 h-full pl-5 flex flex-col justify-between font-inter">
        <div
          ref={iflowNavRef}
          className="flex-1 flex flex-col overflow-y-auto relative"
        >
          {/* Header */}
          <div className="pt-6 pb-[32px]">
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
            <div className="flex flex-col gap-2">
              <div
                className="w-full rounded-lg p-[2px] hover:opacity-90 transition-opacity active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 91, 181, 0.5) 35%, rgba(255, 87, 20, 0.5) 100%)",
                  boxShadow: "0 1px 10px 1px rgba(0, 0, 0, 0.10)",
                }}
              >
                <button
                  className="w-full bg-white rounded-[6px] flex items-center justify-center py-2 px-3 gap-1"
                  onClick={() =>
                    activeIFlow &&
                    activeWorkspace &&
                    router.push(`/editor/${activeWorkspace}/${activeIFlow}`)
                  }
                >
                  <SquarePen
                    className="w-4 h-4 text-text-tertiary"
                    strokeWidth={3}
                  />
                  <span className="text-sm font-semibold text-text-tertiary">
                    Edit iFlow
                  </span>
                </button>
              </div>
              <SidebarItem
                name={displayIFlowName || ""}
                iconSrc="/sidebar-workflow.svg"
                isActive={true}
                onClick={() => {
                  router.push(`/${activeWorkspace}/${activeIFlow}`);
                }}
              />
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
                onClick={() => {
                  setActiveTab("Playground");
                  activeWorkspace &&
                    activeIFlow &&
                    router.push(
                      `/${activeWorkspace}/${activeIFlow}/playground`,
                    );
                }}
              />
              <SidebarItem
                name="Test Suites"
                icon={ClipboardCheck}
                isActive={activeTab === "Test Suites"}
                onClick={() => {
                  setActiveTab("Test Suites");
                  activeWorkspace &&
                    activeIFlow &&
                    router.push(
                      `/${activeWorkspace}/${activeIFlow}/test-suites`,
                    );
                }}
              />
              <SidebarItem
                name="Test Suites Execution"
                icon={FileCheck2}
                isActive={activeTab === "Test Suites Execution"}
                onClick={() => {
                  setActiveTab("Test Suites Execution");
                  activeWorkspace &&
                    activeIFlow &&
                    router.push(
                      `/${activeWorkspace}/${activeIFlow}/test-suites-execution`,
                    );
                }}
              />
            </SidebarSection>

            <SidebarSection title="MONITOR">
              <SidebarItem
                name="Data Lineage"
                iconSrc="/sidebar-bot.svg"
                isActive={activeTab === "Data Lineage"}
                onClick={() => {
                  setActiveTab("Data Lineage");
                  router.push(`/${activeWorkspace}/${activeIFlow}/lineage`);
                }}
              />
              <SidebarItem
                name="Track Usage"
                iconSrc="/track.svg"
                isActive={activeTab === "Track Usage"}
                onClick={() => {
                  setActiveTab("Track Usage");
                  router.push(`/${activeWorkspace}/${activeIFlow}/track-usage`);
                }}
              />
              <SidebarItem
                name="Metrics & Analytics"
                iconSrc="/metrics.svg"
                isActive={activeTab === "Metrics & Analytics"}
                onClick={() => {
                  setActiveTab("Metrics & Analytics");
                  activeWorkspace &&
                    activeIFlow &&
                    router.push(
                      `/${activeWorkspace}/${activeIFlow}/metrics-and-analytics`,
                    );
                }}
              />
            </SidebarSection>
          </nav>
          <ScrollCue containerRef={iflowNavRef} />
        </div>

        {/* Account Footer */}
        <SidebarUserProfileTrigger />
        <CreateIFlowDrawer
          isOpen={isCreateDrawerOpen}
          onClose={() => setIsCreateDrawerOpen(false)}
        />
      </aside>
    );
  }

  return (
    <aside className="w-[312px] shrink-0 h-full pl-5 pr-1 flex flex-col justify-between  font-inter">
      <div
        ref={workspaceNavRef}
        className="flex-1 flex flex-col overflow-y-auto relative"
      >
        {/* Header */}
        <div className="pt-6 pb-[32px]">
          <Link
            href="/"
            className="flex items-center gap-1 py-2 text-sm font-semibold text-text-tertiary hover:text-text-primary transition-colors pr-4"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Enterprise</span>
          </Link>
        </div>

        {/* Workspace Controls */}
        <div className="pr-5 flex flex-col gap-4 mb-[8px]">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setIsCreateDrawerOpen(true)}
              className="w-full shadow-[0_1px_10px_rgba(0,0,0,0.1)] rounded-lg flex items-center justify-center py-2 px-3 gap-1 hover:opacity-90 transition-opacity active:scale-[0.98]"
              style={{
                backgroundImage: "url(/btn-gradient.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Plus className="w-4 h-4 text-white" strokeWidth={3} />
              <span className="text-sm font-semibold text-white">
                Create iFlow
              </span>
            </button>
          </div>
        </div>

        {/* Navigation Chunks */}
        <nav className="flex-1 flex flex-col gap-8 pr-5 pb-8">
          <SidebarItem
            name="Workspace Overview"
            icon={Building2}
            isActive={activeTab === "Workspace Overview"}
            onClick={() => {
              setActiveTab("Workspace Overview");
              router.push(`/${activeWorkspace}`);
            }}
          />
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
                    router.push(`/${activeWorkspace}/models`);
                  }}
                />
                <VerticalTab
                  label="Databases"
                  isActive={activeTab === "Databases"}
                  onClick={() => {
                    setActiveTab("Databases");
                    router.push(`/${activeWorkspace}/databases`);
                  }}
                />
                <VerticalTab
                  label="Knowledge Sources"
                  isActive={activeTab === "Knowledge Sources"}
                  onClick={() => {
                    setActiveTab("Knowledge Sources");
                    router.push(`/${activeWorkspace}/knowledge-sources`);
                  }}
                />
                <VerticalTab
                  label="Integrations"
                  isActive={activeTab === "Integrations"}
                  onClick={() => {
                    setActiveTab("Integrations");
                    router.push(`/${activeWorkspace}/integrations`);
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
                    router.push(`/${activeWorkspace}/guardrails`);
                  }}
                />
                <VerticalTab
                  label="Vaults & Secrets"
                  isActive={activeTab === "Vaults & Secrets"}
                  onClick={() => {
                    setActiveTab("Vaults & Secrets");
                    router.push(`/${activeWorkspace}/vaults-and-secrets`);
                  }}
                />
              </CollapsibleSection>
              <CollapsibleSection title="Workspace Settings" icon={Globe}>
                <VerticalTab
                  label="Workspace Variable"
                  isActive={activeTab === "Workspace Variable"}
                  onClick={() => {
                    setActiveTab("Workspace Variable");
                    router.push(`/${activeWorkspace}/workspace-variables`);
                  }}
                />
                <VerticalTab label="Webhook Configuration" />
                <VerticalTab label="Workspace Intelligence Sources" />
              </CollapsibleSection>
              <CollapsibleSection title="Custom Capabilities" icon={Rocket}>
                <VerticalTab
                  label="Executable Functions"
                  isActive={activeTab === "Executable Functions"}
                  onClick={() => {
                    setActiveTab("Executable Functions");
                    router.push(`/${activeWorkspace}/executable-functions`);
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
                router.push(`/${activeWorkspace}/metrics-and-analytics`);
              }}
            />
          </SidebarSection>
        </nav>
        <ScrollCue containerRef={workspaceNavRef} />
      </div>

      {/* Account Footer */}
      <SidebarUserProfileTrigger />
      <CreateIFlowDrawer
        isOpen={isCreateDrawerOpen}
        onClose={() => setIsCreateDrawerOpen(false)}
      />
    </aside>
  );
};

export default Sidebar;
