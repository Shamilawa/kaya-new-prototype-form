"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function KayaLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isEditor = pathname.startsWith("/editor") || pathname.includes("/editor");

    if (isEditor) {
        return <div className="w-full h-screen bg-white">{children}</div>;
    }

    return (
        <div className="flex w-full h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 flex flex-col py-6 px-6 overflow-hidden">
                <Header />
                <section className="flex-1 bg-white border border-[#D9D9E0] border-t-0 rounded-bl-xl rounded-br-xl p-6 overflow-y-auto shadow-[0_0_12px_0_rgba(164,167,174,0.35)]">
                    {children}
                </section>
            </main>
        </div>
    );
}
