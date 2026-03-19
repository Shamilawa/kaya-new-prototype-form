"use client";

import { useParams } from "next/navigation";
import WorkspaceMetricsAndAnalyticsBody from "@/components/WorkspaceMetricsAndAnalyticsBody";

export default function WorkspaceMetricsAndAnalyticsPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;

    const workspaceName = workspaceId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <WorkspaceMetricsAndAnalyticsBody
            workspaceName={workspaceName}
        />
    );
}
