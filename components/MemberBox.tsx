import { VNS_Member } from "@/app/about/crew";
import Image from "next/image";

export default function MemberBox(props: VNS_Member) {
    return (
        <div className={"my-auto inline-grid h-96 w-56 p-10 text-center"}>
            <Image
                className={"mx-auto object-center"}
                src={"/VNS_Logo.png"}
                width={100}
                height={100}
                alt={"VNS_Member"}
            />
            <div className={"text-xl font-extrabold"}>{props.name}</div>
            <div className={"text-2xl"}>{props.role.replace("_", " ")}</div>
            <div className={"text-sm italic"}>&#34;{props.quote}&#34;</div>
        </div>
    );
}
