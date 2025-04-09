import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
    variable: "--font-jb-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dreamchasers 🔥🔥🔥🔥",
    description: "From VNS dev squad with love.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${jbMono.variable} antialiased`}>
                <NavBar />
                <div
                    className={
                        "flex min-h-screen max-w-screen items-center justify-center font-[family-name:var(--font-jb-mono)]"
                    }
                >
                    {children}
                </div>
            </body>
        </html>
    );
}
