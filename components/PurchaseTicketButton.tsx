"use client";

import Link from "next/link";

export default function PurchaseTicketButton() {
    return (
        <>
            <button
                className={
                    "btn sm:btn-sm md:btn-md lg:btn-lg hover:btn-outline rounded-2xl bg-black text-white hover:bg-white hover:text-black"
                }
                // TODO: Wait for ticket opening date.
                onClick={() => (document.getElementById("ticket_modal")! as HTMLDialogElement).showModal()}
            >
                <span>Mua vé</span>
            </button>

            <dialog id="ticket_modal" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="text-lg font-bold">Hiện tại vé chưa mở bán</h3>
                    <p className="py-4">
                        Bạn hãy theo dõi fanpage{" "}
                        <Link className={"font-bold underline"} href={"https://www.facebook.com/terrastationvn"}>
                            Trạm dừng chân chốn Terra
                        </Link>{" "}
                        để cập nhật thông tin sớm nhất nhé!
                        <br />
                        <br />
                        <span className={"text-sm italic"}>(Bấm bên ngoài để đóng)</span>
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button />
                </form>
            </dialog>
        </>
    );
}
