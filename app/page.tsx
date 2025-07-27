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
        <div className={"h-visible hero"}>
            {/* Embla Carousel Autoplay Section */}
            <div ref={emblaRef} className={"embla absolute inset-0 z-0 size-full"}>
                <div className={"embla__container size-full"}>
                    {[1, 2, 3, 4, 5, 6].map(img => (
                        <div key={img} className={"embla__slide relative size-full"}>
                            <Image
                                alt={`Banner ${img + 1}`}
                                fill
                                priority={img === 0}
                                src={`/landing-bg/BG_${img}.jpg`}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={"z-0 hero-overlay"}></div>
            <div className={"hero-content flex flex-col place-content-center-safe"}>
                <Image alt={"DRCH"} height={185} src={DRCH_Banner} width={708} />

                <div className={"px-4 text-center"}>
                    <div className={"mb-2 text-xl font-extrabold text-white"}>Sự kiện sẽ bắt đầu trong</div>
                    <div className={"mx-auto flex max-w-md gap-2 text-white md:max-w-none md:gap-4"}>
                        {[
                            { value: timeLeft.days, label: "Ngày" },
                            { value: timeLeft.hours, label: "Giờ" },
                            { value: timeLeft.minutes, label: "Phút" },
                            { value: timeLeft.seconds, label: "Giây" },
                        ].map(item => (
                            <div key={item.label} className={"flex flex-col items-center"}>
                                <div className={"flex w-[3rem] items-center justify-center rounded-sm border-2 border-white bg-black/75 py-1 text-xl font-bold md:w-[4rem] md:py-2 md:text-3xl"}>
                                    {item.value.toString().padStart(2, "0")}
                                </div>
                                <div className={"mt-1 text-xs font-bold md:text-sm"}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={"absolute bottom-5 flex flex-col gap-y-2 text-center"}>
                    <span className={"text-lg text-white"}>Được mang đến cho bạn bởi</span>
                    <div className={"flex items-center gap-x-8 gap-y-4 text-white"}>
                        <OrganizerImage alt={"VNS"} src={VNS_Banner} />
                        <div className={"hidden text-xl text-white lg:block"}>•</div>
                        <OrganizerImage alt={"Mod_Squad"} src={ModSquad_Banner} />
                        <div className={"hidden text-xl text-white lg:block"}>•</div>
                        <OrganizerImage alt={"Jiangles"} src={Jiangles_Banner} />
                    </div>
                </div>
            </div>
        </div>
    );
}
