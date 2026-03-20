"use client";

import React, { useState } from "react";
import styles from "./IFlowListingBody.module.css";
import { Plus, SlidersHorizontal, Search, LayoutGrid, Table2, Copy, Trash2, Pencil, ChevronsUpDown } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import CreateIFlowDrawer from "./CreateIFlowDrawer";

const mockIFlows = [
    { id: "invoice-processing", name: "Invoice Processing", status: "Published", agents: 9, lastModified: "Mar 17, 2026, 15:44", tags: ["Finance", "Automation", "AP"] },
    { id: "claims-triage", name: "Claims Triage", status: "Draft", agents: 5, lastModified: "Mar 18, 2026, 10:20", tags: ["Insurance", "Triage"] },
    { id: "customer-support", name: "Customer Support", status: "Published", agents: 12, lastModified: "Mar 19, 2026, 09:15", tags: ["Support", "CX", "Chat"] },
    { id: "data-extraction", name: "Data Extraction", status: "Draft", agents: 3, lastModified: "Mar 19, 2026, 11:30", tags: ["ETL", "Data"] },
];

const ITEMS_PER_PAGE = 3;

const IFlowListingBody = () => {
    const router = useRouter();
    const params = useParams();
    const workspaceId = params.workspaceId as string;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredIFlows = mockIFlows.filter((iflow) =>
        iflow.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.max(1, Math.ceil(filteredIFlows.length / ITEMS_PER_PAGE));
    const paginatedIFlows = filteredIFlows.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleViewIFlow = (iflowId: string) => {
        router.push(`/${workspaceId}/${iflowId}`);
    };

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
                                Learn more about iFlows
                            </div>
                            <div className={styles.supportingText}>
                                {`Text about learning the latest and greatest methodologies when creating iFlows and ability to get support from Kaya experts.`}
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
                                    <div className={styles.text2}>
                                        Learn more
                                    </div>
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
                                                <Image src="/sidebar-workflow.svg" alt="" width={23} height={21} className="w-[23px] h-[21px]" />
                                            </div>
                                            <h1 className="text-2xl font-semibold text-text-primary leading-8">iFlows</h1>
                                        </div>
                                        <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                                            Placeholder text about; iFlows live here
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-1 px-3.5 py-2.5 bg-[#005BB5] text-white rounded-lg text-sm font-semibold shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-[#004A96] transition-colors cursor-pointer">
                                        <Plus className="w-5 h-5" />
                                        <span>Create iFlow</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.actions3}>
                                <div className={styles.buttonsbutton4}></div>
                                <div className={styles.buttonsbutton5}></div>
                                <div className={styles.buttonsbutton5}></div>
                                <div className={styles.buttonsbutton7}></div>
                            </div>
                            <div className={styles.select}></div>
                        </div>
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
                            {mockIFlows.slice(0, 3).map((iflow) => (
                                <div
                                    key={iflow.id}
                                    className={styles.integrationCardDesktop}
                                >
                                    <div className={styles.content6}>
                                        <div
                                            className={styles.headingAndToggle}
                                        >
                                            <div
                                                className={
                                                    iflow.status === "Published"
                                                        ? styles.badge
                                                        : styles.badge2
                                                }
                                            >
                                                <div className={styles.text7}>
                                                    {iflow.status}
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.headingAndIcon
                                                }
                                            >
                                                <div
                                                    className={styles.iconWrap}
                                                >
                                                    <div
                                                        className={
                                                            styles.linear
                                                        }
                                                    ></div>
                                                </div>
                                                <div className={styles.heading}>
                                                    {iflow.name}
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.supportingText3
                                                }
                                            >
                                                This workflow handles {iflow.name.toLowerCase()} tasks.
                                            </div>
                                        </div>
                                        <div className={styles.cardMeta}>
                                            <span className={styles.cardMetaValue}><b>{iflow.agents}</b> Agents</span>
                                            <span className={styles.cardMetaDivider}>|</span>
                                            <span className={styles.cardMetaDate}>Last modified: {iflow.lastModified}</span>
                                        </div>
                                    </div>
                                    <div className={styles.sectionFooter}>
                                        <img
                                            className={styles.dividerIcon2}
                                            alt=""
                                        />
                                        <div className={styles.content7}>
                                            <div className={styles.actions4}>
                                                <button
                                                    className={styles.button}
                                                    onClick={() => handleViewIFlow(iflow.id)}
                                                >
                                                    <div
                                                        className={styles.text2}
                                                    >
                                                        View
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className={styles.pageHeaderParent}>
                    <div className={styles.allIFlowsToolbar}>
                        <div className={styles.text6}>All iFlows</div>
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
                                    placeholder="Search iFlows..."
                                    value={searchQuery}
                                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                />
                            </div>
                            <div className={styles.viewToggleGroup}>
                                <button
                                    className={viewMode === "grid" ? styles.viewToggleActive : styles.viewToggle}
                                    onClick={() => { setViewMode("grid"); setCurrentPage(1); }}
                                    title="Grid view"
                                >
                                    <LayoutGrid size={16} />
                                </button>
                                <button
                                    className={viewMode === "list" ? styles.viewToggleActive : styles.viewToggle}
                                    onClick={() => { setViewMode("list"); setCurrentPage(1); }}
                                    title="List view"
                                >
                                    <Table2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {viewMode === "grid" ? (
                        <div className={styles.allIFlowsGrid}>
                            {filteredIFlows.length === 0 && (
                                <div className={styles.emptyState}>No iFlows match your search.</div>
                            )}
                            {filteredIFlows.map((iflow) => (
                                <div key={iflow.id} className={styles.integrationCardDesktop}>
                                    <div className={styles.content6}>
                                        <div className={styles.headingAndToggle}>
                                            <div className={iflow.status === "Published" ? styles.badge : styles.badge2}>
                                                <div className={styles.text7}>{iflow.status}</div>
                                            </div>
                                            <div className={styles.headingAndIcon}>
                                                <div className={styles.iconWrap}>
                                                    <div className={styles.linear}></div>
                                                </div>
                                                <div className={styles.heading}>{iflow.name}</div>
                                            </div>
                                            <div className={styles.supportingText3}>
                                                This workflow handles {iflow.name.toLowerCase()} tasks.
                                            </div>
                                        </div>
                                        <div className={styles.cardMeta}>
                                            <span className={styles.cardMetaValue}><b>{iflow.agents}</b> Agents</span>
                                            <span className={styles.cardMetaDivider}>|</span>
                                            <span className={styles.cardMetaDate}>Last modified: {iflow.lastModified}</span>
                                        </div>
                                    </div>
                                    <div className={styles.sectionFooter}>
                                        <img className={styles.dividerIcon2} alt="" />
                                        <div className={styles.content7}>
                                            <div className={styles.actions4}>
                                                <button className={styles.button} onClick={() => handleViewIFlow(iflow.id)}>
                                                    <div className={styles.text2}>View</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.listTable}>
                            {/* Header */}
                            <div className={styles.listTableHeader}>
                                <div className={styles.listHeaderNameCol}>iFlow Name &amp; Description</div>
                                <div className={styles.listHeaderTagsCol}>
                                    Tags
                                    <ChevronsUpDown size={14} className={styles.listSortIcon} />
                                </div>
                                <div className={styles.listHeaderActionsCol}></div>
                            </div>

                            {/* Rows */}
                            {filteredIFlows.length === 0 ? (
                                <div className={styles.emptyState}>No iFlows match your search.</div>
                            ) : paginatedIFlows.map((iflow) => (
                                <div key={iflow.id} className={styles.listTableRow}>
                                    <div className={styles.listRowNameCol}>
                                        <div className={styles.listRowName} onClick={() => handleViewIFlow(iflow.id)}>
                                            {iflow.name}
                                        </div>
                                        <div className={styles.listRowDesc}>
                                            This workflow handles {iflow.name.toLowerCase()} tasks.
                                        </div>
                                    </div>
                                    <div className={styles.listRowTagsCol}>
                                        {iflow.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className={styles.listTag}>{tag}</span>
                                        ))}
                                        {iflow.tags.length > 3 && (
                                            <span className={styles.listTagMore}>+{iflow.tags.length - 3}</span>
                                        )}
                                    </div>
                                    <div className={styles.listRowActionsCol}>
                                        <button className={styles.listActionBtn} title="Duplicate">
                                            <Copy size={15} />
                                        </button>
                                        <button className={styles.listActionBtn} title="Delete">
                                            <Trash2 size={15} />
                                        </button>
                                        <button className={styles.listActionBtn} title="Edit" onClick={() => handleViewIFlow(iflow.id)}>
                                            <Pencil size={15} />
                                        </button>
                                    </div>
                                </div>
                            ))}

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
            <CreateIFlowDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </div>
    );
};

export default IFlowListingBody;
