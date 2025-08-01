import type { Viewport } from "next";
import type { ReactNode } from "react";
import { clsx } from "clsx";
import { Quicksand as VNS_Font } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TerraTheme } from "@/components/TerraTheme";
import { Toaster } from "@/components/ui/sonner";
import "@/app/globals.css";

const mainFont = VNS_Font({
    variable: "--font-vns",
    subsets: ["latin", "vietnamese"]
});

export const viewport: Viewport = {
    colorScheme: "light dark",
    initialScale: 1.0
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="vn" suppressHydrationWarning>
            <body className={clsx("font-[family-name:var(--font-vns)] antialiased", mainFont.variable)}>
                <TerraTheme>
                    <NuqsAdapter>{children}</NuqsAdapter>
                    <Toaster position="top-center" richColors />
                </TerraTheme>
            </body>
        </html>
    );
}
