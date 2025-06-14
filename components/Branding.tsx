import DRCH_Logo from "@/public/DRCH_Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Branding() {
    return (
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
    );
}
