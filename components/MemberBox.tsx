import { VNS_Member } from "@/lib/types/vns_types";
import Image from "next/image";

export default function MemberBox(props: VNS_Member) {
    return (
        <div className={"h-65 w-72"}>
            <Image
                className={"mx-auto rounded-full shadow-lg"}
                src={`/crew/${props.name}.png`}
                width={100}
                height={100}
                alt={"VNS_Crew"}
            />
            <div className={"text-center text-xl font-extrabold"}>{props.name}</div>
            {props.quote !== "" && (
                <div className={"text-md text-center"}>&#34;{props.quote}&#34;</div>
            )}
            <div className={"flex justify-center gap-2 py-1"}>
                {Array.isArray(props.role) &&
                    props.role.map((role: string) => (
                        <span
                            key={role}
                            className={`crew-role-generic px-2 py-1 text-center ${role} min-w-12`}
                        >
                            {role.replaceAll("_", " ")}
                        </span>
                    ))}
            </div>
        </div>
    );
}
