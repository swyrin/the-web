"use client";

import Link from "next/link";

export default function NavbarItems() {
    // https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
    // https://nextjs.org/docs/app/api-reference/functions/use-router#migrating-from-nextrouter

    return (
        <>
            <li>
                <Link className={"lg:w-40 lg:justify-center"} href={"/about/dreamchasers"}>
                    Chúng tôi là ai?
                </Link>
            </li>
            <li>
                <Link className={"lg:w-25 lg:justify-center"} href={"/about/crew"}>
                    Staff
                </Link>
            </li>
            <li>
                <Link className={"lg:w-30 lg:justify-center"} href={"/timeline"}>
                    Timeline
                </Link>
            </li>
            <li>
                <details>
                    <summary className={"lg:w-30 lg:justify-center"}>Kỉ niệm</summary>
                    <ul>
                        <li>
                            <Link href={"/about/events/the-show-must-go-on"}>
                                2024 - &quot;The show must go on!&quot;
                            </Link>
                        </li>
                    </ul>
                </details>
            </li>
        </>
    );
}
