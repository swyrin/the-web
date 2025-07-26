import type { Operator } from "@/lib/vns";
import Image from "next/image";
import Arene from "@/public/tournament/drafting/Arene.png";
import StarSelected from "@/public/tournament/drafting/star-selected.svg";
import StarUnSelected from "@/public/tournament/drafting/star-unselected.svg";

function getRarityColor(rarity: number) {
    switch (rarity) {
        case 1:
            return "#A0A0A0";
        case 2:
            return "#DCDC00";
        case 3:
            return "#00AAEE";
        case 4:
            return "#D6C5D6";
        case 5:
            return "#FFFFA9";
        case 6:
            return "#FFC800";
        default:
            console.error("Invalid rarity:", rarity);
    }
}

type OperatorIconProps = {
    operator: Operator;
    isSelected?: boolean;
    isBanned?: boolean;
    isPortrait?: boolean;
    onClickFn?: () => void;
};

function OperatorIcon(props: OperatorIconProps) {
    const rarityColor = getRarityColor(props.operator.rarity);
    // everchanging, the knowing feelings,
    // could make you fall from the dreamy skies
    const selectedColor = "#77DD77";

    const imageSource = props.isPortrait
        ? `/operator/portraits/${props.operator.id}_2.png`
        : (props.operator.name === "Arene"
                ? Arene
                : `/operator/icons/${props.operator.id}.png`);

    const width = props.isPortrait ? "" : "w-20";

    return (
        <div
            className={`flex ${width} flex-col items-center`}
            onClick={props.isBanned ? undefined : props.onClickFn}
        >
            <div
                className={`flex px-1 items-center justify-center ${props.isBanned ? "grayscale opacity-35" : ""}`}
                style={{
                    background: `linear-gradient(
                        to top,
                        ${props.isSelected ? selectedColor : rarityColor} 0%,
                        ${props.isSelected ? selectedColor : rarityColor}70 25%,
                        ${props.isSelected ? selectedColor : rarityColor}00 100%
                    )`,
                    borderBottom: `4px solid ${props.isSelected ? selectedColor : rarityColor}`,
                }}
            >
                <Image
                    src={
                        imageSource
                    }
                    width={props.isPortrait ? 128 : 48}
                    height={props.isPortrait ? 256 : 48}
                    alt={props.operator.name}
                    className={"object-cover"}
                />
            </div>
            <div className={"flex w-12 flex-col justify-center items-center space-y-1 mt-2"}>
                {props.isPortrait && (
                    <Image
                        src={`/operator/classes/${props.operator.class.toLowerCase()}.png`}
                        width={32}
                        height={32}
                        alt={"class"}
                        className={"object-none border-1 border-white/50 bg-black"}
                    />
                )}
                {props.isPortrait && (
                    <div className={"flex space-x-1 items-center justify-center"}>
                        {
                            [1, 2, 3, 4, 5, 6].map((x) => {
                                return (
                                    x <= props.operator.rarity
                                        ? <Image key={x} src={StarSelected} alt={"star"} width={16} height={16} />
                                        : <Image key={x} src={StarUnSelected} alt={"star"} width={16} height={16} />
                                );
                            })
                        }
                    </div>
                )}
                <div className={`text-center ${props.isPortrait ? "text-xl font-extrabold" : "text-xs font-light"} text-base-content`}>{props.operator.name}</div>
            </div>
        </div>
    );
}

export default OperatorIcon;
