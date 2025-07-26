import Image from "next/image";
import PageTitle from "@/components/PageTitle";
// import TournamentLogo from "@/public/tournament/tournament-logo.png";

// const images = ["/operator/icons/char_002_amiya.png", "/operator/icons/char_003_kalts.png", "/operator/icons/char_291_aglina.png", "/operator/icons/char_4026_vulpis.png", "/operator/icons/char_401_elysm.png"];

export default function OverviewPage() {
    return (
        <div className={"h-visible vns-background flex flex-col"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle title={"Ban Result"} favorText={"Bóp team gaming"} dark />
                </div>
            </div>

            <div
                className={"max-w-screen h-full ml-10"}
            >
                <div
                    className={"max-w-full [column-gap:1.12rem] [column-count:2] md:[column-count:3] lg:[column-count:5]"}
                >
                    <div className={"bg-cyan-950 w-[80%] h-[2000px] mb-[2500px]"}>

                    </div>
                </div>
            </div>

        </div>
    );
}
