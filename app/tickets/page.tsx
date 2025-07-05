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
            <div
                className={"my-8 flex flex-col items-center justify-center space-y-12"}
                data-theme={"dark"}
            >
                <div
                    className={
                        "relative mx-4 flex max-w-192 flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-white/80 bg-black/70 p-4 shadow-lg"
                    }
                >
                    {/* Blue part (Image) */}
                    <div className={"relative z-[1] w-full"}>
                        <Image
                            src={"/tickets/prisma_whale.jpg"}
                            alt={""}
                            width={600}
                            height={60}
                            className={"h-[80px] w-full rounded-md object-cover"}
                        />
                        <div
                            className={
                                "absolute top-0 left-0 z-[2] flex h-[80px] w-full items-center justify-center text-[2.5rem] font-bold tracking-wider text-[#222]"
                            }
                        >
                            WHALE TIER
                        </div>
                    </div>
                    {/* Content */}
                    <div
                        className={"flex flex-col items-center justify-center px-4 py-8 text-white"}
                    >
                        <div className={"mb-2 text-lg font-bold"}>
                            {"Bao gồm quà từ "}
                            <span className={"font-extrabold"}>Dolphin Tier</span>
                        </div>
                        <div className={"mb-1 text-xl font-light"}>
                            Badge Amiya – Chasing the Dream
                        </div>
                        <div className={"mb-6 text-xl font-light"}>Lanyard – Dreamchasers</div>
                        <div className={"mb-0 text-4xl font-extrabold"}>199.000</div>
                        <div className={"text-lg font-bold tracking-widest"}>VNĐ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
