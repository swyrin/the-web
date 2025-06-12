import { VNS_Member } from "@/lib/types/vns_member";
import Image from "next/image";

export default function MemberBox(props: VNS_Member) {
    return (
        <div className={"my-auto h-65 w-80 p-8 text-center"}>
            <Image
                className={"mx-auto rounded-full shadow-lg"}
                src={`/crew/${props.name}.png`}
                width={100}
                height={100}
                alt={"VNS_Crew"}
            />
            <div className={"py-1 text-xl font-extrabold"}>{props.name}</div>
            <div className={"flex flex-wrap justify-center gap-2 py-1"}>
                {Array.isArray(props.role) &&
                    props.role.map((role: string) => (
                        <span
                            key={role}
                            className={`crew-role-generic px-2 py-1 text-center ${role}`}
                            style={{
                                minWidth: "7rem",
                                width: "fit-content",
                                display: "inline-block",
                            }}
                        >
                            {role.replaceAll("_", " ")}
                        </span>
                    ))}
            </div>
            {props.quote !== "" && (
                <div className={"py-1 text-xs text-gray-600 italic"}>
                    &#34;{props.quote}&#34;
                </div>
            )}
        </div>
    );
}
