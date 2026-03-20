"use client";

import React from "react";
import WorkflowEditor from "@/components/WorkflowEditor/WorkflowEditor";

export default function WorkflowEditorPage() {
  return (
    <div className="-m-6 h-[calc(100vh-120px)] overflow-hidden">
      <WorkflowEditor />
    </div>
  );
}
