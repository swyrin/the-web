import type { Operator } from "@/lib/vns";
import Image from "next/image";

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
    isSelected: boolean;
    isBanned?: boolean;
    onClickFn: () => void;
};

function OperatorIcon(props: OperatorIconProps) {
    const rarityColor = getRarityColor(props.operator.rarity);
    // everchanging, the knowing feelings,
    // could make you fall from the dreamy skies
    const selectedColor = "#77DD77";

    return (
        <div
            className={`flex w-18 flex-col items-center ${props.isBanned ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
            onClick={props.isBanned ? undefined : props.onClickFn}
        >
            <div
                className={`flex w-14 items-center justify-center ${props.isBanned ? "grayscale" : ""}`}
                style={{
                    background: `linear-gradient(
                        to top,
                        ${props.isSelected ? selectedColor : rarityColor} 0%,
                        ${props.isSelected ? selectedColor : rarityColor}70 50%,
                        ${props.isSelected ? selectedColor : rarityColor}00 100%
                    )`,
                    borderBottom: `4px solid ${props.isSelected ? selectedColor : rarityColor}`,
                }}
            >
                <Image
                    src={`https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/charavatars/${props.operator.id}.png`}
                    width={48}
                    height={48}
                    alt={props.operator.name}
                    className={"object-contain"}
                />
            </div>
            <div className={`text-center text-xs break-words ${props.isBanned ? "text-gray-500" : ""}`}>{props.operator.name}</div>
        </div>
    );
}

export default OperatorIcon;
