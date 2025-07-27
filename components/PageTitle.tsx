import TitleDecorLeft from "@/components/svg/TitleDecorLeft";
import TitleDecorRight from "@/components/svg/TitleDecorRight";

type PageTitleProps = {
    title: string;
    favorText?: string;
    dark?: boolean;
};

export default function PageTitle(props: PageTitleProps) {
    const isDarkBg = props.dark === true;
    const invertStyle = isDarkBg ? "invert" : "";
    const favorTextStyle = isDarkBg ? "text-white" : "text-black";

    return (
        <div className={"w-full"}>
            <div
                className={`mt-4 flex items-center justify-center text-center ${invertStyle} relative mx-auto w-fit`}
            >
                <div className={"hidden pr-4 md:block"}>
                    <TitleDecorLeft height={24} width={115} />
                </div>
                <div className={"text-center text-3xl font-extrabold md:text-4xl lg:text-5xl"}>
                    {props.title.toUpperCase()}
                </div>
                <div className={"hidden pl-4 md:block"}>
                    <TitleDecorRight height={24} width={115} />
                </div>
            </div>
            {props.favorText && (
                <p className={`mt-4 text-xl font-light ${favorTextStyle}`}>{props.favorText}</p>
            )}
        </div>
    );
}
