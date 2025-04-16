import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";

import "../globals.css";

const jbMono = JetBrains_Mono({
    variable: "--font-jb-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://arknights-vietnam-station.github.io/"),
    title: "Dreamchasers @ 2025 🔥",
    description: "From VNS Dev Squad with love ❤️️",
    authors: [
        {
            name: "Trạm dừng chân chốn Terra",
            url: "https://www.facebook.com/terrastationvn",
        },
    ],
    openGraph: {
        images: [
            {
                url: "https://arknights-vietnam-station.github.io/VNS_Banner.png",
                alt: "VNS banner",
            },
        ],
        locale: "vi_VN",
        type: "website",
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
            <body className={`${jbMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
