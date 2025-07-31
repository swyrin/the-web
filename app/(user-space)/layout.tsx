import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BASE_URL } from "@/app/web-config";
import NavBar from "@/components/navbar/NavBar";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: "Dreamchasers @ 2025",
    description: "For the Doctors, by the Doctors.",
    authors: [
        {
            name: "Trạm dừng chân chốn Terra",
            url: "https://facebook.com/terrastationvn"
        },
        {
            name: "VNS Dev Squad",
            url: "https://github.com/arknights-vns"
        }
    ],
    openGraph: {
        url: BASE_URL,
        title: "Dreamchasers @ 2025",
        siteName: "Arknights VNS - Dreamchasers",
        description: "For the Doctors, by the Doctors.",
        countryName: "Vietnam",
        locale: "vi-VN"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
