import NavBar from "@/components/NavBar";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const jbMono = JetBrains_Mono({
    variable: "--font-jb-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dreamchasers @ 2025 🔥",
    authors: [
        {
            name: "Trạm dừng chân chốn Terra",
            url: "https://www.facebook.com/terrastationvn",
        },
    ],
    description: "From VNS Dev Squad with love ❤️️",
    openGraph: {
        images: [
            {
                url: "VNS_Banner.png",
                secureUrl: "VNS_Banner.png",
            },
        ],
        locale: "vi_VN",
    },
};

export const viewport: Viewport = {
    colorScheme: "only light",
    initialScale: 1.0,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jbMono.variable} antialiased`}>
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
