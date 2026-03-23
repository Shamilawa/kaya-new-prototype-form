import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: React.ReactNode;
  trend?: {
    value: string;
    isUp: boolean;
  };
  chartSrc?: string; // kept for API compatibility, no longer rendered
  variant?: "default" | "highlight";
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  trend,
}) => (
  <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-[#e9eaeb] overflow-hidden flex flex-col min-h-[140px] dark:bg-[#13161B] dark:border-[#22262F]">
    {/* Header */}
    <div className="px-5 py-3 border-b border-[#e9eaeb] dark:border-transparent">
      <span className="text-sm font-semibold text-[#181d27] leading-5 dark:text-[#F7F7F7]">
        {title}
      </span>
    </div>

    {/* Body */}
    <div className="flex-1 flex flex-col justify-center gap-3 px-5 py-4 dark:bg-[#0C0E12] dark:border-[#22262F] rounded-t-2xl">
      {/* Value row — inline subtitle only when there's also a trend */}
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-[30px] font-semibold text-[#181d27] leading-[38px] dark:text-[#F7F7F7]">
          {value}
        </span>
        {subtitle && trend && (
          <span className="text-lg font-medium text-[#535862]">{subtitle}</span>
        )}
      </div>

      {/* Standalone subtitle (no trend) — shown below the value */}
      {subtitle && !trend && (
        <div className="text-sm font-medium text-[#717680]">{subtitle}</div>
      )}

      {/* Trend row */}
      {trend && (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm font-medium rounded-md border border-[#d5d7da] bg-white shadow-[0_1px_2px_rgba(10,13,18,0.05)] py-0.5 px-2 dark:bg-[#0C0E12] dark:border-[#373A41]">
            {trend.isUp ? (
              <TrendingUp className="w-4 h-4 text-[#F04438]" />
            ) : (
              <TrendingDown className="w-4 h-4 text-[#F04438]" />
            )}
            <span className="text-[#414651] text-[13px] font-medium dark:text-[#CECFD2]">
              {trend.value}
            </span>
          </div>
          <span className="text-sm text-[#717680]">vs last month</span>
        </div>
      )}
    </div>
  </div>
);

export default MetricCard;
