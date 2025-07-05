import PageTitle from "@/components/PageTitle";
import TimelineItem from "@/components/TimelineItem";
import Hourglass from "@/public/Hourglass.png";
import Image from "next/image";

export default function SchedulePage() {
    return (
        <div className={"h-visible vns-background flex flex-col"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle title={"Lịch trình"} favorText={""} dark />
                </div>
            </div>
            <div className={"flex flex-1/2 flex-col justify-center"} data-theme={"dark"}>
                <ul className={"timeline timeline-vertical lg:timeline-horizontal flex w-full"}>
                    <TimelineItem date={"09:15"} data={"Mở Check-in\n&\nBắt đầu Offline"} head />

                    <TimelineItem date={"09:30"} data={"Mini-games"} right />

                    <TimelineItem date={"12:20"} data={"Gacha banner"} />

                    <TimelineItem date={"13:25"} data={"Mini-Tournament"} right />

                    <TimelineItem
                        date={"15:00"}
                        data={"Special Program\n&\nKết thúc event"}
                        tail={true}
                    />
                </ul>
                <Image src={Hourglass} alt={"time"} className={"self-center"} />
            </div>
        </div>
    );
}
