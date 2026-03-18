"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Bot, Settings, Play, Info, Activity, Zap, MessageSquare } from "lucide-react";

export default function AgentDetailPage() {
    const params = useParams();
    const agentId = params.agentId as string;
    
    const displayAgentName = agentId
        ? agentId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "Agent Details";

    return (
        <div className="w-full h-full flex flex-col gap-6 font-inter p-6 bg-white rounded-xl border border-border-secondary shadow-sm">
            {/* Agent Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F9FAFB] border border-border-secondary flex items-center justify-center shadow-sm">
                        <Bot className="w-7 h-7 text-[#667085]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-text-primary">{displayAgentName}</h1>
                        <p className="text-sm text-text-tertiary">Model: GPT-4 | Status: <span className="text-success-700 font-medium">Published</span></p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 rounded-lg border border-border-secondary text-sm font-semibold text-text-secondary hover:bg-gray-50 bg-white">
                        Configuration
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-[#004A96] text-sm font-semibold text-white shadow-sm flex items-center gap-2 hover:bg-[#003d7a]">
                        <Play className="w-4 h-4 fill-white" />
                        Test Agent
                    </button>
                </div>
            </div>

            {/* Agent Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-5 bg-[#FDFDFD] border border-border-secondary rounded-xl flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-text-tertiary">
                        <Activity className="w-4 h-4" />
                        <span>Success Rate</span>
                    </div>
                    <div className="text-2xl font-semibold text-text-primary">98.2%</div>
                </div>
                <div className="p-5 bg-[#FDFDFD] border border-border-secondary rounded-xl flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-text-tertiary">
                        <Zap className="w-4 h-4" />
                        <span>Avg. Latency</span>
                    </div>
                    <div className="text-2xl font-semibold text-text-primary">1.2s</div>
                </div>
                <div className="p-5 bg-[#FDFDFD] border border-border-secondary rounded-xl flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-text-tertiary">
                        <MessageSquare className="w-4 h-4" />
                        <span>Total Queries</span>
                    </div>
                    <div className="text-2xl font-semibold text-text-primary">12,450</div>
                </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center py-20 border-2 border-dashed border-border-secondary rounded-xl bg-[#F9FAFB] text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border-secondary flex items-center justify-center shadow-sm">
                    <Settings className="w-6 h-6 text-text-muted transition-transform group-hover:rotate-45" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-text-primary">Agent Builder Interface</h3>
                    <p className="text-sm text-text-tertiary max-w-[420px]">This is where you can configure the agent's prompts, tools, and behavior. Drag and drop components to build specialized logic.</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-white border border-border-secondary text-sm font-semibold text-text-secondary hover:bg-gray-50 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Learn about Agents
                </button>
            </div>
        </div>
    );
}
