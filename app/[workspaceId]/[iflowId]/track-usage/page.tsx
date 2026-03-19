"use client";

import WorkflowTrackUsageBody from "@/components/WorkflowTrackUsageBody";
import { useParams } from "next/navigation";

export default function WorkflowTrackUsagePage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    const iflowId = params.iflowId as string;

    const iflowName = iflowId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <WorkflowTrackUsageBody
            workspaceId={workspaceId}
            iflowId={iflowId}
            iflowName={iflowName}
        />
    );
}
