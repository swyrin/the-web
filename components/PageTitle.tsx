import TitleDecorLeft from "@/components/svg/TitleDecorLeft";
import TitleDecorRight from "@/components/svg/TitleDecorRight";

type PageTitleProps = {
    title: string;
    favorText: string;
    dark?: boolean;
};

export default function PageTitle(props: PageTitleProps) {
    const isDarkBg = props.dark === true;
    const invertStyle = isDarkBg ? "invert" : "";
    const favorTextStyle = isDarkBg ? "text-white" : "text-black";

    return (
        <>
            <div className={`mt-4 flex items-center justify-center text-center ${invertStyle}`}>
                <div className={"mr-5"}>
                    <TitleDecorLeft width={115} height={24} />
                </div>
                <h1 className={"text-center text-lg font-extrabold md:text-2xl lg:text-5xl"}>
                    {props.title}
                </h1>
                <div className={"ml-5"}>
                    <TitleDecorRight width={115} height={24} />
                </div>
            </div>
            <p className={`my-4 ${favorTextStyle}`}>{props.favorText}</p>
        </>
    );
}
