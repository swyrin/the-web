import Branding from "@/components/Branding";
import NavBarItems from "@/components/NavBarItems";
import PurchaseTicketButton from "@/components/PurchaseTicketButton";
import BurgerMenu from "@/components/svg/BurgerMenu";
import Sparkle from "@/components/svg/Sparkle";

export default function NavBar() {
    return (
        <header className={"navbar sticky top-0 z-1 h-[70px] bg-white shadow-md"}>
            <div className={"navbar-start space-x-2"}>
                <div className={"dropdown"}>
                    <BurgerMenu />
                    <ul
                        tabIndex={0}
                        className={
                            "menu dropdown-content sm:menu-sm md:menu-md lg:menu-lg rounded-box z-1 mt-8 w-52 bg-white p-2 shadow-lg"
                        }
                    >
                        <NavBarItems isMobile />
                    </ul>
                </div>
                <Branding />
            </div>
            <div className={"navbar-end gap-x-5 lg:flex"}>
                <NavBarItems />
                <PurchaseTicketButton />
                <Sparkle />
            </div>
        </header>
    );
}
