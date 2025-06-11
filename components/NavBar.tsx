import Branding from "@/components/Branding";
import NavbarItems from "@/components/NavBarItems";
import BurgerMenu from "@/components/svg/BurgerMenu";

export default function NavBar() {
    return (
        // https://github.com/saadeghi/daisyui/discussions/2277#discussioncomment-7400878
        <div className={"navbar sticky top-0 z-1 bg-white font-[family-name:var(--font-vns)] shadow-md"}>
            <div className={"navbar-start space-x-2"}>
                <div className={"dropdown"}>
                    <BurgerMenu />
                    <ul
                        tabIndex={0}
                        className={
                            "menu dropdown-content sm:menu-sm md:menu-md lg:menu-lg rounded-box z-1 mt-8 w-52 bg-white p-2 shadow-lg"
                        }
                    >
                        <NavbarItems />
                    </ul>
                </div>
                <Branding />
            </div>
            <div className={"navbar-end hidden lg:flex"}>
                <ul className={"menu menu-horizontal px-1 text-lg"}>
                    <NavbarItems />
                </ul>
            </div>
        </div>
    );
}
