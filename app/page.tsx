import VNS_Banner from "@/public/VNS_Banner.png";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Image className={"px-10"} src={VNS_Banner} alt={"VNS-banner"} width={650} />
            <span className={"py-10 text-2xl font-extrabold"}>Coming soon.</span>
        </>
    );
}
