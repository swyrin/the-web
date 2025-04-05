import PurchaseTicketButton from "@/components/PurchaseTicketButton";
import VNS_Logo from "@/public/VNS_Logo.png";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className={"navbar bg-base-100 fixed font-[family-name:var(--font-jb-mono)] shadow-lg"}>
            <div className={"flex-none"}>
                <Image src={VNS_Logo} alt={"VNS-logo"} width={45} height={45} />
            </div>
            <div className={"navbar-start"}>
                <a className={"hidden content-center px-5 text-lg font-bold lg:block"}>Arknights VNS: Dreamchasers</a>
            </div>
            <div className={"navbar-end"}>
                <PurchaseTicketButton />
            </div>
        </div>
    );
}
