"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Settings, ChevronRight, Building2 } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const params = useParams();
    const activeWorkspaceId = params.workspaceId as string | undefined;
    
    const displayWorkspaceName = activeWorkspaceId 
        ? activeWorkspaceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : null;

    return (
        <header className="h-14 border border-[#D9D9E0] rounded-tl-xl rounded-tr-xl px-4 flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-[#F0F0F3]">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center mr-4">
                    <Image src="/expand-icon.svg" alt="Expand" width={20} height={20} />
                </div>
                
                <div className="flex items-center gap-2">
                    <Link 
                        href="/"
                        className={`bg-white rounded-lg py-1 px-3 flex items-center gap-3 h-8 border border-transparent hover:border-border-primary transition-colors cursor-pointer`}
                    >
                        <span className="flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.50001 14.1667V14C2.50001 12.5999 2.50001 11.8998 2.77249 11.365C3.01218 10.8946 3.39463 10.5122 3.86503 10.2725C4.39981 10 5.09988 10 6.50001 10H11.8333C13.2335 10 13.9335 10 14.4683 10.2725C14.9387 10.5122 15.3212 10.8946 15.5609 11.365C15.8333 11.8998 15.8333 12.5999 15.8333 14V14.1667M2.50001 14.1667C1.57954 14.1667 0.833344 14.9129 0.833344 15.8333C0.833344 16.7538 1.57954 17.5 2.50001 17.5C3.42048 17.5 4.16668 16.7538 4.16668 15.8333C4.16668 14.9129 3.42048 14.1667 2.50001 14.1667ZM15.8333 14.1667C14.9129 14.1667 14.1667 14.9129 14.1667 15.8333C14.1667 16.7538 14.9129 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333C17.5 14.9129 16.7538 14.1667 15.8333 14.1667ZM9.16668 14.1667C8.2462 14.1667 7.50001 14.9129 7.50001 15.8333C7.50001 16.7538 8.2462 17.5 9.16668 17.5C10.0872 17.5 10.8333 16.7538 10.8333 15.8333C10.8333 14.9129 10.0872 14.1667 9.16668 14.1667ZM9.16668 14.1667V5.83334M4.16668 5.83334H14.1667C14.9432 5.83334 15.3315 5.83334 15.6378 5.70648C16.0462 5.53732 16.3707 5.21286 16.5398 4.80448C16.6667 4.4982 16.6667 4.10991 16.6667 3.33334C16.6667 2.55677 16.6667 2.16849 16.5398 1.8622C16.3707 1.45382 16.0462 1.12937 15.6378 0.960211C15.3315 0.833344 14.9432 0.833344 14.1667 0.833344H4.16668C3.39011 0.833344 3.00182 0.833344 2.69554 0.960211C2.28716 1.12937 1.9627 1.45382 1.79354 1.8622C1.66668 2.16849 1.66668 2.55677 1.66668 3.33334C1.66668 4.10991 1.66668 4.4982 1.79354 4.80448C1.9627 5.21286 2.28716 5.53732 2.69554 5.70648C3.00182 5.83334 3.39011 5.83334 4.16668 5.83334Z" stroke="#0070C9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <span className="text-sm font-semibold text-text-primary font-inter">Enterprise</span>
                    </Link>

                    {displayWorkspaceName && (
                        <>
                            <ChevronRight className="w-4 h-4 text-[#D0D5DD]" />
                            <div className="h-8 py-1 px-3 bg-white rounded-lg border border-border-secondary flex items-center gap-3 shadow-[0_1px_2px_rgba(10,13,18,0.05)]">
                                <Building2 className="w-4 h-4 text-text-primary" />
                                <div className="text-sm font-semibold text-text-primary font-encode leading-5">
                                    {displayWorkspaceName}
                                </div>
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
