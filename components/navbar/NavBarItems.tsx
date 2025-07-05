"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import Text from "../Text/Text";

export default function NavBarItems({ isMobile = false }: { isMobile?: boolean }) {
    const links = [
        { name: "Tổ chức", href: "/crew" },
        { name: "Kỷ niệm", href: "/retro" },
    ];

    const pathname = usePathname();

    if (isMobile) {
        return (
            <>
                <li>
                    <details>
                        <summary>Sự kiện</summary>
                        <ul>
                            <li>
                                <Link
                                    href={"/event/timeline"}
                                    className={classNames({
                                        "bg-black text-white": pathname === "/event/timeline",
                                        "text-black": pathname !== "/event/timeline",
                                    })}
                                >
                                    Timeline
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/event/schedule"}
                                    className={classNames({
                                        "bg-black text-white": pathname === "/event/schedule",
                                        "text-black": pathname !== "/event/schedule",
                                    })}
                                >
                                    Lịch trình
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/event/location"}
                                    className={classNames({
                                        "bg-black text-white": pathname === "/event/location",
                                        "text-black": pathname !== "/event/location",
                                    })}
                                >
                                    Địa điểm
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/event/rules"}
                                    className={classNames({
                                        "bg-black text-white": pathname === "/event/rules",
                                        "text-black": pathname !== "/event/rules",
                                    })}
                                >
                                    Nội quy
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className={classNames({
                                "bg-black text-white": pathname === link.href,
                                "text-black": pathname !== link.href,
                            })}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <details>
                        <summary>Tournament</summary>
                        <ul>
                            <li>
                                <Link
                                    href={"/tournament/overview"}
                                    className={classNames({
                                        "bg-black text-white": pathname === "/tournament/overview",
                                        "text-black": pathname !== "/tournament/overview",
                                    })}
                                >
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/tournament/rules"}
                                    className={classNames({
                                        "bg-black text-white": pathname === "/tournament/rules",
                                        "text-black": pathname !== "/tournament/rules",
                                    })}
                                >
                                    Luật chơi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/tournament/prizes"}
                                    className={classNames({
                                        "bg-black text-white": pathname === "/tournament/prizes",
                                        "text-black": pathname !== "/tournament/prizes",
                                    })}
                                >
                                    Giải thưởng
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </>
        );
    }

    return (
        <div
            className={
                "relative hidden cursor-pointer items-center gap-4 text-base font-semibold text-black lg:flex"
            }
        >
            <div className={"dropdown dropdown-hover"}>
                <Text
                    type={"title-4"}
                    className={classNames(
                        "relative rounded-md px-3 py-2 transition-all duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transform after:transition-transform after:duration-200 after:ease-in-out after:content-['']",
                        {
                            "font-bold text-black after:scale-x-100 after:bg-black":
                                pathname.includes("/event"),
                            "text-black after:scale-x-0 after:bg-black hover:after:scale-x-100":
                                !pathname.includes("/event"),
                        },
                    )}
                >
                    Sự kiện
                </Text>
                <ul
                    tabIndex={0}
                    className={"dropdown-content menu rounded-box w-52 bg-white p-2 shadow-sm"}
                >
                    <li>
                        <Link
                            href={"/event/timeline"}
                            className={classNames({
                                "bg-black text-white": pathname === "/event/timeline",
                                "text-black": pathname !== "/event/timeline",
                            })}
                        >
                            Timeline
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/event/schedule"}
                            className={classNames({
                                "bg-black text-white": pathname === "/event/schedule",
                                "text-black": pathname !== "/event/schedule",
                            })}
                        >
                            Lịch trình
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/event/location"}
                            className={classNames({
                                "bg-black text-white": pathname === "/event/location",
                                "text-black": pathname !== "/event/location",
                            })}
                        >
                            Địa điểm
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/event/rules"}
                            className={classNames({
                                "bg-black text-white": pathname === "/event/rules",
                                "text-black": pathname !== "/event/rules",
                            })}
                        >
                            Nội quy
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={"h-0.5 w-8 bg-black"} />
            {links.map((link, index) => (
                <Fragment key={link.name}>
                    {index !== 0 && <div className={"h-0.5 w-8 bg-black"} />}
                    <Link
                        href={link.href}
                        className={classNames(
                            "relative rounded-md px-3 py-2 transition-all duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transform after:transition-transform after:duration-200 after:ease-in-out after:content-['']",
                            {
                                "font-bold text-black after:scale-x-100 after:bg-black":
                                    pathname === link.href,
                                "text-black after:scale-x-0 after:bg-black hover:after:scale-x-100":
                                    pathname !== link.href,
                            },
                        )}
                    >
                        <Text type={"title-4"}>{link.name}</Text>
                    </Link>
                </Fragment>
            ))}
            <div className={"h-0.5 w-8 bg-black"} />
            <div className={"dropdown dropdown-hover"}>
                <Text
                    type={"title-4"}
                    className={classNames(
                        "relative rounded-md px-3 py-2 transition-all duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transform after:transition-transform after:duration-200 after:ease-in-out after:content-['']",
                        {
                            "font-bold text-black after:scale-x-100 after:bg-black":
                                pathname.includes("/tournament"),
                            "text-black after:scale-x-0 after:bg-black hover:after:scale-x-100":
                                !pathname.includes("/tournament"),
                        },
                    )}
                >
                    Tournament
                </Text>
                <ul
                    tabIndex={0}
                    className={"dropdown-content menu rounded-box w-52 bg-white p-2 shadow-sm"}
                >
                    <li>
                        <Link
                            href={"/tournament/overview"}
                            className={classNames({
                                "bg-black text-white": pathname === "/tournament/overview",
                                "text-black": pathname !== "/tournament/overview",
                            })}
                        >
                            Giới thiệu
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/tournament/rules"}
                            className={classNames({
                                "bg-black text-white": pathname === "/tournament/rules",
                                "text-black": pathname !== "/tournament/rules",
                            })}
                        >
                            Luật chơi
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/tournament/prizes"}
                            className={classNames({
                                "bg-black text-white": pathname === "/tournament/prizes",
                                "text-black": pathname !== "/tournament/prizes",
                            })}
                        >
                            Giải thưởng
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={"h-0.5 w-32 bg-black"} />
        </div>
    );
}
