import "./globals.css";
import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";

const encodeSans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-encode-sans",
});

export const metadata: Metadata = {
  title: "Kaya Enterprise Overview",
  description: "Scalable Enterprise Dashboard",
};

import KayaLayout from "./KayaLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${encodeSans.variable} font-sans`}>
        <KayaLayout>{children}</KayaLayout>
      </body>
    </html>
  );
}
