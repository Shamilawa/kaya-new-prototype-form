"use client";

import { useParams } from "next/navigation";
import AgentTrackUsageBody from "@/components/AgentTrackUsageBody";

export default function AgentTrackUsagePage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    const agentId = params.agentId as string;

    const agentName = agentId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <AgentTrackUsageBody
            workspaceId={workspaceId}
            agentId={agentId}
            agentName={agentName}
        />
    );
}
