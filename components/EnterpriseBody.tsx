import React from "react";
import { Plus, Building2, Workflow, Users2, Activity } from "lucide-react";

const MetricItem = ({ icon: Icon, title, value, variant }: { icon: any, title: string, value: string, variant: 'orange' | 'purple' | 'gray' | 'green' }) => {
    const bgColors = {
        orange: 'bg-[#FFF3EE]',
        purple: 'bg-[#F4F3FF]',
        gray: 'bg-bg-tertiary',
        green: 'bg-[#DCFAE6]'
    };

    const iconColors = {
        orange: 'text-[#FF4405]',
        purple: 'text-[#6941C6]',
        gray: 'text-text-tertiary',
        green: 'text-[#17B26A]'
    };

    return (
        <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-border-secondary flex flex-col items-start p-5 gap-5">
            <div className={`w-12 h-12 rounded-full ${bgColors[variant]} flex items-center justify-center shrink-0`}>
                <Icon className={`w-6 h-6 ${iconColors[variant]}`} />
            </div>
            <div className="self-stretch flex flex-col items-start gap-2">
                <div className="self-stretch text-sm font-medium text-text-tertiary leading-5">{title}</div>
                <div className="self-stretch flex items-end">
                    <div className="flex-1 text-[30px] font-semibold text-text-primary leading-[38px]">{value}</div>
                </div>
            </div>
        </div>
    );
};

const WorkspaceCard = ({ title, category, workflows, agents }: { title: string, category: string, workflows: number, agents: number }) => (
    <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-border-secondary flex flex-col items-start min-w-[320px]">
        <div className="self-stretch flex flex-col items-start p-5 gap-4">
            <div className="self-stretch flex items-center">
                <div className="flex-1 flex flex-col items-start">
                    <div className="self-stretch text-base font-semibold text-text-primary leading-6">{title}</div>
                    <div className="self-stretch text-sm text-text-tertiary leading-5">{category}</div>
                </div>
            </div>
            <div className="text-sm text-text-tertiary leading-5">
                <span className="font-bold text-text-primary">{workflows}</span> Workflows, <span className="font-bold text-text-primary">{agents}</span> Agents
            </div>
        </div>
        <div className="self-stretch flex flex-col items-center pt-0 pr-0 pb-3 gap-3 text-sm text-[#414651]">
            <div className="self-stretch h-px bg-border-secondary" />
            <div className="self-stretch flex items-center justify-end px-6">
                <div className="flex-1 flex items-center justify-end">
                    <button className="shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] rounded-lg bg-white border border-border-primary flex items-center justify-center py-2 px-3 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-center px-0.5">
                            <div className="font-semibold leading-5 text-text-secondary">View</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const EnterpriseBody = () => {
    return (
        <div className="w-full flex flex-col items-start gap-8 font-inter">
            {/* Page Header */}
            <div className="self-stretch rounded-xl bg-[#F9F9FB] border border-[#D5D7DA] flex flex-col items-center p-5">
                <div className="w-full max-w-[1280px] flex flex-col items-center px-8">
                    <div className="w-full flex flex-col items-center pt-8 pr-0 pb-0 gap-5">
                        <div className="w-full max-w-[640px] flex flex-col items-center gap-1 text-center">
                            <h1 className="self-stretch text-2xl font-semibold text-text-primary leading-8">Welcome back, Olivia</h1>
                            <p className="self-stretch text-base text-text-tertiary leading-6">Track, manage and benchmark with Kaya.</p>
                        </div>
                        <div className="flex items-center">
                            <button className="shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] rounded-lg bg-none overflow-hidden flex items-center justify-center py-2.5 px-3.5 gap-1 transition-transform hover:scale-[1.02] active:scale-[0.98]" 
                                style={{ background: 'radial-gradient(423.78% 126.68% at 24.61% -88.89%, #005bb5 19.07%, #36374c 39.42%, #32191d 48.08%, #ff5714 83.65%)' }}>
                                <Plus className="w-5 text-white" />
                                <div className="flex items-center justify-center px-0.5">
                                    <div className="text-sm font-semibold text-white leading-5">New Workspace</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Metrics Section */}
            <div className="self-stretch flex flex-col items-start px-4 gap-4">
                <div className="self-stretch flex flex-col items-start gap-4">
                    <div className="self-stretch flex flex-wrap items-start content-start gap-5">
                        <div className="flex-1 flex flex-col items-start gap-1 min-w-[320px]">
                            <div className="self-stretch flex items-center gap-2">
                                <div className="shadow-[0_0_6px_rgba(164,167,174,0.35)] rounded-[4px] bg-white p-1">
                                    <Activity className="w-4 h-4 text-brand-blue" />
                                </div>
                                <h2 className="flex-1 text-2xl font-semibold text-text-primary leading-8">Enterprise Overview</h2>
                            </div>
                            <p className="text-base text-text-tertiary leading-6">Summary of key metrics across workspaces.</p>
                        </div>
                    </div>
                </div>
                
                <div className="self-stretch flex flex-wrap items-start gap-6">
                    <MetricItem icon={Building2} title="Total Workspaces" value="12" variant="orange" />
                    <MetricItem icon={Workflow} title="Total Workflows" value="35" variant="purple" />
                    <MetricItem icon={Users2} title="Total no. Agents" value="68" variant="gray" />
                    <MetricItem icon={Activity} title="Active now" value="5" variant="green" />
                </div>
            </div>

            {/* Workspaces List Section */}
            <div className="self-stretch flex flex-col items-start px-4 gap-4">
                <div className="self-stretch font-encode text-lg font-semibold text-text-primary leading-7">
                    Workspaces
                </div>
                
                <div className="self-stretch flex flex-col gap-6">
                    <div className="self-stretch flex flex-wrap items-start content-start gap-6 min-w-[720px]">
                        <WorkspaceCard title="Claims Operations Overview" category="Insurance" workflows={3} agents={10} />
                        <WorkspaceCard title="TelecomOps" category="Telecommunications" workflows={3} agents={10} />
                        <WorkspaceCard title="HR Automation" category="Human Resources" workflows={3} agents={10} />
                    </div>
                    <div className="self-stretch flex flex-wrap items-start content-start gap-6 min-w-[720px]">
                        <WorkspaceCard title="Healthfirst" category="Healthcare" workflows={3} agents={10} />
                        <WorkspaceCard title="TelecomOps" category="Telecommunications" workflows={3} agents={10} />
                        <WorkspaceCard title="HR Automation" category="Human Resources" workflows={3} agents={10} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterpriseBody;
