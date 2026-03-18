import "./globals.css";
import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const encodeSans = Encode_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-encode-sans",
});

export const metadata: Metadata = {
    title: "Kaya Enterprise Overview",
    description: "Scalable Enterprise Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${encodeSans.variable} font-sans`}>
                <div className="flex w-full h-screen">
                    <Sidebar />
                    <main className="flex-1 flex flex-col py-6 px-6">
                        <Header />
                        <section className="flex-1 bg-white border border-[#D9D9E0] border-t-0 rounded-bl-xl rounded-br-xl p-6 overflow-y-auto shadow-[0_0_12px_0_rgba(164,167,174,0.35)]">
                            {children}
                        </section>
                    </main>
                </div>
            </body>
        </html>
    );
}
