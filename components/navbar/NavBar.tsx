import Image from "next/image";
import Link from "next/link";
import NavBarItems from "@/components/navbar/NavBarItems";
import PurchaseTicketButton from "@/components/PreviewTicketButton";
import BurgerMenu from "@/components/svg/BurgerMenu";
import Sparkle from "@/components/svg/Sparkle";
import DRCH_Logo from "@/public/DRCH_Logo.png";

export default function NavBar() {
    return (
        <header className={"sticky top-0 z-727 flex h-[70px] items-center bg-white"}>
            <div className={"ml-4 flex items-center justify-center"}>
                <div className={"dropdown"}>
                    <BurgerMenu />
                    <ul
                        tabIndex={0}
                        className={"menu dropdown-content sm:menu-sm md:menu-md lg:menu-lg rounded-box z-1 mt-8 w-52 bg-white p-2 shadow-lg"}
                    >
                        <NavBarItems isMobile />
                    </ul>
                </div>
                <Link className={"ml-6"} href={"/"}>
                    <Image
                        src={DRCH_Logo}
                        alt={"DRCH_logo"}
                        width={49}
                        height={49}
                        loading={"eager"}
                        priority
                    />
                </Link>
            </div>
            <div className={"mr-4 ml-auto flex items-center gap-x-5 lg:flex"}>
                <NavBarItems />
                <PurchaseTicketButton />
                <Sparkle />
            </div>
        </header>
    );
}
