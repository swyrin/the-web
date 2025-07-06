"use client";

import type { OperatorClass } from "@/lib/vns";
import { createTRPCProxyClient, createWSClient, wsLink } from "@trpc/client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PageTitle from "@/components/PageTitle";
import ClassIcon from "@/components/tournament/ClassIcon";
import StarSelected from "@/public/tournament/drafting/star-selected.svg";
import StarUnSelected from "@/public/tournament/drafting/star-unselected.svg";

export default function DraftingPage() {
    const [operatorNameSearch, setOperatorNameSearch] = useState("");
    const [selectedRarity, setSelectedRarity] = useState(1);
    const [selectedClass, setSelectedClass] = useState<OperatorClass>("caster");
    const [selectedOperator, setSelectedOperator] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60000);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const wsClientRef = useRef<ReturnType<typeof createWSClient> | null>(null);
    const trpcClientRef = useRef<ReturnType<typeof createTRPCProxyClient> | null>(null);
    const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // region: timer control
    function startTimer() {
        setIsTimerRunning(true);
    }

    function stopTimer() {
        setIsTimerRunning(false);
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }
    }

    function resetTimer() {
        setIsTimerRunning(false);
        setTimeLeft(60000);
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }
    }

    function continueTimer() {
        setIsTimerRunning(true);
    }
    // endregion: timer control

    // region: operator selection control
    function handleBanSubmission() {
        setSelectedOperator("");
    }
    // endregion: operator selection control

    // trpc connection.
    // I strongly recommend you folding the code.
    useEffect(() => {
        const rpcServer = process.env.RPC_SERVER!;

        // Handle incoming WebSocket messages and controller commands
        function handleMessage(event: MessageEvent) {
            try {
                const message = JSON.parse(event.data);

                // Handle controller commands based on object type
                switch (message.object) {
                    case "timer":
                        switch (message.cmd) {
                            case "start":
                                startTimer();
                                break;
                            case "stop":
                                stopTimer();
                                break;
                            case "reset":
                                resetTimer();
                                break;
                            case "continue":
                                continueTimer();
                                break;
                            default:
                                console.warn("Unknown timer command:", message.cmd);
                        }
                        break;
                    default:
                        console.warn("Unknown object type:", message.object);
                }
            } catch (error) {
                console.error("Failed to parse WebSocket message:", error);
            }
        }

        const wsClient = createWSClient({
            url: rpcServer,
        });

        const trpcClient = createTRPCProxyClient({
            links: [
                wsLink({
                    client: wsClient,
                }),
            ],
        });

        wsClientRef.current = wsClient;
        trpcClientRef.current = trpcClient;

        const handleOpen = () => {
            setIsConnected(true);
        };

        const handleClose = () => {
            setIsConnected(false);
        };

        const handleError = (error: Event) => {
            console.error("WebSocket error:", error);
            setIsConnected(false);
        };

        const connection = wsClient.connection;

        if (connection) {
            const ws = connection.ws;

            ws.addEventListener("open", handleOpen);
            ws.addEventListener("close", handleClose);
            ws.addEventListener("error", handleError);
            ws.addEventListener("message", handleMessage);
        }

        return () => {
            if (connection) {
                const ws = connection.ws;
                ws.removeEventListener("open", handleOpen);
                ws.removeEventListener("close", handleClose);
                ws.removeEventListener("error", handleError);
                ws.removeEventListener("message", handleMessage);
            }
            wsClient.close();
        };
    }, []);

    // the "mind-controlled" timer
    // basically -10ms per "tick".
    useEffect(() => {
        if (isTimerRunning) {
            timerIntervalRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 0) {
                        setIsTimerRunning(false);
                        return 0;
                    }
                    return prevTime - 10;
                });
            }, 10);
        } else {
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
                timerIntervalRef.current = null;
            }
        }

        return () => {
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
                timerIntervalRef.current = null;
            }
        };
    }, [isTimerRunning]);

    function formatTime(milliseconds: number) {
        const totalMs = Math.max(0, milliseconds);
        const minutes = Math.floor(totalMs / 60000);
        const seconds = Math.floor((totalMs % 60000) / 1000);
        const ms = Math.floor((totalMs % 1000) / 10);

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
    };

    return (
        <div className={"h-visible vns-background flex flex-col relative"}>
            <div className={`absolute lg:hidden top-[50px] right-6 z-10 text-sm font-bold ${isConnected ? "text-green-300" : "text-red-300"}`}>
                {isConnected ? "Online" : "Offline"}
            </div>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle title={"Ban pick"} favorText={""} dark />
                </div>
            </div>
            <div
                className={"flex flex-col flex-1/2 items-center justify-center gap-y-4 text-base-content mb-4"}
                data-theme={"dark"}
            >
                <div className={"hidden lg:block text-base-content text-3xl font-bold"}>
                    Bạn cần sử dụng điện thoại cho phần này.
                </div>
                <div className={"block lg:hidden text-base-content text-xl font-mono"}>
                    {formatTime(timeLeft)}
                </div>
                <div className={"lg:hidden flex items-center justify-center gap-x-2"}>
                    <input className={"border-1 border-white px-5"} value={operatorNameSearch} onChange={e => setOperatorNameSearch(e.target.value)} placeholder={"Ghi tên op ở đây..."} />
                    <button className={"border-1 border-white mx-2 px-4 bg-[#2e76a9]"} type={"button"} onClick={() => setOperatorNameSearch("")}>Clear</button>
                </div>
                <div className={"lg:hidden flex items-center justify-center gap-x-2"}>
                    <Image src={selectedRarity >= 1 ? StarSelected : StarUnSelected} alt={"Star 1"} height={32} onClick={() => setSelectedRarity(1)} />
                    <Image src={selectedRarity >= 2 ? StarSelected : StarUnSelected} alt={"Star 2"} height={32} onClick={() => setSelectedRarity(2)} />
                    <Image src={selectedRarity >= 3 ? StarSelected : StarUnSelected} alt={"Star 3"} height={32} onClick={() => setSelectedRarity(3)} />
                    <Image src={selectedRarity >= 4 ? StarSelected : StarUnSelected} alt={"Star 4"} height={32} onClick={() => setSelectedRarity(4)} />
                    <Image src={selectedRarity >= 5 ? StarSelected : StarUnSelected} alt={"Star 5"} height={32} onClick={() => setSelectedRarity(5)} />
                    <Image src={selectedRarity >= 6 ? StarSelected : StarUnSelected} alt={"Star 6"} height={32} onClick={() => setSelectedRarity(6)} />
                </div>
                <div className={"lg:hidden flex items-center justify-center gap-x-2"}>
                    <div>Class</div>
                    <ClassIcon operatorClass={"caster"} active={selectedClass === "caster"} onClick={() => setSelectedClass("caster")} />
                    <ClassIcon operatorClass={"medic"} active={selectedClass === "medic"} onClick={() => setSelectedClass("medic")} />
                    <ClassIcon operatorClass={"guard"} active={selectedClass === "guard"} onClick={() => setSelectedClass("guard")} />
                    <ClassIcon operatorClass={"sniper"} active={selectedClass === "sniper"} onClick={() => setSelectedClass("sniper")} />
                    <ClassIcon operatorClass={"specialist"} active={selectedClass === "specialist"} onClick={() => setSelectedClass("specialist")} />
                    <ClassIcon operatorClass={"supporter"} active={selectedClass === "supporter"} onClick={() => setSelectedClass("supporter")} />
                    <ClassIcon operatorClass={"defender"} active={selectedClass === "defender"} onClick={() => setSelectedClass("defender")} />
                    <ClassIcon operatorClass={"vanguard"} active={selectedClass === "vanguard"} onClick={() => setSelectedClass("vanguard")} />
                </div>
                <div className={"lg:hidden flex items-center justify-center gap-x-2"}>
                    <div>Sub-class</div>
                    <Image src={StarUnSelected} alt={"Star 1"} height={32} onClick={() => setSelectedRarity(1)} />
                    <Image src={StarUnSelected} alt={"Star 2"} height={32} onClick={() => setSelectedRarity(2)} />
                    <Image src={StarUnSelected} alt={"Star 3"} height={32} onClick={() => setSelectedRarity(3)} />
                    <Image src={StarUnSelected} alt={"Star 4"} height={32} onClick={() => setSelectedRarity(4)} />
                    <Image src={StarUnSelected} alt={"Star 5"} height={32} onClick={() => setSelectedRarity(5)} />
                    <Image src={StarUnSelected} alt={"Star 6"} height={32} onClick={() => setSelectedRarity(6)} />
                </div>
                <div className={"lg:hidden grid grid-cols-5 gap-2 h-64 overflow-y-auto mx-6"}>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"} onClick={() => setSelectedOperator("a")}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                    <div className={"h-20 bg-gray-200 flex items-center justify-center"}>Operator</div>
                </div>
                <div className={"lg:hidden flex min-h-32 justify-center items-center text-red-300 italic border-2 border-white px-6"}>
                    Hãy chọn Operator bạn muốn cấm.
                </div>
                <div className={"lg:hidden flex min-h-12 items-center justify-center gap-x-2"}>
                    <button type={"button"} className={"btn bg-red-400 w-48"} disabled={!selectedOperator} onClick={handleBanSubmission}>BAN</button>
                    <button type={"button"} className={"btn bg-green-400 w-48 text-black"} onClick={() => setSelectedOperator("")}>CLEAR</button>
                </div>
            </div>
        </div>
    );
}
