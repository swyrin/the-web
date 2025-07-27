import type { FC } from "react";

const ProgressBar: FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            fill={"none"}
            height={"32"}
            viewBox={"0 0 187 32"}
            width={"187"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <rect
                height={"29.2729"}
                rx={"5"}
                stroke={"white"}
                strokeWidth={"2"}
                width={"184.435"}
                x={"1"}
                y={"1"}
            />
            <rect fill={"white"} height={"24"} rx={"6"} width={"101"} x={"5"} y={"4"} />
        </svg>
    );
};

export default ProgressBar;
