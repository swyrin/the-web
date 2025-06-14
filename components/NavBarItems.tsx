import Link from "next/link";

function Divider() {
    return <div className={`h-[2px] w-[33px] bg-black`} />;
}

export default function NavBarItems({ isMobile = false }: { isMobile?: boolean }) {
    const links = [
        { name: "Sự kiện", href: "#" },
        { name: "Tổ chức", href: "/about/crew" },
        { name: "Kỷ niệm", href: "#" },
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
        <div className={"hidden items-center text-base font-semibold text-black lg:flex"}>
            {links.map((link, index) => (
                <div key={link.name} className={"flex items-center"}>
                    {index !== 0 && <Divider />}
                    <Link className={"px-5 underline-offset-5 hover:underline"} href={link.href}>
                        {link.name}
                    </Link>
                </div>
            ))}
            <Divider />
        </div>
    );
}
