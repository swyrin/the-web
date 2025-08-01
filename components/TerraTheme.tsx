"use client";

import type { ComponentProps } from "react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

export function TerraTheme({ children }: ComponentProps<typeof ThemeProvider>) {
    const pathname = usePathname();
    const isLanding = pathname === "/";

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            forcedTheme={isLanding ? "dark" : undefined}
        >
            {children}
        </ThemeProvider>
    );
}
