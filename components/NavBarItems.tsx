import Link from "next/link";

export default function NavbarItems() {
    return (
        <div className="lg:grid lg:grid-cols-3 lg:place-items-center-safe">
            <li>
                <Link href={"/about/dreamchasers"}>Chúng tôi là ai?</Link>
            </li>
            <li>
                <Link href={"/about/crew"}>Nhân sự</Link>
            </li>
            <li>
                <Link href={"/timeline"}>Kế hoạch</Link>
            </li>
        </div>
    );
}
