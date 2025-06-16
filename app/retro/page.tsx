import PageTitle from "@/components/PageTitle";
import Dreamchasers from "@/public/retro/dreamchasers/dreamchasers.png";
import TheShowMustGoOn from "@/public/retro/the-show-must-go-on/the-show-must-go-on.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type RetroItemProps = {
    title: string;
    description: string;
    imageSrc: StaticImageData | string;
    href: string;
};

function RetroItem(props: RetroItemProps) {
    return (
        <Link
            href={props.href}
            className={
                "card lg:card-side mx-8 mb-10 w-96 shadow-2xl/25 shadow-white md:mx-32 lg:w-256"
            }
        >
            <figure className={"h-30 w-96"}>
                <Image src={props.imageSrc} alt={"retro_image"} />
            </figure>
            <div
                className={
                    "card-body flex items-center justify-center rounded-b-lg bg-white md:rounded-r-lg md:rounded-bl-none lg:w-180 lg:flex-col"
                }
                data-theme={"light"}
            >
                <div className={"font-lg card-title text-base-content text-center hover:underline"}>
                    {props.title}
                </div>
                <p className={"text-base-content text-center"}>{props.description}</p>
            </div>
        </Link>
    );
}

export default function RetroPage() {
    return (
        <div className={"layout-height bg-[url(/BG_Black.png)] bg-cover bg-fixed bg-no-repeat"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <div>
                        <PageTitle
                            title={"Kỷ niệm"}
                            favorText={"Nơi lưu giữ album của những buổi Offline."}
                            dark
                        />
                    </div>
                </div>
            </div>
            <div
                className={"flex flex-col items-center justify-center space-y-8"}
                data-theme={"dark"}
            >
                <RetroItem
                    title={"VNS Offline 2024: The Show Must Go On!"}
                    description={
                        "Offline đầu tiên của VNS, cũng như là tiền đề cho Dreamchasers và VNS Network."
                    }
                    href={"#"}
                    imageSrc={TheShowMustGoOn}
                />

                <RetroItem
                    title={"VNS Offline 2025: Dreamchasers"}
                    description={"COMING SOON!"}
                    href={"#"}
                    imageSrc={Dreamchasers}
                />
            </div>
        </div>
    );
}
