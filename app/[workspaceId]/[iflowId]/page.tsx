"use client";

import React from "react";
import { useParams } from "next/navigation";
import IFlowBody from "@/components/IFlowBody";

export default function IFlowDetailPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    const iflowId = params.iflowId as string;
    
    const displayIFlowName = iflowId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return <IFlowBody workspaceId={workspaceId} iflowId={iflowId} iflowName={displayIFlowName} />;
}
