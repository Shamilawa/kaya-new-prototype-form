import React from "react";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

export interface MetricCardProps {
    title: string;
    value: string;
    subtitle?: React.ReactNode;
    trend?: {
        value: string;
        isUp: boolean;
    };
    chartSrc?: string;
    variant?: 'default' | 'highlight';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, trend, chartSrc, variant = 'default' }) => (
    <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-2xl bg-[#FDFDFD] border border-border-secondary overflow-hidden flex flex-col items-start min-h-[160px]">
        <div className="self-stretch flex items-center px-5 py-3 border-b border-border-secondary/50">
            <span className="text-sm font-semibold text-text-primary leading-5">{title}</span>
        </div>
        <div className="self-stretch flex-1 bg-white p-5 pb-0 flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                    <span className="text-[30px] font-semibold text-text-primary leading-[38px]">{value}</span>
                    {subtitle && <div className="text-xl font-medium text-text-tertiary font-encode">{subtitle}</div>}
                </div>
                {trend && (
                    <div className="flex items-center gap-2">
                        <div className={`flex items-center gap-1 text-sm font-medium ${trend.isUp ? 'text-success-700' : 'text-error-700'}`}>
                            {trend.isUp ? <TrendingUp className="w-5 h-5 text-[#17B26A] font-semibold" /> : <TrendingUp className="w-5 h-5 scale-y-[-1] text-[#F04438] font-semibold" />}
                            {trend.isUp ? <span className="text-[#079455] text-[14px] font-500">{trend.value}</span> : <span className="text-[#F04438] text-[14px]">{trend.value}</span>}
                           
                        </div>
                        <span className="text-sm font-medium text-text-tertiary">vs last month</span>
                    </div>
                )}
            </div>
            {chartSrc && (
                <div className="self-stretch mt-2">
                    <Image src={trend?.isUp === false ? '/chart-red.svg' : '/chart-green.svg'} alt="Chart" width={200} height={50} className="w-full h-auto" />
                </div>
            )}
        </div>
    </div>
);

export default MetricCard;
