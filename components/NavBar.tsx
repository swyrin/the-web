import PurchaseTicketButton from "@/components/PurchaseTicketButton";
import VNS_Logo from "@/public/VNS_Logo.png";
import Image from "next/image";
import Link from "next/link";

function NavbarItems() {
    return (
        <div className="list-none font-extrabold">
            <li>
                <Link href={"/about/crew"}>Về chúng tôi</Link>
            </li>
        </div>
    );
}

export default function NavBar() {
    return (
        <div className={"navbar fixed bg-white font-[family-name:var(--font-jb-mono)] shadow-2xl"}>
            <div className={"navbar-start"}>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 18 18"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-sm rounded-box z-1 mt-8 w-52 bg-white p-2 shadow-lg"
                    >
                        <NavbarItems />
                    </ul>
                </div>
                <Link className={"px-5"} href={"/"}>
                    <Image src={VNS_Logo} alt={"VNS-logo"} width={45} height={45} />
                </Link>
                <a className={"hidden content-center px-5 text-lg font-bold lg:block"}>Arknights VNS: Dreamchasers</a>
                <a className={"block text-sm font-bold lg:hidden"}>Dreamchasers</a>
            </div>
            <div className={"navbar-center hidden lg:block"}>
                <NavbarItems />
            </div>
            <div className={"navbar-end"}>
                <PurchaseTicketButton />
            </div>
        </div>
    );
}
