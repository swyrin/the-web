import Calendar from "@/components/svg/Calendar";
import LocationPin from "@/components/svg/LocationPin";
import Image from "next/image";

export default function Home() {
    return (
        <div className={"flex flex-col items-center space-y-8"}>
            <Image
                className={"px-10"}
                src={"/VNS_Banner.png"}
                alt={"VNS-banner"}
                loading={"eager"}
                priority
                width={700}
                height={500}
            />
            <div className={"flex flex-col space-y-5 text-sm font-extrabold lg:text-xl"}>
                <div className={"flex items-center"}>
                    <div className={"px-2"}>
                        <LocationPin size={30} />
                    </div>
                    <span className={"text-center"}>Đông Lào, trust me bro.</span>
                </div>
                <div className={"flex items-center"}>
                    <div className={"px-2"}>
                        <Calendar size={30} />
                    </div>
                    <span className={"text-center"}>2025-08-??</span>
                </div>
            </div>
        </div>
    );
}
