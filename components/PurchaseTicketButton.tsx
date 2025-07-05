"use client";

import Link from "next/link";

import Text from "./Text/Text";

export default function PurchaseTicketButton() {
    return (
        <>
            <Link
                href={"/tickets"}
                className={
                    "btn sm:btn-sm md:btn-md lg:btn-lg hover:btn-outline rounded-2xl bg-black text-white hover:bg-white hover:text-black"
                }
            >
                <Text type={"title-4"} weight={600}>
                    Mua vé
                </Text>
            </Link>
        </>
    );
}
