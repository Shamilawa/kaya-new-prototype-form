"use client";

import React from "react";
import { useParams } from "next/navigation";
import WorkflowMetricsAndAnalyticsBody from "@/components/WorkflowEditor/WorkflowMetricsAndAnalyticsBody";

export default function WorkflowMetricsAndAnalyticsPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    const iflowId = params.iflowId as string;
    
    const displayIFlowName = iflowId
        ? iflowId
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : "Workflow";

    return (
        <WorkflowMetricsAndAnalyticsBody 
            workspaceId={workspaceId} 
            iflowId={iflowId} 
            iflowName={displayIFlowName} 
        />
    );
}
