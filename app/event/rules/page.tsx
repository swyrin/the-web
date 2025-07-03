// import InProgress from "@/components/InProgress";
import PageTitle from "@/components/PageTitle";
import Bag from "@/public/rules/bag.png";
import Broom from "@/public/rules/broom.png";
import Chat from "@/public/rules/chat.png";
import Children from "@/public/rules/children.png";
import Clothes from "@/public/rules/clothes.png";
import Hammer from "@/public/rules/hammer.png";
import People from "@/public/rules/people.png";
import Pet from "@/public/rules/pet.png";
import Scale from "@/public/rules/scale.png";
import Stop from "@/public/rules/stop.png";
import Syringe from "@/public/rules/syringe.png";
import Weapon from "@/public/rules/weapon.png";
import Image, { StaticImageData } from "next/image";
import React from "react";

function VerticalLine({ height }: { height: number }) {
    return <div className={"w-0 border-2 border-white"} style={{ height: `${height}px` }}></div>;
}

function RuleSection({
    title,
    titleColor,
    description,
    side,
}: {
    title: string;
    titleColor: "red" | "green";
    description: string;
    side: "left" | "right";
}) {
    return (
        <div
            className={`grid h-50 w-full content-center md:max-w-100 ${side === "left" ? "justify-items-end" : "justify-items-start"}`}
        >
            <div
                className={`flex flex-col gap-1 ${side == "left" ? "items-end text-right" : "items-start text-left"}`}
            >
                <h1
                    className={`${titleColor == "red" ? "text-[#FF4B4E]" : "text-[#75FF4B]"} text-2xl font-medium md:text-5xl`}
                >
                    {title}
                </h1>
                <p
                    className={`${side == "left" ? "text-right" : "text-left"} text-xs font-medium text-white md:text-xl`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function RulesPage() {
    const rules: {
        title: string;
        titleColor: "red" | "green";
        description: string;
        icon: StaticImageData;
    }[] = [
        {
            title: "CẤM",
            titleColor: "red",
            description:
                "tất cả các hình thức quấy rối, xâm phạm đến tài sản và quyền riêng tư cá nhân.",
            icon: Stop,
        },
        {
            title: "CẤM",
            titleColor: "red",
            description:
                "mang vũ khí quân sự (s.ú.n.g, d.a.o,...) và các vật dụng nguy hiểm vào trong khu vực sự kiện.",
            icon: Weapon,
        },
        {
            title: "CẤM",
            titleColor: "red",
            description:
                "tất cả các loại chất kích thích, cấm các hành vi gây mất trật tự công cộng.",
            icon: Syringe,
        },
        {
            title: "CẤM",
            titleColor: "red",
            description: "bàn về chính trị, phân biệt vùng miền, gây mâu thuẫn, và bạo lực.",
            icon: Scale,
        },
        {
            title: "CẤM",
            titleColor: "red",
            description:
                "Cấm các trang phục phản cảm, trang phục thuộc quân phục, cảnh phục... không phù hợp với thuần phong mỹ tục hay tính chất của sự kiện.",
            icon: Clothes,
        },
        {
            title: "CẤM",
            titleColor: "red",
            description: "Cấm mang vật nuôi, thú vật vào sự kiện.",
            icon: Pet,
        },
        {
            title: "CẤM",
            titleColor: "red",
            description:
                "Những hành vi gây tổn hại đến cơ sở vật chất của khuôn viên sự kiện sẽ phải chịu trách nhiệm và đền bù.",
            icon: Hammer,
        },
        {
            title: "BẮT BUỘC",
            titleColor: "red",
            description: "Trẻ em dưới 13 tuổi cần có sự giám sát và quản lý của người lớn.",
            icon: Children,
        },
        {
            title: "HÃY",
            titleColor: "green",
            description: "Giữ gìn vệ sinh chung khuôn viên sự kiện",
            icon: Broom,
        },
        {
            title: "VUI LÒNG",
            titleColor: "green",
            description: "Tự quản tư trang cá nhân. Mọi mất mát BTC sẽ không chịu trách nhiệm. ",
            icon: Bag,
        },
        {
            title: "NẾU",
            titleColor: "green",
            description: "Nhặt được đồ thất lạc vui lòng liên hệ BTC để nhận hỗ trợ.",
            icon: Chat,
        },
        {
            title: "KHI",
            titleColor: "green",
            description:
                "Xảy ra sự cố, xung đột hay tranh chấp... tại offline, quyết định của BTC là quyết định tiên quyết.",
            icon: People,
        },
    ];
    return (
        <>
            <div className={"h-visible vns-background"}>
                <div className={"hero"}>
                    <div className={"hero-content text-center"}>
                        <PageTitle title={"NỘI QUY"} favorText={""} dark />
                    </div>
                </div>
                <div className={"h-full flex-1 px-5"}>
                    <div className={"flex w-full flex-col items-center justify-center"}>
                        <div
                            className={"mb-10 grid w-full md:mb-50 md:gap-5"}
                            style={{ gridTemplateColumns: "1fr 100px 1fr" }}
                        >
                            <div className={"mt-10 flex flex-col items-end justify-start gap-50"}>
                                {rules
                                    .filter((_, index) => index % 2 === 0)
                                    .map((rule, index) => {
                                        return (
                                            <RuleSection
                                                key={index}
                                                title={rule.title}
                                                titleColor={rule.titleColor}
                                                description={rule.description}
                                                side="left"
                                            />
                                        );
                                    })}
                            </div>

                            <div className={"flex flex-col items-center justify-center"}>
                                <VerticalLine height={50} />
                                {rules.map((rule, index) => (
                                    <React.Fragment key={index}>
                                        <div
                                            className={"flex h-25 w-25 items-center justify-center"}
                                            key={index}
                                        >
                                            <div className={"relative h-3/4 w-3/4"}>
                                                <Image
                                                    src={rule.icon}
                                                    alt={"icon"}
                                                    fill
                                                    className={`${rule.icon == Hammer ? "pb-4" : ""} object-contain`}
                                                />
                                            </div>
                                        </div>
                                        {index != rules.length - 1 ? (
                                            <VerticalLine height={100} />
                                        ) : (
                                            <></>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className={"mt-60 flex flex-col items-start justify-start gap-50"}>
                                {rules
                                    .filter((_, index) => index % 2 === 1)
                                    .map((rule, index) => {
                                        return (
                                            <RuleSection
                                                key={index}
                                                title={rule.title}
                                                titleColor={rule.titleColor}
                                                description={rule.description}
                                                side={"right"}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
