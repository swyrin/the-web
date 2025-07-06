import classNames from "classnames";
import TimelinePoint from "@/components/svg/TimelinePoint";

type TimelineItemProps = {
    date: string;
    data: string;
    // href: string;
    /*
        This item is the start of timeline.
     */
    head?: boolean;
    /*
        This item is the end of timeline.
     */
    tail?: boolean;
    /*
        This PREVIOUS item is finished.
     */
    middle?: boolean;
    /*
        This item is in the right side of timeline.
        NOTE: applies to small screens only.
     */
    right?: boolean;
};

export default function TimelineItem(props: TimelineItemProps) {
    // On mobile (vertical timeline), use timeline-start for left and timeline-end for right
    // On desktop (horizontal timeline), all items use timeline-start
    const timelinePosition = props.right ? "timeline-end lg:timeline-start!" : "timeline-start";

    return (
        <li className={"flex-1 shrink"}>
            {!props.head ? <hr className={"bg-white"} /> : <></>}
            <div
                className={classNames(
                    timelinePosition,
                    "text-base-content flex flex-col px-4 py-2 text-center text-lg lg:text-xl",
                )}
            >
                <div className={"mb-1 font-bold"}>{props.date}</div>
                <div className={"leading-relaxed font-light whitespace-pre-line"}>{props.data}</div>
            </div>
            <div className={"timeline-middle"}>
                <TimelinePoint />
            </div>
            {!props.tail ? <hr className={"bg-white"} /> : <></>}
        </li>
    );
}
