import Link from "next/link";

function PartnerList() {
    return (
        <div className={"items-center font-normal"}>
            <ul className={"list-disc space-y-5"}>
                <li>
                    <b>Nói Không Với 0 Sanity</b>: Page chuyên cập nhật thông tin trên máy chủ EN, cũng như liệt kê &
                    phân tích chi tiết về Enemies và Operators.
                </li>
                <li>
                    <b>Over Heaven</b>: Studio âm nhạc, thỉnh thoảng sản xuất các sản phẩm fanmade về Arknights. Đứng
                    đầu bởi Huynh Kiet.
                </li>
                <li>
                    <b>Thư Viện Laterano</b>: Page chuyên phân tích và tóm tắt cốt truyện của tựa game. Chủ page: Tuan
                    Anh Nguyen.
                </li>
                <li>
                    <b>TTShop</b>: Tri Vu - nạp game.
                </li>
                <li>
                    <b>Hiệu sách cuối phố của N</b>: hàng xóm của Trạm dừng chân chốn Terra trong mảng dịch thuật.
                </li>
                <li>
                    <b>Ổ nghiện Shitpost và Gacha</b>
                </li>
                <li>
                    <b>AREA 57</b>: <del>maimai vietnam station</del>
                </li>
            </ul>
        </div>
    );
}

export default function AboutDreamchasers() {
    return (
        <div className={"p-10 sm:w-100 md:w-200 lg:w-220"}>
            <div className={"text-center text-3xl font-extrabold"}>About the Dreamchasers</div>
            <br />
            <div className={"items-center font-normal"}>
                <p>
                    <b>Arknights Vietnam Station Dreamchasers</b> là một nhóm của{" "}
                    <b>Arknights Vietnam Station (A9VNS)</b> trực thuộc Vietnam Station Network, tổ chức các sự kiện
                    Offline/Tournament cho nhóm A9VNS.
                </p>
                <br />
                <p>Arknights VNS hiện có các nền tảng khác để kết nối cộng đồng như sau:</p>
                <br />
                <ul className={"ml-10 list-disc space-y-5"}>
                    <li>
                        <b>Trạm dừng chân chốn Terra</b>: Fanpage chính thức của nhóm, là một team chuyên dịch truyện
                        tranh tranh được phát hành bởi Hypergryph (dưới tên Terra Historicus) hoặc fanart cộng đồng.
                        Ngoài ra, page thỉnh thoảng cũng sẽ cập nhật & chia sẻ các nội dung, tin tức liên quan đến
                        Arknights.
                    </li>
                    <li>
                        <b>「 Arknights VNS 」</b>- Máy chủ Discord chính thức của nhóm (
                        <Link href={"https://discord.gg/arknights-vns"} className={"underline"}>
                            discord.gg/arknights-vns
                        </Link>
                        ).
                    </li>
                </ul>
            </div>
            <br />
            <div className={"text-center text-2xl font-extrabold"}>Đối tác phát triển</div>
            <br />
            <PartnerList />
            <br />
        </div>
    );
}
