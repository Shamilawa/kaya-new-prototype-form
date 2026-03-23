import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import CreateConfigurationDrawer from "./CreateConfigurationDrawer";
import styles from "./WorkspaceAgentBody.module.css";
import {
  Plus,
  Bot,
  SlidersHorizontal,
  Search,
  LayoutGrid,
  Table2,
  Copy,
  Trash2,
  Pencil,
  ChevronsUpDown,
} from "lucide-react";

const mockAgents = [
  {
    id: "invoice-bot",
    name: "Invoice Processing Bot",
    status: "Published",
    agentType: "Triage",
    model: "GPT-4",
    lastModified: "Mar 17, 2026, 15:44",
    tags: ["Finance", "AP", "Automation"],
  },
  {
    id: "claims-bot",
    name: "Claims Triage Bot",
    status: "Draft",
    agentType: "Classifier",
    model: "Claude 3",
    lastModified: "Mar 18, 2026, 10:20",
    tags: ["Insurance", "Triage"],
  },
  {
    id: "support-bot",
    name: "Customer Support Bot",
    status: "Published",
    agentType: "Conversational",
    model: "GPT-4",
    lastModified: "Mar 19, 2026, 09:15",
    tags: ["Support", "CX", "Chat"],
  },
  {
    id: "extraction-bot",
    name: "Data Extraction Bot",
    status: "Draft",
    agentType: "Extractor",
    model: "Claude 3",
    lastModified: "Mar 19, 2026, 11:30",
    tags: ["ETL", "Data"],
  },
  {
    id: "onboarding-bot",
    name: "Onboarding Assistant",
    status: "Published",
    agentType: "Conversational",
    model: "GPT-4o",
    lastModified: "Mar 20, 2026, 08:00",
    tags: ["HR", "Onboarding"],
  },
];

const ITEMS_PER_PAGE = 3;

const WorkspaceAgentBody = () => {
  const router = useRouter();
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredAgents = mockAgents.filter((agent) =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAgents.length / ITEMS_PER_PAGE),
  );
  const paginatedAgents = filteredAgents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className={styles.inlineCtaParent}>
      <div className={styles.inlineCta}>
        <div className={styles.imageWrap}>
          <div className={styles.image}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.content2}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.text}>
                Learn more about Workspace Agents
              </div>
              <div className={styles.supportingText}>
                {`Text about learning best practices when setting up Workspace Agents and ability to get support from Kaya experts.`}
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.buttonsbutton}>
                <div className={styles.textPadding}>
                  <div className={styles.text2}>Dismiss</div>
                </div>
              </div>
              <div className={styles.buttonsbutton2}>
                <div className={styles.textPadding}>
                  <div className={styles.text2}>Learn more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerSectionParent}>
        <div className={styles.headerSection}>
          <div className={styles.container}>
            <div className={styles.imageWrap2}>
              <div className={styles.image2}></div>
            </div>
            <div className={styles.content3}>
              <div className={styles.breadcrumbs}></div>
              <div className={styles.container2}>
                <div className="flex items-center justify-between flex-wrap gap-5 w-full">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px]">
                        <Bot className="w-[23px] h-[21px] text-[#FF5714]" />
                      </div>
                      <h1 className="text-2xl font-semibold text-text-primary leading-8">
                        Workspace Agents
                      </h1>
                    </div>
                    <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                      Placeholder text about; Workspace Agents live here
                    </p>
                  </div>
                  <button 
                    className="flex items-center gap-1 px-3.5 py-2.5 bg-[#005BB5] text-white rounded-lg text-sm font-semibold shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-[#004A96] transition-colors cursor-pointer"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    <Plus className="w-5 h-5" />
                    <span>Create Workspace Agent</span>
                  </button>
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" />
          </div>
        </div>

        <div className={styles.pageHeaderParent}>
          <div className={styles.pageHeader2}>
            <div className={styles.content5}>
              <div className={styles.textAndSupportingText3}>
                <div className={styles.text6}>Recent</div>
              </div>
            </div>
          </div>
          <div className={styles.experienceWrapper}>
            <div className={styles.experience}>
              {mockAgents.slice(0, 3).map((agent) => (
                <div key={agent.id} className={`${styles.flatCard} p-0!`}>
                  <div className="p-4">
                    <div
                      className={`px-2 py-0.5 rounded-md text-xs font-medium border w-fit  mb-[10px] ${
                        agent.status === "Published"
                          ? "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]"
                          : "bg-[#FAFAFA] text-text-tertiary border-border-secondary"
                      }`}
                    >
                      <div className={styles.text7}>{agent.status}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-base font-semibold text-[#181d27] leading-6">
                        {agent.name}
                      </div>
                      <div className="text-sm text-[#414651] leading-5">
                        This agent handles {agent.name.toLowerCase()} tasks.
                      </div>
                    </div>
                    <div
                      className={`${styles.flatCardMeta} w-full flex items-center justify-between my-[20px]`}
                    >
                      <span>
                        Agent Type:{" "}
                        <b className="font-[600] text-text-tertiary">
                          {agent.agentType}
                        </b>
                      </span>

                      <span>
                        Model:{" "}
                        <b className="font-[600] text-text-tertiary">
                          {agent.model}
                        </b>
                      </span>
                    </div>
                    <div className="text-sm text-[#717680]">
                      Last modified:{" "}
                      <b className="font-[600] text-text-tertiary">
                        {agent.lastModified}
                      </b>
                    </div>
                  </div>
                  <div className={`${styles.flatCardFooter} p-4! pt-0!`}>
                    <button 
                      className="px-3.5 py-1.5 border border-[#d5d7da] rounded-lg text-sm font-medium text-[#414651] bg-white hover:bg-gray-50 cursor-pointer"
                      onClick={() => router.push(`/${params.workspaceId}/undefined/${agent.id}`)}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.pageHeaderParent}>
          <div className={styles.allAgentsToolbar}>
            <div className={styles.text6}>All Workspace Agents</div>
            <div className={styles.toolbarActions}>
              <button className={styles.toolbarButton}>
                <SlidersHorizontal className={styles.toolbarIcon} />
                Filters
              </button>
              <div className={styles.searchWrapper}>
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search agents..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
              <div className={styles.viewToggleGroup}>
                <button
                  className={
                    viewMode === "grid"
                      ? styles.viewToggleActive
                      : styles.viewToggle
                  }
                  onClick={() => {
                    setViewMode("grid");
                    setCurrentPage(1);
                  }}
                  title="Grid view"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  className={
                    viewMode === "list"
                      ? styles.viewToggleActive
                      : styles.viewToggle
                  }
                  onClick={() => {
                    setViewMode("list");
                    setCurrentPage(1);
                  }}
                  title="List view"
                >
                  <Table2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className={styles.allAgentsGrid}>
              {filteredAgents.length === 0 && (
                <div className={styles.emptyState}>
                  No agents match your search.
                </div>
              )}
              {filteredAgents.map((agent) => (
                <div key={agent.id} className={`${styles.flatCard} p-0!`}>
                  <div className="p-4">
                    <div
                      className={`px-2 py-0.5 rounded-md text-xs font-medium border w-fit mb-[10px] ${
                        agent.status === "Published"
                          ? "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]"
                          : "bg-[#FAFAFA] text-text-tertiary border-border-secondary"
                      }`}
                    >
                      <div className={styles.text7}>{agent.status}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-base font-semibold text-[#181d27] leading-6">
                        {agent.name}
                      </div>
                      <div className="text-sm text-[#414651] leading-5">
                        This agent handles {agent.name.toLowerCase()} tasks.
                      </div>
                    </div>
                    <div
                      className={`${styles.flatCardMeta} w-full flex items-center justify-between my-[20px]`}
                    >
                      <span>
                        Agent Type:{" "}
                        <b className="font-[600] text-text-tertiary">
                          {agent.agentType}
                        </b>
                      </span>

                      <span>
                        Model:{" "}
                        <b className="font-[600] text-text-tertiary">
                          {agent.model}
                        </b>
                      </span>
                    </div>
                    <div className="text-sm text-[#717680]">
                      Last modified:{" "}
                      <b className="font-[600] text-text-tertiary">
                        {agent.lastModified}
                      </b>
                    </div>
                  </div>
                  <div className={`${styles.flatCardFooter} p-4! pt-0!`}>
                    <button 
                      className="px-3.5 py-1.5 border border-[#d5d7da] rounded-lg text-sm font-medium text-[#414651] bg-white hover:bg-gray-50 cursor-pointer"
                      onClick={() => router.push(`/${params.workspaceId}/undefined/${agent.id}`)}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.listTable}>
              {/* Header */}
              <div className={styles.listTableHeader}>
                <div className={styles.listHeaderNameCol}>
                  Agent Name &amp; Description
                </div>
                <div className={styles.listHeaderTagsCol}>
                  Tags
                  <ChevronsUpDown size={14} className={styles.listSortIcon} />
                </div>
                <div className={styles.listHeaderActionsCol}></div>
              </div>

              {/* Rows */}
              {filteredAgents.length === 0 ? (
                <div className={styles.emptyState}>
                  No agents match your search.
                </div>
              ) : (
                paginatedAgents.map((agent) => (
                  <div key={agent.id} className={styles.listTableRow}>
                    <div className={styles.listRowNameCol}>
                      <div className={styles.listRowName}>{agent.name}</div>
                      <div className={styles.listRowDesc}>
                        This agent handles {agent.name.toLowerCase()} tasks.
                      </div>
                    </div>
                    <div className={styles.listRowTagsCol}>
                      {agent.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.listTag}>
                          {tag}
                        </span>
                      ))}
                      {agent.tags.length > 3 && (
                        <span className={styles.listTagMore}>
                          +{agent.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className={styles.listRowActionsCol}>
                      <button
                        className={styles.listActionBtn}
                        title="Duplicate"
                      >
                        <Copy size={15} />
                      </button>
                      <button className={styles.listActionBtn} title="Delete">
                        <Trash2 size={15} />
                      </button>
                      <button className={styles.listActionBtn} title="Edit">
                        <Pencil size={15} />
                      </button>
                    </div>
                  </div>
                ))
              )}

              {/* Pagination */}
              <div className={styles.listPagination}>
                <span className={styles.listPaginationInfo}>
                  Page {currentPage} of {totalPages}
                </span>
                <div className={styles.listPaginationButtons}>
                  <button
                    className={styles.paginationBtn}
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                  >
                    Previous
                  </button>
                  <button
                    className={styles.paginationBtn}
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <CreateConfigurationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Create Workspace Agent"
        description="Configure your new Workspace Agent settings."
      />
    </div>
  );
};

export default WorkspaceAgentBody;
