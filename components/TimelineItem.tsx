import TimelinePoint from "@/components/svg/TimelinePoint";
import Link from "next/link";

type TimelineItemProps = {
    date: string;
    data: string;
    href: string;
    head: boolean;
    tail: boolean;
    finished: boolean;
    middle: boolean;
};

export default function TimelineItem(props: TimelineItemProps) {
    return (
        <li className={"flex flex-1 flex-col justify-between lg:flex-row"}>
            {!props.head ? props.middle ? <hr className={"bg-black"} /> : <hr /> : <></>}
            <div className={"timeline-start text-sm font-bold"}>{props.date}</div>
            <div className={"timeline-middle"}>
                <TimelinePoint />
            </div>
            <div className={"timeline-end timeline-box text-center"}>
                <Link className={"hover:underline"} href={props.href}>
                    {props.data}
                </Link>
            </div>
            {!props.tail ? props.finished ? <hr className={"bg-black"} /> : <hr /> : <></>}
        </li>
    );
}
