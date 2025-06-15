import TitleDecoLeft from "@/public/title/title_decor_left.png";
import TitleDecoRight from "@/public/title/title_decor_right.png";
import Image from "next/image";

type PageTitleProps = {
    title: string;
    favorText: string;
    light?: boolean;
};

export default function PageTitle(props: PageTitleProps) {
    const isLightBg = props.light === true;

    return (
        <>
            <div className={"m-8 flex items-center justify-center text-center"}>
                <Image
                    src={TitleDecoLeft}
                    className={`${isLightBg ? "invert" : ""} mr-12 hidden md:inline`}
                    alt={"Title Decoration Left"}
                />
                <h1 className={"text-center text-6xl font-extrabold"}>{props.title}</h1>
                <Image
                    src={TitleDecoRight}
                    className={`${isLightBg ? "invert" : ""} ml-12 hidden md:inline`}
                    alt={"Title Decoration Left"}
                />
            </div>
            <p>{props.favorText}</p>
        </>
    );
}
