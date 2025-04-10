import VNS_Logo from "@/public/VNS_Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function DreamchasersBranding() {
    return (
        <>
            <Link href={"/"}>
                <Image src={VNS_Logo} alt={"VNS-logo"} height={60} />
            </Link>
            <div className={"hidden content-center px-5 text-lg font-bold lg:block"}>Arknights VNS: Dreamchasers</div>
            <div className={"block text-sm font-bold lg:hidden"}>Dreamchasers</div>
        </>
    );
}
