import Link from "next/link";

export default function PreviewTicketButton() {
    return (
        // yes, we don't have a CMS for now...
        // <Link
        //     href={"/tickets"}
        //     className={"btn btn-md lg:btn-lg hover:btn-outline rounded-2xl bg-black text-white hover:bg-white hover:text-black"}
        // >
        //     <div className={"font-bold"}>Mua vé</div>
        // </Link>
        <>
            <button
                type={"button"}
                className={"btn btn-md lg:btn-lg rounded-xl bg-black text-white font-bold"}
                onClick={() => (document.getElementById("sold-out-modal") as HTMLDialogElement)!.showModal()}
            >
                Mua vé
            </button>
            <dialog id={"sold-out-modal"} className={"modal"}>
                <div className={"modal-box space-y-1"}>
                    <div className={"font-bold text-xl text-center"}>Xin lỗi bạn nha, tụi mình soldout rồi...</div>
                    <p>
                        Bạn nhớ theo dõi thông tin mới nhất tại page
                        {" "}
                        <Link className={"font-extrabold underline"} href={"https://www.facebook.com/terrastationvn"}>Trạm dừng chân chốn Terra nhé.</Link>
                    </p>
                    <p>Tụi mình mong được gặp bạn tại Offline!</p>
                    <p className={"text-center py-4 italic"}>(bấm ra bên ngoài để đóng)</p>
                </div>
                <form method={"dialog"} className={"modal-backdrop"}>
                    {/* eslint-disable-next-line react-dom/no-missing-button-type */}
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
