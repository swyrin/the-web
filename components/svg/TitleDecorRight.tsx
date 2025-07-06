type TitleDecorRightProps = {
    width: number;
    height: number;
};

export default function TitleDecorRight(props: TitleDecorRightProps) {
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
                d={"M8.62 15.35L12 23.014L15.38 15.35L23.047 11.97L15.38 8.58999L12 0.92199L8.62 8.58999L0.952996 11.97L8.62 15.35Z"}
                fill={"black"}
            />
            <path
                fillRule={"evenodd"}
                clipRule={"evenodd"}
                d={"M52.8242 15.1521L55.5 21.2194L58.1758 15.1521L64.2455 12.4763L58.1758 9.80042L55.5 3.72992L52.8242 9.80042L46.7545 12.4763L52.8242 15.1521Z"}
                fill={"black"}
            />
            <path
                fillRule={"evenodd"}
                clipRule={"evenodd"}
                d={"M88.9508 14.0354L90.5 17.5481L92.0492 14.0354L95.5632 12.4862L92.0492 10.9371L90.5 7.42258L88.9508 10.9371L85.4368 12.4862L88.9508 14.0354Z"}
                fill={"black"}
            />
            <line x1={"43"} y1={"12.5"} x2={"27"} y2={"12.5"} stroke={"black"} />
            <line x1={"83"} y1={"12.5"} x2={"67"} y2={"12.5"} stroke={"black"} />
            <line x1={"115"} y1={"12.5"} x2={"99"} y2={"12.5"} stroke={"black"} />
        </svg>
    );
}
