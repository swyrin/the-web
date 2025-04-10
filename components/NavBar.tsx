import BurgerMenuButton from "@/components/BurgerMenuButton";
import DreamchasersBranding from "@/components/DreamchasersBranding";
import NavbarItems from "@/components/NavBarItems";
import PurchaseTicketButton from "@/components/PurchaseTicketButton";

export default function NavBar() {
    return (
        // https://github.com/saadeghi/daisyui/discussions/2277#discussioncomment-7400878
        <div className={"navbar sticky top-0 z-50 bg-white font-[family-name:var(--font-jb-mono)] shadow-lg"}>
            <div className={"navbar-start space-x-3"}>
                <div className={"dropdown"}>
                    <BurgerMenuButton />
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-sm rounded-box z-1 mt-8 w-52 bg-white p-2 shadow-lg"
                    >
                        <NavbarItems />
                    </ul>
                </div>
                <DreamchasersBranding />
            </div>
            <div className={"navbar-center hidden lg:flex"}>
                <ul className="menu menu-horizontal">
                    <NavbarItems />
                </ul>
            </div>
            <div className={"navbar-end"}>
                <PurchaseTicketButton />
            </div>
        </div>
    );
}
