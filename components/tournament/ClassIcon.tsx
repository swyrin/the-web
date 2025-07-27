import type { OperatorClass } from "@/lib/vns";
import Image from "next/image";

type ClassIconProps = {
    operatorClass: OperatorClass;
    active: boolean;
    onClick?: () => void;
};

function ClassIcon(props: ClassIconProps) {
    return (
        <div
            className={`flex size-9 items-center justify-center border border-white/50 ${props.active ? "bg-blue-400" : "bg-black"}`}
            onClick={props.onClick}
        >
            <Image
                alt={props.operatorClass}
                className={`w-auto object-contain ${props.active ? "grayscale invert" : ""}`}
                height={28}
                priority
                src={`/operator/classes/${props.operatorClass}.png`}
                width={28}
            />
        </div>
    );
}

export default ClassIcon;
