import PageTitle from "@/components/PageTitle";
import TournamentLogo from "@/public/tournament/tournament-logo.png";
import Image from "next/image";

export default function OverviewPage() {
    return (
        <div className={"h-visible vns-background"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle title={"Tournament"} favorText={"Giới thiệu"} dark />
                </div>
            </div>
            <div
                className={"mt-8 flex flex-col items-center justify-center space-y-12"}
                data-theme={"dark"}
            >
                <div className={"mx-4 max-w-192 text-center text-2xl font-extralight text-white"}>
                    Đây là giải đấu được BTC Offline chọn nhằm để thử thách giới hạn của các Doctor
                    trong buổi sự kiện này. Các Doctor hoàn toàn có thể sử dụng mọi chiến thuật sáng
                    tạo và hiệu quả để vượt qua thử thách mà BTC đã chuẩn bị. Sẽ có những phần quà
                    thú vị để thưởng cho các Doctor mang đến kết quả đáng kinh ngạc nhất vào cuối
                    buổi chương trình!
                </div>
                <Image src={TournamentLogo} alt={"Tournament Logo"} width={128} height={128} />
            </div>
        </div>
    );
}
