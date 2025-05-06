import TimelineItem from "@/components/TimelineItem";
import Link from "next/link";

export default function EventTimeLine() {
    return (
        <div className={"p-10 sm:w-150 md:w-200 lg:w-300"}>
            <div className={"text-center text-3xl font-extrabold"}>Timeline</div>
            <br />

            <div className={"items-center text-center font-normal"}>
                Để tiện lợi trong quá trình cập nhật thông tin offline, các bạn vui lòng chú ý timeline bên dưới.
                <br />
                Và đừng quên theo dõi fanpage{" "}
                <Link className={"font-bold underline"} href={"https://www.facebook.com/terrastationvn"}>
                    Trạm dừng chân chốn Terra
                </Link>{" "}
                nhé!
                <br />
                Hẹn gặp các bạn tại Offline #2: Dreamchasers.
            </div>

            <div className={"py-10"}>
                <ul className={"timeline timeline-vertical lg:timeline-horizontal flex-1"}>
                    <TimelineItem
                        date={"2024-01-14"}
                        data={"Offline #1: The show must go on!"}
                        href={"https://www.facebook.com/groups/arknights.vietnam.station/posts/2035816776811242/"}
                        finished={true}
                        middle={false}
                        head={true}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2024-12-31"}
                        data={"Thông báo ra mắt Offline #2: Dreamchasers."}
                        href={"https://www.facebook.com/groups/arknights.vietnam.station/posts/2299747417084842/"}
                        finished={true}
                        middle={true}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-01-12"}
                        data={"Khảo sát 'Dreamchasers' lần 1."}
                        href={"https://www.facebook.com/groups/arknights.vietnam.station/posts/2308946422831608/"}
                        finished={true}
                        middle={true}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-04-01"}
                        data={"VCL x Dreamchas- WAIT TUS, ĐỪNG LÔI TÔI VÀO HẦM NỮA MÀ."}
                        href={"https://www.facebook.com/groups/arknights.vietnam.station/posts/2377421212650795/"}
                        finished={true}
                        middle={true}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-05-04"}
                        data={"Khảo sát 'Dreamchasers' lần 2."}
                        href={"https://www.facebook.com/groups/arknights.vietnam.station/posts/2409448572781392/"}
                        finished={true}
                        middle={true}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-??-??"}
                        data={"??????"}
                        href={""}
                        finished={false}
                        middle={false}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-08-??"}
                        data={"Offline #2: Dreamchasers"}
                        href={""}
                        finished={false}
                        middle={false}
                        tail={true}
                        head={false}
                    />
                </ul>
            </div>
        </div>
    );
}
