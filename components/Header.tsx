import React from 'react';
import { Square, Globe, Settings } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-14 border border-[#D9D9E0] rounded-tl-xl rounded-tr-xl px-4 flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]" style={{ background: 'var(--gradient-header)' }}>
            <div className="flex items-center gap-6">
                <div className="w-5 h-5 flex items-center justify-center">
                    <Square className="w-[18px] h-[18px] text-text-quaternary" />
                </div>
                <div className="flex items-center">
                    <div className="bg-white rounded-lg py-1 px-3 flex items-center gap-3 h-8">
                        <span className="flex items-center justify-center">
                            <Globe className="w-4 h-4 text-brand-blue" />
                        </span>
                        <span className="text-sm font-semibold text-text-primary">Enterprise</span>
                    </div>
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
