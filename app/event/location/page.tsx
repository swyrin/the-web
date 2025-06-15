import PageTitle from "@/components/PageTitle";

export default function LocationPage() {
    return (
        <div className={"bg-[url(/BG_Black.png)] bg-cover bg-fixed bg-no-repeat"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <div>
                        <PageTitle
                            title={"Địa điểm"}
                            favorText={
                                "Một số thông tin hỗ trợ bạn trong quá trình di chuyển đến địa điểm offline."
                            }
                            dark
                        />
                    </div>
                </div>
            </div>
            <div
                className={
                    "mx-8 flex flex-col place-content-center-safe space-y-12 lg:flex-row lg:space-x-24"
                }
            >
                <div className={"flex flex-col flex-wrap content-center justify-center"}>
                    <p className={"mb-3 text-center text-2xl text-white"}>
                        Cửa chính sẽ nhìn giống thế này
                    </p>
                    {/* TODO: Add an image of the entrance */}
                    <div className={"h-96 overflow-hidden"}>
                        <iframe
                            className={"h-full w-full border-0"}
                            src={
                                "https://www.google.com/maps/embed/v1/place?q=40+Nguy%E1%BB%85n+V%C4%83n+H%C6%B0%E1%BB%9Fng,+Th%E1%BA%A3o+%C4%90i%E1%BB%81n,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+H%E1%BB%93+Ch%C3%AD+Minh+71107,+Vietnam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            }
                            title={"Google Maps - Event Location"}
                        ></iframe>
                    </div>
                    <p className={"mt-1 text-center text-white"}>
                        Đ/c: 40 Nguyễn Văn Hưởng, Thảo Điền, Thủ Đức, Thành phố Hồ Chí Minh.
                        <br />
                        (Đi bằng Metro, xuống ga Thảo Điền, đi bộ khoảng 10 phút là tới)
                    </p>
                </div>
                <div className={"mb-10 h-[480px] w-full max-w-[500px] overflow-hidden"}>
                    <iframe
                        className={"h-full w-full border-0"}
                        src={
                            "https://www.google.com/maps/embed/v1/place?q=40+Nguy%E1%BB%85n+V%C4%83n+H%C6%B0%E1%BB%9Fng,+Th%E1%BA%A3o+%C4%90i%E1%BB%81n,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+H%E1%BB%93+Ch%C3%AD+Minh+71107,+Vietnam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        }
                        title={"Google Maps - Event Location"}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
