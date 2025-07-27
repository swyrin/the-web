"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSparkle } from "react-icons/lu";
import NavBarItems from "@/components/navbar/NavBarItems";
import PurchaseTicketButton from "@/components/PreviewTicketButton";
import DRCH_Logo from "@/public/DRCH_Logo.png";

export default function NavBar() {
    const pathname = usePathname();

    const doNotShow = [
        "/contest/banned",
        "/contest/democracy",
        "/contest/standing",
        "/admin",
    ];

    let visualStyle = "flex";

    if (doNotShow.includes(pathname)) {
        visualStyle = "hidden";
    }

    return (
        <header className={`sticky top-0 z-727 ${visualStyle} h-[70px] items-center bg-white`}>
            <div className={"ml-4 flex items-center justify-center"}>
                <div className={"dropdown"}>
                    <GiHamburgerMenu className={"block lg:hidden"} size={24} tabIndex={0} />
                    <ul
                        className={"dropdown-content menu z-1 mt-8 w-52 menu-md rounded-box bg-white p-2 shadow-lg md:menu-lg"}
                        tabIndex={0}
                    >
                        <NavBarItems isMobile />
                    </ul>
                </div>
                <Link className={"ml-6"} href={"/"}>
                    <Image
                        alt={"DRCH_logo"}
                        height={50}
                        loading={"eager"}
                        priority
                        src={DRCH_Logo}
                        width={50}
                    />
                </Link>
            </div>
            <div className={"mr-4 ml-auto flex items-center gap-x-5 lg:flex"}>
                <NavBarItems />
                <PurchaseTicketButton />
                <LuSparkle className={"hidden md:block"} fill={"#000000"} />
            </div>
        </header>
    );
}
