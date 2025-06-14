// "use client";
import OrganizerImage from "@/components/OrganizerImage";
import DRCH_Banner from "@/public/DRCH_Banner_Group.png";
import BG_1 from "@/public/landing-bg/BG_1.png";
import BG_2 from "@/public/landing-bg/BG_2.jpg";
import BG_3 from "@/public/landing-bg/BG_3.jpg";
import Jiangles_Banner from "@/public/organizers/jiangles_banner.png";
import ModSquad_Banner from "@/public/organizers/mod_squad_banner.png";
import VNS_Banner from "@/public/organizers/vns_banner.png";
import Image from "next/image";

// import { useEffect, useState } from "react";

export default function Home() {
    // const [imageOrder, setImageOrder] = useState<number>(() => {
    //     // https://stackoverflow.com/a/76071002
    //     if (typeof window === "undefined") {
    //         return 0;
    //     }
    //
    //     const stored = window.localStorage.getItem("banner-image");
    //     return stored != null ? parseInt(stored) : 0;
    // });
    //
    const images = [BG_1, BG_2, BG_3];
    //
    // setInterval(() => {
    //     document.getElementById("banner")!.style.backgroundImage = `url(${images[imageOrder].src})`;
    //     setImageOrder((imageOrder + 1) % images.length);
    // }, 5000);
    //
    // useEffect(() => {
    //     localStorage.setItem("banner-image", imageOrder.toString());
    // }, [imageOrder]);

    return (
        <div
            id={"banner"}
            className={"hero layout-height"}
            style={{
                // backgroundImage: `url(${images[imageOrder].src})`,
                backgroundImage: `url(${images[0].src})`,
            }}
        >
            <div className={"hero-overlay"}></div>
            <div className={"hero-content flex flex-col place-content-center-safe"}>
                <Image src={DRCH_Banner} alt={"DRCH"} height={185} />

                <div className={"absolute bottom-5 mx-4 flex flex-col gap-y-2 text-center"}>
                    <span className={"text-lg font-thin text-white"}>Được mang đến bởi</span>
                    <div className={"flex items-center gap-x-5 gap-y-4 text-white"}>
                        <OrganizerImage src={VNS_Banner} alt={"VNS"} />
                        <div className={"hidden text-xl text-white lg:block"}>•</div>
                        <OrganizerImage src={ModSquad_Banner} alt={"Mod_Squad"} />
                        <div className={"hidden text-xl text-white lg:block"}>•</div>
                        <OrganizerImage src={Jiangles_Banner} alt={"Jiangles"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
