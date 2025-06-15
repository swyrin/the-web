import Link from "next/link";

type DividerProps = {
    width: number;
};

function Divider(props: DividerProps) {
    return <div className={"h-[3px] bg-black"} style={{ width: props.width + "px" }} />;
}

export default function NavBarItems({ isMobile = false }: { isMobile?: boolean }) {
    const links = [
        { name: "Sự kiện", href: "#" },
        { name: "Tổ chức", href: "/about/crew" },
        { name: "Kỷ niệm", href: "/retro" },
        { name: "Tournament", href: "#" },
    ];

    if (isMobile) {
        return (
            <>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </>
        );
    }

    return (
        <div
            className={
                "hidden items-center text-base text-[0.993rem] font-semibold text-black lg:flex"
            }
        >
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
