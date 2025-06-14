import { VNS_Member } from "@/lib/types/vns_types";
import Image from "next/image";

export default function MemberBox(props: VNS_Member) {
    return (
        <div className={"h-60 w-78"}>
            <Image
                className={"mx-auto rounded-full shadow-lg"}
                src={`/crew/${props.name}.png`}
                width={100}
                height={100}
                alt={"VNS_Crew"}
            />
            <div className={"py-1 text-center text-xl font-extrabold"}>{props.name}</div>
            {props.quote !== "" && (
                <div className={"py-1 text-center text-xs text-gray-600 italic"}>
                    &#34;{props.quote}&#34;
                </div>
            )}
            <div className={"flex flex-wrap justify-center gap-2 py-1"}>
                {Array.isArray(props.role) &&
                    props.role.map((role: string) => {
                        const roleClass = role
                            .toLowerCase()
                            .replace(/_/g, "-")
                            .replace(/\[|\]/g, "")
                            .replace(/&/g, "and");
                        return (
                            <span
                                key={role}
                                className={`crew-role-generic px-3 py-1 text-center ${roleClass} inline-block min-w-[3rem]`}
                            >
                                {role.replaceAll("_", " ")}
                            </span>
                        );
                    })}
            </div>
        </div>
    );
}
