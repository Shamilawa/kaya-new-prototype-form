import React from "react";
import Link from "next/link";
import { Building2 } from "lucide-react";

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
        <div className="shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-border-secondary flex items-center p-6 gap-4">
            <div className={`w-12 h-12 rounded-full ${bgColors[variant]} flex items-center justify-center shrink-0`}>
                {iconSrc ? <img src={iconSrc} alt="" className="w-6 h-6" /> : Icon && <Icon className={`w-6 h-6 ${iconColors[variant]}`} />}
            </div>
            <div className="flex flex-col items-start">
                <div className="text-sm font-medium text-text-tertiary leading-5">{title}</div>
                <div className="text-[30px] font-semibold text-text-primary leading-[38px]">{value}</div>
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
            <div className="self-stretch flex flex-col items-start p-5 gap-1">
                <div className="self-stretch text-base font-semibold text-text-primary leading-6">{title}</div>
                <div className="self-stretch text-sm text-text-tertiary leading-5">{category}</div>
            </div>
            <div className="self-stretch flex items-center justify-between px-5 py-3">
                <div className="text-sm text-[#535862] leading-5">
                    <span className="font-bold text-[#535862]">{workflows}</span> Workflows, <span className="font-bold text-[#535862]">{agents}</span> Agents
                </div>
                <Link 
                    href={`/${slug}`}
                    className="shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] rounded-lg bg-white flex items-center justify-center py-2 px-3 hover:bg-gray-50 transition-colors"
                >
                    <span className="text-sm font-semibold leading-5 text-[#414651]">View</span>
                </Link>
            </div>
        </div>
    );
};

interface EnterpriseBodyProps {
}

const EnterpriseBody: React.FC<EnterpriseBodyProps> = () => {
    return (
        <div className="w-full flex flex-col items-start gap-8 font-inter px-[20px] py-[16px]">
            {/* Date + Greeting + Metrics grouped with spacing-4x (16px) internal gaps */}
            <div className="self-stretch flex flex-col items-start gap-[32px]">
                {/* Date + Greeting */}
                <div className="self-stretch flex flex-col items-start">
                    <div className="text-[12px] font-[400] text-[#535862] leading-5">19 March, 2026</div>
                    <div className="text-[18px] font-[500] text-[#414651] leading-8">Welcome back, Olivia!</div>
                </div>

                {/* Enterprise Overview + Metrics */}
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
                
                <div className="self-stretch grid grid-cols-4 gap-5 bg-[#F9F9FB] p-[20px] rounded-xl">
                    <MetricItem icon={Building2} title="Total Workspaces" value="12" variant="orange" />
                    <MetricItem iconSrc="/card-workflow.svg" title="Total Workflows" value="35" variant="purple" />
                    <MetricItem iconSrc="/card-bot.svg" title="Total no. Agents" value="68" variant="gray" />
                    <MetricItem iconSrc="/card-active.svg" title="Active now" value="5" variant="green" />
                </div>
            </div>
            </div>

            {/* Workspaces List Section */}
            <div className="self-stretch flex flex-col items-start gap-4">
                <div className="self-stretch font-inter text-lg font-semibold text-text-primary leading-7">
                    Workspaces
                </div>
                
                <div className="self-stretch grid grid-cols-3 gap-5">
                    <WorkspaceCard title="Claims Operations Overview" category="Insurance" workflows={3} agents={10} />
                    <WorkspaceCard title="Claims Operations Overview" category="Insurance" workflows={3} agents={10} />
                    <WorkspaceCard title="Claims Operations Overview" category="Insurance" workflows={3} agents={10} />
                    <WorkspaceCard title="Claims Operations Overview" category="Insurance" workflows={3} agents={10} />
                    <WorkspaceCard title="Claims Operations Overview" category="Insurance" workflows={3} agents={10} />
                    <WorkspaceCard title="Claims Operations Overview" category="Insurance" workflows={3} agents={10} />
                </div>
            </div>
        </div>
    );
};

export default EnterpriseBody;
