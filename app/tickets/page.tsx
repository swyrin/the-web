import PageTitle from "@/components/PageTitle";
import Image from "next/image";

export default function OverviewPage() {
    return (
        <div className={"h-visible vns-background"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle title={"Mua vé"} favorText={""} dark />
                </div>
            </div>
            {/* Whale & Dolphin tiers */}
            <div
                className={"my-8 flex flex-col items-stretch justify-center gap-8 lg:flex-row"}
                data-theme={"dark"}
            >
                {/* Dolphin Tier */}
                <div
                    className={
                        "relative mx-4 flex max-w-192 flex-1 flex-col items-center overflow-hidden rounded-3xl border-4 border-white/80 bg-black/70 p-4 shadow-lg"
                    }
                >
                    <div className={"relative w-full"}>
                        <Image
                            src={"/tickets/prisma_dolphin.jpg"}
                            alt={""}
                            width={600}
                            height={60}
                            className={"h-[80px] w-full rounded-md object-cover"}
                        />
                        <div
                            className={
                                "absolute top-0 left-0 flex h-[80px] w-full items-center justify-center text-[2rem] font-bold tracking-wider text-[#222] lg:text-[2.5rem]"
                            }
                            style={{ textShadow: "0 2px 8px #fff, 0 1px 0 #ffe066" }}
                        >
                            DOLPHIN TIER
                        </div>
                    </div>
                    <div
                        className={"flex flex-col items-center justify-center px-4 py-8 text-white"}
                    >
                        <div className={"mb-2 text-lg font-bold"}>
                            Keychain Amiya - Chasing the Dream
                        </div>
                        <div className={"mb-2 text-lg font-bold"}>
                            Sticker (ngẫu nhiên 1 trong 4)
                        </div>
                        <div className={"mb-2 text-lg font-bold"}>
                            {"Badge nắp chai by "}
                            <span className={"font-extrabold"}>Rei Não Cá</span>
                        </div>
                        <div className={"mb-6 text-lg font-bold"}>
                            {"Card bo góc by "}
                            <span className={"font-extrabold"}>Rei Não Cá</span>
                        </div>
                        <div className={"mb-0 text-4xl font-extrabold"}>119.000</div>
                        <div className={"text-lg font-bold tracking-widest"}>VNĐ</div>
                    </div>
                </div>
                {/* Whale Tier */}
                <div
                    className={
                        "relative mx-4 flex max-w-192 flex-1 flex-col items-center overflow-hidden rounded-3xl border-4 border-white/80 bg-black/70 p-4 shadow-lg"
                    }
                >
                    <div className={"relative w-full"}>
                        <Image
                            src={"/tickets/prisma_whale.jpg"}
                            alt={""}
                            width={600}
                            height={60}
                            className={"h-[80px] w-full rounded-md object-cover"}
                        />
                        <div
                            className={
                                "absolute top-0 left-0 flex h-[80px] w-full items-center justify-center text-[2rem] font-bold tracking-wider text-[#222] lg:text-[2.5rem]"
                            }
                            style={{ textShadow: "0 2px 8px #fff, 0 1px 0 #ffe066" }}
                        >
                            WHALE TIER
                        </div>
                    </div>
                    <div
                        className={"flex flex-col items-center justify-center px-4 py-8 text-white"}
                    >
                        <div className={"mb-2 text-lg font-bold"}>Bao gồm quà từ Dolphin Tier</div>
                        <div className={"mb-2 text-lg font-bold"}>
                            Badge Amiya - Chasing the Dream
                        </div>
                        <div className={"mb-2 text-lg font-bold"}>
                            {"Badge nắp chai by "}
                            Lanyard Dreamchasers
                        </div>
                        <div className={"mb-6 text-lg font-bold"}>
                            <span className={"font-extrabold"}> </span>
                        </div>
                        <div className={"mb-0 text-4xl font-extrabold"}>199.000</div>
                        <div className={"text-lg font-bold tracking-widest"}>VNĐ</div>
                    </div>
                </div>
            </div>
            {/*Dreamchasers Tier*/}
            <div
                className={
                    "relative mx-4 flex max-w-full flex-1 flex-col items-center overflow-hidden rounded-3xl border-4 border-white/80 bg-black/70 p-4 shadow-lg"
                }
            >
                <div className={"relative w-full"}>
                    <Image
                        src={"/tickets/prisma_dreamchasers.jpg"}
                        alt={""}
                        width={600}
                        height={90}
                        className={"h-[80px] w-full rounded-md object-cover"}
                    />
                    <div
                        className={
                            "absolute top-0 left-0 flex h-[80px] w-full items-center justify-center text-[2rem] font-bold tracking-wider text-[#222] lg:text-[2.5rem]"
                        }
                        style={{ textShadow: "0 2px 8px #fff, 0 1px 0 #ffe066" }}
                    >
                        DREAMCHASERS TIER
                    </div>
                </div>
                <div className={"flex flex-col items-center justify-center px-4 py-8 text-white"}>
                    <div className={"mb-2 text-lg font-bold"}>Bao gồm quà từ Whale Tier</div>
                    <div className={"mb-2 text-lg font-bold"}>← Áo thun Dreamchasers →</div>
                    <div className={"mb-2 text-lg font-bold"}>Badge Logos/Eyja của bibom 10</div>
                    <div className={"mb-0 text-4xl font-extrabold"}>269.000</div>
                    <div className={"text-lg font-bold tracking-widest"}>VNĐ</div>
                </div>
            </div>
        </div>
    );
}
