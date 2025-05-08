import MemberBox from "@/components/MemberBox";
import { VNS_Member } from "@/lib/vns_types";
import crewList from "@/public/crew.json";

export default function CrewPage() {
    const members: VNS_Member[] = crewList.members;

    return (
        <div className={"py-10"}>
            <div className={"grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5"}>
                {members.map((member) => {
                    return <MemberBox key={member.name} name={member.name} role={member.role} quote={member.quote} />;
                })}
            </div>
        </div>
    );
}
