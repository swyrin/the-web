import NavBar from "@/components/navbar/NavBar";
import type { Metadata, Viewport } from "next";
import { Montserrat as VNS_Font } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const mainFont = VNS_Font({
    variable: "--font-vns",
    subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://dreamchasers.akvns.org"),
    title: "Dreamchasers @ 2025 🔥",
    description: "From VNS Dev Squad with love ❤️️",
    authors: [
        {
            name: "Trạm dừng chân chốn Terra",
            url: "https://www.facebook.com/terrastationvn",
        },
    ],
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
        <html lang={"en"} data-theme={"light"}>
            <body className={`${mainFont.variable} font-[family-name:var(--font-vns)] antialiased`}>
                <NavBar />
                <div>{children}</div>
            </body>
        </html>
    );
}
