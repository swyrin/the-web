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
            className={`flex h-9 w-9 items-center justify-center border border-white/50 ${props.active ? "bg-blue-400" : "bg-black"} `}
            onClick={props.onClick}
        >
            <Image
                src={`/operator/classes/${props.operatorClass}.png`}
                alt={props.operatorClass}
                width={28}
                height={28}
                className={`object-contain w-auto ${props.active ? "grayscale invert" : ""} `}
                priority
            />
        </div>
    );
}

export default ClassIcon;
