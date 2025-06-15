import Link from "next/link";

type DividerProps = {
    width: number;
};

function Divider(props: DividerProps) {
    return <div className={"h-[3px] bg-black"} style={{ width: props.width + "px" }} />;
}

export default function NavBarItems({ isMobile = false }: { isMobile?: boolean }) {
    const links = [
        { name: "Tổ chức", href: "/about/crew" },
        { name: "Kỷ niệm", href: "/retro" },
        { name: "Tournament", href: "#" },
    ];

    if (isMobile) {
        return (
            <>
                <li>
                    <details>
                        <summary>Sự kiện</summary>
                        <ul>
                            <li>
                                <Link href={"/event/timeline"}>Timeline</Link>
                            </li>
                            <li>
                                <Link href={"/event/schedule"}>Lịch trình</Link>
                            </li>
                            <li>
                                <Link href={"/event/location"}>Địa điểm</Link>
                            </li>
                        </ul>
                    </details>
                </li>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </>
        );
    }

    return (
        <div className={"hidden items-center text-base font-semibold text-black lg:flex"}>
            <div className={"dropdown dropdown-hover"}>
                <div tabIndex={0} className={"pr-5 text-xl underline-offset-5 hover:underline"}>
                    Sự kiện
                </div>
                <ul
                    tabIndex={0}
                    className={"dropdown-content menu rounded-box z-1 w-52 bg-white p-2 shadow-sm"}
                >
                    <li>
                        <Link href={"/event/timeline"}>Timeline</Link>
                    </li>
                    <li>
                        <Link href={"/event/schedule"}>Lịch trình</Link>
                    </li>
                    <li>
                        <Link href={"/event/location"}>Địa điểm</Link>
                    </li>
                </ul>
            </div>
            <Divider width={72} />
            {links.map((link, index) => (
                <div key={link.name} className={"flex items-center"}>
                    {index !== 0 && <Divider width={72} />}
                    <Link
                        className={"px-5 text-xl underline-offset-5 hover:underline"}
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                </div>
            ))}
            <Divider width={140} />
        </div>
    );
}
