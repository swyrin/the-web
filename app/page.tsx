"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import OrganizerImage from "@/components/OrganizerImage";
import DRCH_Banner from "@/public/DRCH_Banner_Group.png";
import Jiangles_Banner from "@/public/organizers/jiangles_banner.png";
import ModSquad_Banner from "@/public/organizers/mod_squad_banner.png";
import VNS_Banner from "@/public/organizers/vns_banner.png";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export default function Home() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const targetDate = new Date("2025-08-10T09:15:00+07:00");
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={"hero h-visible"}>
            {/* Embla Carousel Autoplay Section */}
            <div className={"embla absolute inset-0 z-0 h-full w-full"} ref={emblaRef}>
                <div className={"embla__container h-full w-full"}>
                    {[1, 2, 3, 4, 5, 6].map(img => (
                        <div className={"embla__slide relative h-full w-full"} key={img}>
                            <Image
                                src={`/landing-bg/BG_${img}.jpg`}
                                alt={`Banner ${img + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                                priority={img === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={"hero-overlay z-0"}></div>
            <div className={"hero-content flex flex-col place-content-center-safe"}>
                <Image src={DRCH_Banner} alt={"DRCH"} width={708} height={185} />

                <div className={"text-center px-4"}>
                    <div className={"text-white mb-2 text-xl font-extrabold"}>Sự kiện sẽ bắt đầu trong</div>
                    <div className={"flex gap-2 md:gap-4 text-white max-w-md md:max-w-none mx-auto"}>
                        {[
                            { value: timeLeft.days, label: "Ngày" },
                            { value: timeLeft.hours, label: "Giờ" },
                            { value: timeLeft.minutes, label: "Phút" },
                            { value: timeLeft.seconds, label: "Giây" },
                        ].map(item => (
                            <div key={item.label} className={"flex flex-col items-center"}>
                                <div className={"text-xl md:text-3xl font-bold bg-black/75 py-1 md:py-2 rounded border-2 border-white w-[3rem] md:w-[4rem] flex items-center justify-center"}>
                                    {item.value.toString().padStart(2, "0")}
                                </div>
                                <div className={"text-xs md:text-sm font-bold mt-1"}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={"absolute bottom-5 flex flex-col gap-y-2 text-center"}>
                    <span className={"text-lg text-white"}>Được mang đến cho bạn bởi</span>
                    <div className={"flex items-center gap-x-8 gap-y-4 text-white"}>
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
