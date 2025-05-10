import heroBanner from "@/public/VNS_Hero_Banner.png";
import Image from "next/image";

export default function Home() {
    return (
        <div
            className={"hero layout-height layout-height-sm"}
            style={{
                backgroundImage: `url(${heroBanner.src})`,
                width: "100%",
                height: "auto",
            }}
        >
            <div className={"hero-overlay"}></div>
            <div className={"hero-content flex flex-col place-content-center-safe gap-y-5"}>
                <Image className={"invert"} src={"/VNS_Banner.png"} alt={"VNS-banner"} width={650} height={225} />

                <div className={"hidden font-light text-white italic"}>
                    Every artist paints with a fiery soul <br />
                    Every poet weaves words into prayers <br />
                    Every dream has its own chasers. <br />
                    And we, &quot;The Dreamchasers&quot;, <br />
                    will be the ones to carve it from hope.
                </div>

                <div className={"absolute bottom-10 place-content-center-safe text-center"}>
                    <span className={"m-5 text-xs text-white"}>Được mang đến cho bạn bởi</span>

                    <div className={"space-y-5 text-white lg:flex lg:flex-row lg:space-x-8"}>
                        <Image
                            src={"/organizers/vcl_banner.png"}
                            className={"h-max"}
                            alt={"VCL_banner"}
                            width={323}
                            height={50}
                        />
                        <Image
                            src={"/organizers/vcl_banner.png"}
                            className={"h-max"}
                            alt={"VCL_banner"}
                            width={323}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
