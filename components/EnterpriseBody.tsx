import React from "react";
import Link from "next/link";
import { Plus, Building2 } from "lucide-react";

const MetricItem = ({ icon: Icon, iconSrc, title, value, variant }: { icon?: any, iconSrc?: string, title: string, value: string, variant: 'orange' | 'purple' | 'gray' | 'green' }) => {
    const bgColors = {
        orange: 'bg-[#FFF3EE]',
        purple: 'bg-[#F4F3FF]',
        gray: 'bg-[#F5F5F5]',
        green: 'bg-[#DCFAE6]'
    };

    const iconColors = {
        orange: 'text-[#FF4405]',
        purple: 'text-[#6941C6]',
        gray: 'text-text-tertiary',
        green: 'text-[#17B26A]'
    };

    return (
        <div className="shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-border-secondary flex flex-col items-start p-6 gap-6">
            <div className={`w-12 h-12 rounded-full ${bgColors[variant]} flex items-center justify-center shrink-0`}>
                {iconSrc ? <img src={iconSrc} alt="" className="w-6 h-6" /> : Icon && <Icon className={`w-6 h-6 ${iconColors[variant]}`} />}
            </div>
            <div className="self-stretch flex flex-col items-start gap-2">
                <div className="self-stretch text-sm font-medium text-text-tertiary leading-5">{title}</div>
                <div className="self-stretch text-[30px] font-semibold text-text-primary leading-[38px]">{value}</div>
            </div>
        </div>
    );
};

const WorkspaceCard = ({ 
    title, 
    category, 
    workflows, 
    agents
}: { 
    title: string, 
    category: string, 
    workflows: number, 
    agents: number
}) => {
    // Generate URL friendly slug from title
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

    return (
        <div className="shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-border-secondary flex flex-col items-start">
            <div className="self-stretch flex flex-col items-start p-5 gap-4">
                <div className="self-stretch flex items-center">
                    <div className="flex-1 flex flex-col items-start">
                        <div className="self-stretch text-base font-semibold text-text-primary leading-6">{title}</div>
                        <div className="self-stretch text-sm text-text-tertiary leading-5">{category}</div>
                    </div>
                </div>
                <div className="text-sm text-[#535862] leading-5">
                    <span className="font-bold text-text-primary">{workflows}</span> Workflows, <span className="font-bold text-text-primary">{agents}</span> Agents
                </div>
            </div>
            <div className="self-stretch flex flex-col items-center pt-0 pr-0 pb-3 gap-3 text-sm text-[#414651]">
                <div className="self-stretch h-px bg-border-secondary" />
                <div className="self-stretch flex items-center justify-end px-6">
                    <div className="flex-1 flex items-center justify-end">
                        <Link 
                            href={`/${slug}`}
                            className="shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] rounded-lg bg-white border-[#D5D7DA] flex items-center justify-center py-2 px-3 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-center px-0.5">
                                <div className="font-semibold leading-5 text-[#414651]">View</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface EnterpriseBodyProps {
}

const EnterpriseBody: React.FC<EnterpriseBodyProps> = () => {
    return (
        <div className="w-full flex flex-col items-start gap-8 font-inter">
            {/* Page Header */}
            <div className="self-stretch rounded-xl bg-[#F9F9FB] flex flex-col items-center p-5" style={{ border: '0.5px solid var(--Colors-Border-border-primary, #D5D7DA)' }}>
                <div className="w-full max-w-[1280px] flex flex-col items-center px-8">
                    <div className="w-full flex flex-col items-center pt-8 pr-0 pb-0 gap-5">
                        <div className="w-full max-w-[640px] flex flex-col items-center gap-1 text-center">
                            <h1 className="self-stretch text-2xl font-semibold text-text-primary leading-8">Welcome back, Olivia</h1>
                            <p className="self-stretch text-base text-text-tertiary leading-6">Track, manage and benchmark with Kaya.</p>
                        </div>
                        <div className="flex items-center">
                            <button className="shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] rounded-lg overflow-hidden flex items-center justify-center py-2.5 px-3.5 gap-1 transition-transform hover:scale-[1.02] active:scale-[0.98]" 
                                style={{ backgroundImage: 'url(/btn-gradient.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            <div className="self-stretch flex flex-col items-start gap-5">
                <div className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-3">
                        <div className="shadow-[0_0_6px_rgba(164,167,174,0.35)] rounded-md bg-white p-1 inline-grid">
                            <svg width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                <path d="M2.50001 14.1667V14C2.50001 12.5999 2.50001 11.8998 2.77249 11.365C3.01218 10.8946 3.39463 10.5122 3.86503 10.2725C4.39981 10 5.09988 10 6.50001 10H11.8333C13.2335 10 13.9335 10 14.4683 10.2725C14.9387 10.5122 15.3212 10.8946 15.5609 11.365C15.8333 11.8998 15.8333 12.5999 15.8333 14V14.1667M2.50001 14.1667C1.57954 14.1667 0.833344 14.9129 0.833344 15.8333C0.833344 16.7538 1.57954 17.5 2.50001 17.5C3.42048 17.5 4.16668 16.7538 4.16668 15.8333C4.16668 14.9129 3.42048 14.1667 2.50001 14.1667ZM15.8333 14.1667C14.9129 14.1667 14.1667 14.9129 14.1667 15.8333C14.1667 16.7538 14.9129 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333C17.5 14.9129 16.7538 14.1667 15.8333 14.1667ZM9.16668 14.1667C8.2462 14.1667 7.50001 14.9129 7.50001 15.8333C7.50001 16.7538 8.2462 17.5 9.16668 17.5C10.0872 17.5 10.8333 16.7538 10.8333 15.8333C10.8333 14.9129 10.0872 14.1667 9.16668 14.1667ZM9.16668 14.1667V5.83334M4.16668 5.83334H14.1667C14.9432 5.83334 15.3315 5.83334 15.6378 5.70648C16.0462 5.53732 16.3707 5.21286 16.5398 4.80448C16.6667 4.4982 16.6667 4.10991 16.6667 3.33334C16.6667 2.55677 16.6667 2.16849 16.5398 1.8622C16.3707 1.45382 16.0462 1.12937 15.6378 0.960211C15.3315 0.833344 14.9432 0.833344 14.1667 0.833344H4.16668C3.39011 0.833344 3.00182 0.833344 2.69554 0.960211C2.28716 1.12937 1.9627 1.45382 1.79354 1.8622C1.66668 2.16849 1.66668 2.55677 1.66668 3.33334C1.66668 4.10991 1.66668 4.4982 1.79354 4.80448C1.9627 5.21286 2.28716 5.53732 2.69554 5.70648C3.00182 5.83334 3.39011 5.83334 4.16668 5.83334Z" stroke="#0070C9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-text-primary leading-8">Enterprise Overview</h2>
                    </div>
                    <p className="text-base text-text-tertiary leading-6">Summary of key metrics across workspaces.</p>
                </div>
                
                <div className="self-stretch grid grid-cols-4 gap-6">
                    <MetricItem icon={Building2} title="Total Workspaces" value="12" variant="orange" />
                    <MetricItem iconSrc="/card-workflow.svg" title="Total Workflows" value="35" variant="purple" />
                    <MetricItem iconSrc="/card-bot.svg" title="Total no. Agents" value="68" variant="gray" />
                    <MetricItem iconSrc="/card-active.svg" title="Active now" value="5" variant="green" />
                </div>
            </div>

            {/* Workspaces List Section */}
            <div className="self-stretch flex flex-col items-start gap-4">
                <div className="self-stretch font-encode text-lg font-semibold text-[#535862] leading-7">
                    Workspaces
                </div>
                
                <div className="self-stretch grid grid-cols-3 gap-6">
                    <WorkspaceCard title="Claims Operations Overview" category="Insurance" workflows={3} agents={10} />
                    <WorkspaceCard title="TelecomOps" category="Telecommunications" workflows={3} agents={10} />
                    <WorkspaceCard title="HR Automation" category="Human Resources" workflows={3} agents={10} />
                    <WorkspaceCard title="Healthfirst" category="Healthcare" workflows={3} agents={10} />
                    <WorkspaceCard title="TelecomOps" category="Telecommunications" workflows={3} agents={10} />
                    <WorkspaceCard title="HR Automation" category="Human Resources" workflows={3} agents={10} />
                </div>
            </div>
        </div>
    );
};

export default EnterpriseBody;
