import React from "react";
import { Calendar, TrendingUp, ChevronRight, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import MetricCard from "./MetricCard";

interface IFlowCardProps {
  workspaceId: string;
  title: string;
  description: string;
  status: "Published" | "Draft";
  agents: number;
  lastModified: string;
}

const IFlowCard: React.FC<IFlowCardProps> = ({
  workspaceId,
  title,
  description,
  status,
  agents,
  lastModified,
}) => {
  // Generate slug for the iFlow
  const iflowId = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

  return (
    <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-border-secondary flex flex-col items-start min-w-[320px] dark:bg-[#13161B] dark:border-[#22262F]">
      <div className="self-stretch flex flex-col items-start p-5 gap-4">
        <div className="self-stretch flex flex-col gap-2">
          <div className="flex items-center justify-between mb-[10px]">
            <div
              className={`px-2 py-0.5 rounded-md text-xs font-medium border ${
                status === "Published"
                  ? "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6] dark:bg-[#053321] dark:border-[#085D3A] dark:text-[#75E0A7]"
                  : "bg-[#FAFAFA] text-text-tertiary border-border-secondary dark:bg-[#13161B] dark:border-[#373A41] dark:text-[#CECFD2]"
              }`}
            >
              {status}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold text-text-primary leading-6 dark:text-[#F7F7F7]">
              {title}
            </h3>
            <p className="text-sm text-text-tertiary leading-5 line-clamp-2 dark:text-[#CECFD2]">
              {description}
            </p>
          </div>
        </div>

        <div className="self-stretch flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-[#535862] leading-5 dark:text-[#94979C]">
              {agents}
            </span>
            <span className="text-sm font-[400] text-[#535862] leading-5 dark:text-[#94979C]">
              Agents
            </span>
          </div>
          <div className="text-sm font-[400] text-[#535862] leading-5  dark:text-[#94979C]">
            Last modified:{" "}
            <span className="font-[600] text-[#535862]  dark:text-[#94979C]">
              {lastModified}
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch p-4 px-5 flex justify-end">
        <Link
          href={`/${workspaceId}/${iflowId}`}
          className="px-4 py-2 text-sm font-semibold text-[#414651] bg-white border border-border-secondary rounded-lg shadow-[0_1px_2px_rgba(10,13,18,0.05)] hover:bg-gray-50 transition-colors dark:bg-[#0C0E12] dark:text-[#CECFD2] dark:border-[#373A41]"
        >
          View
        </Link>
      </div>
    </div>
  );
};

interface WorkspaceBodyProps {
  workspaceId: string;
  workspaceName: string;
}

const WorkspaceBody: React.FC<WorkspaceBodyProps> = ({
  workspaceId,
  workspaceName,
}) => {
  return (
    <div className="w-full flex flex-col items-start gap-5 font-inter bg-white rounded-xl pt-6 dark:bg-[#0C0E12]">
      {/* Header Section */}
      <header className="self-stretch flex flex-col px-4 gap-5 mb-3">
        <div className="self-stretch flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px] dark:bg-[#0C0E12]">
              <Building2 className="w-[23px] h-[21px] text-[#FF5714]" />
            </div>
            <h1 className="text-2xl font-semibold text-text-primary leading-8 dark:text-[#F7F7F7]">
              {workspaceName}
            </h1>
          </div>
          <p className="max-w-[640px] text-base text-[#535862] font-[400] leading-6 dark:text-[#94979C]">
            Automated claims processing and customer support workflows for the
            insurance division.
          </p>
        </div>
      </header>

      {/* Metrics Section */}
      <section className="self-stretch px-4 flex flex-wrap gap-4">
        <MetricCard
          title="Workflows"
          value="8"
          subtitle={<span className="text-text-tertiary">of 10 used</span>}
        />
        <MetricCard
          title="Executions"
          value="1.7k"
          trend={{ value: "20%", isUp: true }}
        />
        <MetricCard
          title="Success Rate"
          value="89.4%"
          trend={{ value: "10%", isUp: false }}
        />
        <MetricCard
          title="Tokens"
          value="2.4M"
          trend={{ value: "10%", isUp: false }}
        />
      </section>

      {/* Recently Modified Section */}
      <section className="self-stretch px-4 flex flex-col gap-4 mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-text-[#181D27] font-encode dark:[#F7F7F7]">
            Recently modified iFlows
          </h2>
          <button className="flex items-center gap-1 text-[14px] font-semibold text-[#004A96] hover:text-[#004A96] dark:text-[#CECFD2]">
            <span>View all iFlows</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-6">
          <IFlowCard
            workspaceId={workspaceId}
            title="Invoice Processing"
            description="This workflow handles invoice processing tasks."
            status="Published"
            agents={10}
            lastModified="Mar 17, 2026, 15:44"
          />
          <IFlowCard
            workspaceId={workspaceId}
            title="Invoice Processing"
            description="This workflow handles invoice processing tasks."
            status="Draft"
            agents={10}
            lastModified="Mar 17, 2026, 15:44"
          />
          <IFlowCard
            workspaceId={workspaceId}
            title="Invoice Processing"
            description="This workflow handles invoice processing tasks."
            status="Draft"
            agents={10}
            lastModified="Mar 17, 2026, 15:44"
          />
        </div>
        <div className="flex flex-wrap gap-6">
          <IFlowCard
            workspaceId={workspaceId}
            title="Invoice Processing"
            description="This workflow handles invoice processing tasks."
            status="Draft"
            agents={10}
            lastModified="Mar 17, 2026, 15:44"
          />
          <IFlowCard
            workspaceId={workspaceId}
            title="Invoice Processing"
            description="This workflow handles invoice processing tasks."
            status="Published"
            agents={10}
            lastModified="Mar 17, 2026, 15:44"
          />
          <IFlowCard
            workspaceId={workspaceId}
            title="Invoice Processing"
            description="This workflow handles invoice processing tasks."
            status="Published"
            agents={10}
            lastModified="Mar 17, 2026, 15:44"
          />
        </div>
      </section>
    </div>
  );
};

export default WorkspaceBody;
