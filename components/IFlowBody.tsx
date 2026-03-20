"use client";

import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AgentMetricCardProps {
    title: string;
    value: React.ReactNode;
}

const AgentMetricCard: React.FC<AgentMetricCardProps> = ({ title, value }) => (
    <div className="shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-[#fdfdfd] border border-[#e9eaeb] overflow-hidden flex flex-col items-start h-[200px] w-[242px]">
        <div className="self-stretch flex items-center pt-3 pb-2 px-5 gap-4">
            <span className="text-sm font-semibold text-[#181d27] leading-5">
                {title}
            </span>
        </div>
        <div className="self-stretch flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-[#e9eaeb] flex flex-col items-start p-5">
            <span className="text-[30px] font-semibold text-[#181d27] leading-[38px]">
                {value}
            </span>
        </div>
    </div>
);

interface AgentCardProps {
    workspaceId: string;
    iflowId: string;
    title: string;
    description: string;
    status: "Published" | "Draft";
    agentType: string;
    model: string;
    lastModified: string;
}

const AgentCard: React.FC<AgentCardProps> = ({
    workspaceId,
    iflowId,
    title,
    description,
    status,
    agentType,
    model,
    lastModified,
}) => {
    const agentId = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

    return (
    <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-[#fdfdfd] border border-[#e9eaeb] overflow-hidden flex flex-col items-start min-w-[320px]">
        <div className="self-stretch flex flex-col items-start pt-4 px-5 pb-5 gap-5">
            <div className="self-stretch flex flex-col gap-2">
                <div className="flex items-center justify-between mb-[10px]">
                    <div
                        className={`px-2 py-0.5 rounded-md text-xs font-medium border ${
                            status === "Published"
                                ? "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]"
                                : "bg-[#FAFAFA] text-text-tertiary border-border-secondary"
                        }`}
                    >
                        {status}
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-text-primary leading-6">
                        {title}
                    </h3>
                    <p className="text-sm text-text-tertiary leading-5">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-5 w-full">
                <div className="text-sm font-medium text-text-tertiary leading-5 flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-1 justify-between">
                        <span className="text-[#535862] font-[400]">Agent Type: </span>
                        <span className="font-[600] text-text-secondary">
                            {agentType}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-[#535862] font-[400]">Model: </span>
                        <span className="font-[700] text-text-secondary">
                            {model}
                        </span>
                    </div>
                </div>
                <div className="text-sm font-medium text-[#717680] leading-5 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <span className="text-[#535862] font-[400]">Last modified: </span>
                        <span className="font-[600] text-[#535862]">
                            {lastModified}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch py-4 px-6 flex justify-end pt-0">
            <Link 
                href={`/${workspaceId}/${iflowId}/${agentId}`}
                className="px-4 py-2 text-sm font-semibold text-[#414651] bg-white border border-border-secondary rounded-lg shadow-[0_1px_2px_rgba(10,13,18,0.05)] hover:bg-gray-50 transition-colors"
            >
                View
            </Link>
        </div>
    </div>
);
};

interface IFlowBodyProps {
    workspaceId: string;
    iflowId: string;
    iflowName: string;
}

const IFlowBody: React.FC<IFlowBodyProps> = ({ workspaceId, iflowId, iflowName }) => {
    const filters = ["12 months", "30 days", "7 days", "24 hours"];

    return (
        <div className="w-full flex flex-col items-start gap-8 font-inter bg-white py-6 ">
            {/* Header Section */}
            <header className="self-stretch flex flex-col px-4 gap-5">
                <div className="self-stretch flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px]">
                            <Image src="/card-workflow.svg" alt="" width={23} height={21} className="w-[23px] h-[21px]" />
                        </div>
                        <h1 className="text-2xl font-semibold text-text-primary leading-8">
                            {iflowName}
                        </h1>
                    </div>
                    <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                        This workflow handles invoice processing tasks.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                    <div className="flex shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-lg border border-border-secondary overflow-hidden">
                        {filters.map((filter, i) => (
                            <button
                                key={filter}
                                className={`px-4 py-2 text-sm font-semibold border-r border-border-secondary last:border-r-0 transition-colors ${
                                    i === 0
                                        ? "bg-[#FAFAFA] text-[#252B37]"
                                        : "bg-white text-text-secondary hover:bg-gray-50"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-border-secondary shadow-sm text-sm font-semibold text-[#717680] hover:bg-gray-50">
                        <Calendar className="w-5 h-5 text-[#717680]" />
                        <span>Select dates</span>
                    </button>
                </div>
            </header>

            {/* Metrics Section */}
            <section className="self-stretch px-4 flex flex-wrap gap-4">
                <AgentMetricCard
                    title="Agents"
                    value={
                        <>
                            <span>8 </span>
                            <span className="text-xl font-medium text-text-tertiary font-encode">
                                used
                            </span>
                        </>
                    }
                />
                <AgentMetricCard title="HITL Enabled" value="1" />
            </section>

            {/* Recently Modified Section */}
            <section className="self-stretch px-4 flex flex-col gap-4 mt-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text[#181D27] font-encode">
                        Recently modified Agent
                    </h2>
                    <button className="flex items-center gap-1 text-sm font-semibold text-[#004A96] hover:text-text-primary">
                        <span>View all Agents</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex flex-wrap gap-6 pt-2">
                    <AgentCard
                        workspaceId={workspaceId}
                        iflowId={iflowId}
                        title="Invoice Processing Bot"
                        description="This agent handles invoice processing tasks."
                        status="Published"
                        agentType="Triage"
                        model="GPT-4"
                        lastModified="Mar 17, 2026, 15:44"
                    />
                    <AgentCard
                        workspaceId={workspaceId}
                        iflowId={iflowId}
                        title="Invoice Processing Bot"
                        description="This workflow handles invoice processing tasks."
                        status="Draft"
                        agentType="Triage"
                        model="GPT-4"
                        lastModified="Mar 17, 2026, 15:44"
                    />
                     <AgentCard
                        workspaceId={workspaceId}
                        iflowId={iflowId}
                        title="Invoice Processing Bot"
                        description="This workflow handles invoice processing tasks."
                        status="Draft"
                        agentType="Triage"
                        model="GPT-4"
                        lastModified="Mar 17, 2026, 15:44"
                    />
                </div>
            </section>
        </div>
    );
};

export default IFlowBody;
