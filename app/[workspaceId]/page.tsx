"use client";

import React from "react";
import { useParams } from "next/navigation";
import WorkspaceBody from "@/components/WorkspaceBody";

export default function WorkspacePage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    // Simple transform back to display name
    const workspaceName = workspaceId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return <WorkspaceBody workspaceId={workspaceId} workspaceName={workspaceName} />;
}
