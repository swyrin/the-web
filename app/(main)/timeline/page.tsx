import TimelinePoint from "@/components/svg/TimelinePoint";

export default function EventTimeLine() {
    return (
        <div className={"layout-height flex flex-col"}>
            <ul className={"timeline timeline-vertical lg:timeline-horizontal flex-1"}>
                <li className={"flex flex-1 flex-col justify-between lg:flex-row"}>
                    <div className={"timeline-start text-sm"}>2024-01-14</div>
                    <div className={"timeline-middle"}>
                        <TimelinePoint />
                    </div>
                    <div className={"timeline-end timeline-box"}>Offline #1: The show must go on!</div>
                    <hr className={"bg-black"} />
                </li>
                <li className={"flex flex-1 flex-col justify-between lg:flex-row"}>
                    <hr className={"bg-black"} />
                    <div className={"timeline-start timeline-box"}>Thông báo ra mắt Offline #2: Dreamchasers</div>
                    <div className={"timeline-middle"}>
                        <TimelinePoint />
                    </div>
                    <div className={"timeline-end text-sm"}>2024-12-31</div>
                    <hr className={"bg-black"} />
                </li>
                <li className={"flex flex-1 flex-col justify-between lg:flex-row"}>
                    <hr className={"bg-black"} />
                    <div className={"timeline-start text-sm"}>2025-01-12</div>
                    <div className={"timeline-middle"}>
                        <TimelinePoint />
                    </div>
                    <div className={"timeline-end timeline-box"}>Khảo sát &quot;Dreamchasers&quot; lần 1</div>
                    <hr className={"bg-black"} />
                </li>
                <li className={"flex flex-1 flex-col justify-between lg:flex-row"}>
                    <hr className={"bg-black"} />
                    <div className={"timeline-start timeline-box"}>
                        VCL x Dreamchas- WAIT TUS, ĐỪNG LÔI TÔI VÀO HẦM NỮA MÀ.
                    </div>
                    <div className={"timeline-middle"}>
                        <TimelinePoint />
                    </div>
                    <div className={"timeline-end text-sm"}>2025-04-01</div>
                    <hr className={"bg-black"} />
                </li>
                <li className={"flex flex-1 flex-col justify-between lg:flex-row"}>
                    <hr className={"bg-black"} />
                    <div className={"timeline-start text-sm"}>2025-05-04</div>
                    <div className={"timeline-middle"}>
                        <TimelinePoint />
                    </div>
                    <div className={"timeline-end timeline-box"}>Khảo sát "Dreamchasers" lần 2</div>
                    <hr />
                </li>
                <li className={"flex flex-1 flex-col justify-between lg:flex-row"}>
                    <hr />
                    <div className={"timeline-start timeline-box"}>Offline #2: Dreamchasers</div>
                    <div className={"timeline-middle"}>
                        <TimelinePoint />
                    </div>
                    <div className={"timeline-end text-sm"}>2025-08-??</div>
                </li>
            </ul>
        </div>
    );
}
