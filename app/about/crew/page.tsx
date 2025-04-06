import { VNS_Member } from "@/app/about/crew/index";
import MemberBox from "@/components/MemberBox";
import crewList from "@/data/crew.json";

function CrewListing() {
    const members: VNS_Member[] = crewList.members;

    return members.map((member) => {
        return (
            <MemberBox
                key={member.name}
                image={member.image}
                name={member.name}
                role={member.role}
                quote={member.quote}
            />
        );
    });
}

export default function CrewPage() {
    return (
        <div className={"py-10"}>
            <div className={"grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5"}>
                <CrewListing />
            </div>
        </div>
    );
}
