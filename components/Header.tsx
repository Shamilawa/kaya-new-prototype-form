"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Square, Globe, Settings, ChevronRight, Building2, Workflow, ChevronDown, Bot } from 'lucide-react';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const params = useParams();
    const workspaceId = params.workspaceId as string | undefined;
    const iflowId = params.iflowId as string | undefined;
    const agentId = params.agentId as string | undefined;
    
    const isAgentLevel = !!agentId;

    let displayWorkspaceName: string | null = null;
    if (workspaceId) {
        displayWorkspaceName = isAgentLevel 
            ? '...' 
            : workspaceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    const displayIFlowName = iflowId
        ? iflowId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : null;

    const displayAgentName = agentId
        ? agentId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : null;

    return (
        <header className="h-14 border border-[#D9D9E0] rounded-tl-xl rounded-tr-xl px-4 flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]" style={{ background: 'var(--gradient-header)' }}>
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center mr-4">
                    <Square className="w-[18px] h-[18px] text-text-quaternary" />
                </div>
                
                <div className="flex items-center gap-2">
                    <Link 
                        href="/"
                        className={`bg-white rounded-lg py-1 px-3 flex items-center gap-3 h-8 border border-transparent hover:border-border-primary transition-colors cursor-pointer`}
                    >
                        <span className="flex items-center justify-center">
                            <Globe className="w-4 h-4 text-brand-blue" />
                        </span>
                        <span className="text-sm font-semibold text-text-primary font-inter">{isAgentLevel ? '...' : 'Enterprise'}</span>
                    </Link>

                    {displayWorkspaceName && (
                        <>
                            <ChevronRight className="w-4 h-4 text-[#D0D5DD]" />
                            <Link 
                                href={`/${workspaceId}`}
                                className="h-8 py-1 px-3 bg-white rounded-lg border border-border-secondary flex items-center gap-3 shadow-[0_1px_2px_rgba(10,13,18,0.05)] hover:border-border-primary transition-colors cursor-pointer"
                            >
                                <Building2 className="w-4 h-4 text-brand-orange" />
                                <div className="text-sm font-semibold text-text-primary font-encode leading-5">
                                    {displayWorkspaceName}
                                </div>
                            </Link>
                        </>
                    )}

                    {displayIFlowName && (
                        <>
                            <ChevronRight className="w-4 h-4 text-[#98A2B3]" />
                            <Link 
                                href={`/${workspaceId}/${iflowId}`}
                                className="h-8 py-1.5 px-3 bg-white rounded-lg border border-[#D0D5DD] flex items-center gap-2 shadow-[0_1px_2px_rgba(16,24,40,0.05)] cursor-pointer group hover:bg-gray-50 transition-all"
                            >
                                <Workflow className="w-4 h-4 text-[#6941C6]" />
                                <div className="text-sm font-semibold text-[#344054] font-inter leading-5">
                                    {displayIFlowName}
                                </div>
                                <ChevronDown className="w-4 h-4 text-[#667085] transition-transform group-hover:translate-y-0.5" />
                            </Link>
                        </>
                    )}

                    {displayAgentName && (
                        <>
                            <ChevronRight className="w-4 h-4 text-[#98A2B3]" />
                            <div className="h-8 py-1.5 px-3 bg-white rounded-lg border border-[#D0D5DD] flex items-center gap-2 shadow-[0_1px_2px_rgba(16,24,40,0.05)] cursor-pointer group hover:bg-gray-50 transition-all">
                                <Bot className="w-4 h-4 text-[#667085]" />
                                <div className="text-sm font-semibold text-[#344054] font-inter leading-5">
                                    {displayAgentName}
                                </div>
                                <ChevronDown className="w-4 h-4 text-[#667085] transition-transform group-hover:translate-y-0.5" />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="flex">
                <button className="p-1.5 bg-white border border-[rgba(10,12,18,0.18)] shadow-[0_1px_2px_rgba(10,12,67,0.05)] rounded-md cursor-pointer flex items-center justify-center">
                    <Settings className="w-4 h-4 text-text-muted" />
                </button>
            </div>
        </header>
    );
};

export default Header;
