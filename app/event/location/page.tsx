import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import Mcafe from "@/public/MCafe_Entry.jpg";

export default function LocationPage() {
    return (
        <div className={"h-visible vns-background flex flex-col"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle
                        title={"Địa điểm"}
                        favorText={"Một số thông tin hỗ trợ bạn trong quá trình di chuyển đến địa điểm offline."}
                        dark
                    />
                </div>
            </div>
            <div
                className={"mb-8 mx-4 grid grid-cols-1 grid-rows-2 gap-8 lg:grid-cols-2 lg:grid-rows-1"}
            >
                <div className={"flex flex-col justify-between space-y-4"}>
                    <div className={"text-center text-2xl text-white font-extrabold"}>
                        Cửa chính sẽ nhìn giống thế này
                    </div>
                    <div className={"flex-1 flex items-center justify-center"}>
                        <Image
                            src={Mcafe}
                            alt={"MCAFE"}
                            className={"w-full h-64 lg:h-80 object-cover mx-8"}
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className={"text-center text-white font-light min-h-[48px]"}>
                        Đ/c: 40 Nguyễn Văn Hưởng, Thảo Điền, Thủ Đức, Thành phố Hồ Chí Minh.
                        <br />
                        (Đi bằng Metro, xuống ga Thảo Điền, đi bộ khoảng 10 phút là tới)
                    </div>
                </div>
                <div
                    className={"flex flex-col justify-between space-y-4"}
                >
                    <div className={"text-center text-2xl text-white font-extrabold"}>
                        Google Map
                    </div>
                    <div className={"flex-1 flex items-center justify-center"}>
                        <iframe
                            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.5424037182813!2d106.72501623850003!3d10.804816497336429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175273e10990f3b%3A0xc0521b630c53b06!2zTWNhZsOp!5e0!3m2!1sen!2s!4v1751777410957!5m2!1sen!2s"}
                            className={"w-full h-64 lg:h-80 mx-8"}
                            style={{ border: 0 }}
                            // eslint-disable-next-line react-dom/no-unsafe-iframe-sandbox
                            sandbox={"allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-forms"}
                            allowFullScreen
                            loading={"lazy"}
                            referrerPolicy={"no-referrer-when-downgrade"}
                        >
                        </iframe>
                    </div>
                    <Link
                        href={"https://www.google.com/maps/place/Mcaf%C3%A9/@10.8048165,106.7250162,18z/data=!3m1!4b1!4m6!3m5!1s0x3175273e10990f3b:0xc0521b630c53b06!8m2!3d10.8048165!4d106.7263037!16s%2Fg%2F11t4xyhpl0?hl=en&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"}
                        className={"text-center text-white font-light underline min-h-[48px]"}
                    >
                        (Link dẫn đến Google Maps)
                    </Link>
                </div>
            </div>
        </div>
    );
}
