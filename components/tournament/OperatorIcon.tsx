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
    onClickFn: () => void;
};

function OperatorIcon(props: OperatorIconProps) {
    const rarityColor = getRarityColor(props.operator.rarity);
    return (
        <div
            className={`flex min-w-12 flex-col items-center border-2 ${props.isSelected ? "border-blue-300" : "border-transparent"}`}
            onClick={props.onClickFn}
        >
            <div
                className={"flex w-14 items-center justify-center"}
                style={{
                    background: `linear-gradient(
                        to top,
                        ${rarityColor} 0%,
                        ${rarityColor}70 50%,
                        ${rarityColor}00 100%
                    )`,
                    borderBottom: `4px solid ${rarityColor}`,
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
            <div className={"text-center text-xs"}>{props.operator.name}</div>
        </div>
    );
}

export default OperatorIcon;
