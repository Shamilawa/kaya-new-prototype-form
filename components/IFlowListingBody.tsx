"use client";

import React, { useState } from "react";
import styles from "./IFlowListingBody.module.css";
import { Plus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import CreateIFlowDrawer from "./CreateIFlowDrawer";

const mockIFlows = [
    { id: "invoice-processing", name: "Invoice Processing", status: "Published", agents: 9, lastModified: "Mar 17, 2026, 15:44" },
    { id: "claims-triage", name: "Claims Triage", status: "Draft", agents: 5, lastModified: "Mar 18, 2026, 10:20" },
    { id: "customer-support", name: "Customer Support", status: "Published", agents: 12, lastModified: "Mar 19, 2026, 09:15" },
    { id: "data-extraction", name: "Data Extraction", status: "Draft", agents: 3, lastModified: "Mar 19, 2026, 11:30" },
];

const IFlowListingBody = () => {
    const router = useRouter();
    const params = useParams();
    const workspaceId = params.workspaceId as string;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                                    <div className={styles.actions2}>
                                        <button
                                            className={
                                                styles.buttonsbutton3
                                            }
                                            onClick={() => setIsDrawerOpen(true)}
                                        >
                                            <Plus
                                                className={styles.plusIcon}
                                            />
                                            <div
                                                className={
                                                    styles.textPadding
                                                }
                                            >
                                                <div
                                                    className={styles.text2}
                                                >
                                                    Create iFlow
                                                </div>
                                            </div>
                                        </button>
                                    </div>
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
                            {mockIFlows.map((iflow) => (
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
                                            <div
                                                className={
                                                    styles.headingAndToggleInner
                                                }
                                            >
                                                <div className={styles.parent}>
                                                    <b className={styles.b}>
                                                        {iflow.agents}
                                                    </b>
                                                    <div
                                                        className={
                                                            styles.agents
                                                        }
                                                    >
                                                        Agents
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.supportingText4}>
                                            Last modified: {iflow.lastModified}
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
                                                        View iFlow
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
                    <div className={styles.pageHeader2}>
                        <div className={styles.content5}>
                            <div className={styles.textAndSupportingText3}>
                                <div className={styles.text6}>Favorites</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experience2}>
                        {mockIFlows.slice(0, 2).map((iflow) => (
                            <div
                                key={iflow.id}
                                className={styles.integrationCardDesktop5}
                            >
                                <div className={styles.content6}>
                                    <div className={styles.headingAndToggle}>
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
                                        <div className={styles.headingAndIcon}>
                                            <div className={styles.iconWrap}>
                                                <div
                                                    className={styles.linear}
                                                ></div>
                                            </div>
                                            <div className={styles.heading}>
                                                {iflow.name}
                                            </div>
                                        </div>
                                        <div className={styles.supportingText3}>
                                            This workflow handles {iflow.name.toLowerCase()} tasks.
                                        </div>
                                        <div
                                            className={
                                                styles.headingAndToggleInner
                                            }
                                        >
                                            <div className={styles.parent}>
                                                <b className={styles.b}>{iflow.agents}</b>
                                                <div className={styles.agents}>
                                                    Agents
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.supportingText4}>
                                        Last modified: {iflow.lastModified}
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
                                                <div className={styles.text2}>
                                                    View iFlow
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.pageHeaderParent}>
                    <div className={styles.pageHeader2}>
                        <div className={styles.content5}>
                            <div className={styles.textAndSupportingText3}>
                                <div className={styles.text6}>All iFlows</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experience2}>
                        {mockIFlows.map((iflow) => (
                            <div
                                key={iflow.id}
                                className={styles.integrationCardDesktop5}
                            >
                                <div className={styles.content6}>
                                    <div className={styles.headingAndToggle}>
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
                                        <div className={styles.headingAndIcon}>
                                            <div className={styles.iconWrap}>
                                                <div
                                                    className={styles.linear}
                                                ></div>
                                            </div>
                                            <div className={styles.heading}>
                                                {iflow.name}
                                            </div>
                                        </div>
                                        <div className={styles.supportingText3}>
                                            This workflow handles {iflow.name.toLowerCase()} tasks.
                                        </div>
                                        <div
                                            className={
                                                styles.headingAndToggleInner
                                            }
                                        >
                                            <div className={styles.parent}>
                                                <b className={styles.b}>{iflow.agents}</b>
                                                <div className={styles.agents}>
                                                    Agents
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.supportingText4}>
                                        Last modified: {iflow.lastModified}
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
                                                <div className={styles.text2}>
                                                    View iFlow
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
            <CreateIFlowDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </div>
    );
};

export default IFlowListingBody;
