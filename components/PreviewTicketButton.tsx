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
                className={"btn rounded-xl bg-black font-bold text-white btn-md lg:btn-lg"}
                type={"button"}
                onClick={() => (document.getElementById("sold-out-modal") as HTMLDialogElement)!.showModal()}
            >
                Mua vé
            </button>
            <dialog className={"modal"} id={"sold-out-modal"}>
                <div className={"modal-box space-y-1"}>
                    <div className={"text-center text-xl font-bold"}>Xin lỗi bạn nha, tụi mình soldout rồi...</div>
                    <p>
                        Bạn nhớ theo dõi thông tin mới nhất tại page
                        {" "}
                        <Link className={"font-extrabold underline"} href={"https://www.facebook.com/terrastationvn"}>Trạm dừng chân chốn Terra nhé.</Link>
                    </p>
                    <p>Tụi mình mong được gặp bạn tại Offline!</p>
                    <p className={"py-4 text-center italic"}>(bấm ra bên ngoài để đóng)</p>
                </div>
                <form className={"modal-backdrop"} method={"dialog"}>
                    {/* eslint-disable-next-line react-dom/no-missing-button-type */}
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
