"use client";

import { useRouter } from "next/navigation";
import PageTitle from "@/components/PageTitle";

export default function NotFoundPage() {
    const navigation = useRouter();

    return (
        <div className={"h-visible vns-background flex flex-col"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle dark favorText={"Có vẻ đây là đường cụt."} title={"Well..."} />
                </div>
            </div>
            <div
                className={"flex flex-1/2 flex-col items-center justify-center"}
                data-theme={"dark"}
            >
                <div className={"text-3xl font-bold text-base-content"}>
                    Không có gì ở đây hết á, hoặc là chúng tôi đang trên đường nấu.
                </div>
                <div
                    className={"text-lg font-extralight text-base-content italic hover:underline"}
                    onClick={() => navigation.back()}
                >
                    (bấm vô đây để về trang trước)
                </div>
            </div>
        </div>
    );
}
