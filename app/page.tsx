import LocationPinIcon from "@/components/LocationPinIcon";
import VNS_Banner from "@/public/VNS_Banner.png";
import Image from "next/image";

export default function Home() {
    return (
        <div className={"flex flex-col items-center space-y-8"}>
            <Image className={"px-10"} src={VNS_Banner} alt={"VNS-banner"} width={650} />
            <div className={"flex items-center text-2xl font-extrabold"}>
                <div className={"px-5"}>
                    <LocationPinIcon size={30} />
                </div>{" "}
                Đông Lào, trust me bro.
            </div>
        </div>
    );
}
