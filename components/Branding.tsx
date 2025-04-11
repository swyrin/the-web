import VNS_Logo from "@/public/VNS_Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Branding() {
    return (
        <>
            <Link href={"/"}>
                <Image src={VNS_Logo} alt={"VNS-logo"} height={40} />
            </Link>
            <div className={"block content-center text-sm font-bold lg:px-5 lg:text-xl"}>
                <Link href={"/"}>Dreamchasers</Link>
            </div>
        </>
    );
}
