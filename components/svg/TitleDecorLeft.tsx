type TitleDecorLeftProps = {
    width: number;
    height: number;
};

export default function TitleDecorLeft(props: TitleDecorLeftProps) {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox={`0 0 ${props.width} ${props.height}`}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <path
                fillRule={"evenodd"}
                clipRule={"evenodd"}
                d={"M106.38 8.65L103 0.986L99.62 8.65L91.953 12.03L99.62 15.41L103 23.078L106.38 15.41L114.047 12.03L106.38 8.65Z"}
                fill={"black"}
            />
            <path
                fillRule={"evenodd"}
                clipRule={"evenodd"}
                d={"M62.1758 8.84792L59.5 2.78059L56.8242 8.84792L50.7545 11.5238L56.8242 14.1996L59.5 20.2701L62.1758 14.1996L68.2455 11.5238L62.1758 8.84792Z"}
                fill={"black"}
            />
            <path
                fillRule={"evenodd"}
                clipRule={"evenodd"}
                d={"M26.0492 9.96459L24.5 6.45192L22.9508 9.96459L19.4368 11.5138L22.9508 13.0629L24.5 16.5774L26.0492 13.0629L29.5632 11.5138L26.0492 9.96459Z"}
                fill={"black"}
            />
            <line x1={"72"} y1={"11.5"} x2={"88"} y2={"11.5"} stroke={"black"} />
            <line x1={"32"} y1={"11.5"} x2={"48"} y2={"11.5"} stroke={"black"} />
            <line y1={"11.5"} x2={"16"} y2={"11.5"} stroke={"black"} />
        </svg>
    );
}
