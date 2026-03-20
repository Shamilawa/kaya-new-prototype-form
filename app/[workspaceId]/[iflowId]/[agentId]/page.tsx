"use client";

import React from "react";
import { useParams } from "next/navigation";
import { 
    Bot, Calendar
} from "lucide-react";

interface MetricCardProps {
    label: string;
    value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value }) => (
    <div className="w-[242px] h-[200px] shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-[#fdfdfd] border border-[#e9eaeb] overflow-hidden flex flex-col items-start transition-all hover:border-border-primary">
        <div className="self-stretch flex items-center pt-3 pb-2 px-5 gap-4">
            <span className="flex-1 text-sm font-semibold text-[#181d27] leading-5">{label}</span>
        </div>
        <div className="self-stretch flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-[#e9eaeb] flex flex-col items-start p-5">
            <span className="text-[30px] font-semibold text-[#181d27] leading-[38px]">{value}</span>
        </div>
    </div>
);

interface SetupRowProps {
    label: string;
    value: string;
}

const SetupRow: React.FC<SetupRowProps> = ({ label, value }) => (
    <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between px-3 h-10">
            <div className="flex flex-col items-start gap-1">
                <span className="text-sm font-semibold text-[#181d27] leading-5">{label}</span>
                <span className="text-sm text-[#535862] leading-5">{value}</span>
            </div>
            <button className="flex items-center justify-center text-sm font-semibold text-[#535862] hover:text-[#181d27] transition-colors cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 border border-transparent hover:border-border-secondary">
                View
            </button>
        </div>
        <div className="w-full h-px bg-[#e9eaeb]" />
    </div>
);

export default function AgentDetailPage() {
    const params = useParams();
    const agentId = params.agentId as string;
    
    const displayAgentName = agentId
        ? agentId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "Invoice Processing Bot";

    const timeFilters = ["12 months", "30 days", "7 days", "24 hours"];

    return (
        <div className="w-full h-full flex flex-col gap-8 py-6 font-inter bg-white rounded-xl overflow-y-auto">
            <div className="flex flex-col gap-8 px-4">
                {/* Header Section */}
                <div className="w-full flex flex-col items-start gap-5 max-w-[1280px]">
                    <div className="w-full flex flex-col items-start gap-5">
                        <div className="w-full flex flex-col items-start gap-1 max-w-[640px]">
                            <div className="flex items-center gap-2 self-stretch">
                                <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px]">
                                    <Bot className="w-[23px] h-[21px] text-[#FF5714]" />
                                </div>
                                <h1 className="flex-1 text-2xl font-semibold text-text-primary leading-8">{displayAgentName}</h1>
                            </div>
                            <p className="text-base text-text-tertiary leading-6 self-stretch">This agent handles invoice processing tasks.</p>
                        </div>
                    </div>
                </div>

                {/* Tabs and Filters */}
                <div className="w-full flex items-start justify-between gap-5">
                    <div className="flex items-start shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] rounded-lg border border-[#d5d7da] overflow-hidden bg-white">
                        {timeFilters.map((filter, idx) => (
                            <button 
                                key={filter}
                                className={`px-4 py-2 text-sm font-semibold min-h-[40px] flex items-center justify-center transition-colors
                                    ${idx === 0 ? "bg-[#fafafa] text-[#252b37]" : "bg-white text-[#414651] hover:bg-gray-50"}
                                    ${idx < timeFilters.length - 1 ? "border-r border-[#d5d7da]" : ""}
                                `}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center">
                        <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-border-secondary shadow-sm text-sm font-semibold text-[#717680] hover:bg-gray-50">
                            <Calendar className="w-5 h-5 text-[#717680]" />
                            <span>Select dates</span>
                        </button>
                    </div>
                </div>

                {/* Metric Items */}
                <div className="w-full flex items-center gap-4 h-[200px]">
                    <MetricCard label="Model" value="GPT-4o" />
                    <MetricCard label="HITL" value="On" />
                    <MetricCard label="Agent type" value="Triage" />
                </div>

                {/* Agent Setup Section */}
                <div className="w-full flex flex-col items-start gap-4">
                    <div className="w-full h-7 flex flex-col items-start justify-center">
                        <h2 className="w-full text-lg font-[600] text-[#181D27] font-encode leading-7 tracking-wider">Agent Setup</h2>
                    </div>
                    
                    <div className="w-full flex flex-col items-start py-3 gap-4">
                        <SetupRow label="Prompt Template" value="{Lorem Ipsum}" />
                        <SetupRow label="Intelligence Source" value="{Lorem Ipsum}" />
                        <SetupRow label="API Connections" value="{Lorem Ipsum}" />
                        <SetupRow label="MCP Tools" value="{Lorem Ipsum}" />
                        <SetupRow label="Knowledge Sources" value="{Lorem Ipsum}" />
                        <SetupRow label="Self- Learning" value="{Lorem Ipsum}" />
                        <SetupRow label="Guardrails" value="{Lorem Ipsum}" />
                        <SetupRow label="HITL Config" value="{Lorem Ipsum}" />
                    </div>
                </div>
            </div>
        </div>
    );
}
