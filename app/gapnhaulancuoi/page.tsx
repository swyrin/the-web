"use client";

import type { createTRPCProxyClient, createWSClient } from "@trpc/client";
import type { Terra } from "@/lib/supabase/terra";
import type { OperatorClass } from "@/lib/vns";
import Fuse from "fuse.js";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import PageTitle from "@/components/PageTitle";
import ClassIcon from "@/components/tournament/ClassIcon";
import OperatorIcon from "@/components/tournament/OperatorIcon";
import { supabase } from "@/lib/supabase/client";
import StarSelected from "@/public/tournament/drafting/star-selected.svg";
import StarUnSelected from "@/public/tournament/drafting/star-unselected.svg";

type Operator = Terra["public"]["Tables"]["operator"]["Row"];
type SelectedOperator = Pick<Operator, "name" | "rarity" | "archetype" | "profession" | "charId">;

export default function DraftingPage() {
    const [operatorNameSearch, setOperatorNameSearch] = useState("");
    const [selectedRarity, setSelectedRarity] = useState(6);
    const [selectedClass, setSelectedClass] = useState<OperatorClass>("caster");
    const [selectedOperators, setSelectedOperators] = useState<string[]>([]);
    const [bannedOperators, setBannedOperators] = useState<string[]>([]);
    const [operators, setOperators] = useState<SelectedOperator[]>([]);
    const [isConnected, _setIsConnected] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60000);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const _wsClientRef = useRef<ReturnType<typeof createWSClient> | null>(null);
    const _trpcClientRef = useRef<ReturnType<typeof createTRPCProxyClient> | null>(null);
    const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // region: timer control functions
    // function startTimer() {
    //     setIsTimerRunning(true);
    // }
    //
    // function stopTimer() {
    //     setIsTimerRunning(false);
    //     if (timerIntervalRef.current) {
    //         clearInterval(timerIntervalRef.current);
    //         timerIntervalRef.current = null;
    //     }
    // }
    //
    // function resetTimer() {
    //     setIsTimerRunning(false);
    //     setTimeLeft(60000);
    //     if (timerIntervalRef.current) {
    //         clearInterval(timerIntervalRef.current);
    //         timerIntervalRef.current = null;
    //     }
    // }
    //
    // function continueTimer() {
    //     setIsTimerRunning(true);
    // }
    // endregion: timer control functions

    // region: operator selection
    const fuse = useMemo(() => {
        if (operators.length === 0)
            return null;

        return new Fuse(operators, {
            keys: ["name"],
            threshold: 0.4,
            includeScore: true,
            minMatchCharLength: 1,
        });
    }, [operators]);

    const filteredOperators = useMemo(() => {
        let filtered = operators;

        if (operatorNameSearch && fuse) {
            const results = fuse.search(operatorNameSearch);
            filtered = results.map(result => result.item);
        }

        filtered = filtered.filter((op) => {
            const matchesRarity = op.rarity <= selectedRarity;
            const matchesClass = op.profession.toLowerCase() === selectedClass;
            return matchesRarity && matchesClass;
        });

        // desc rarity, asc name
        return filtered.sort((a, b) => {
            if (a.rarity !== b.rarity) {
                return b.rarity - a.rarity;
            }
            return a.name.localeCompare(b.name);
        });
    }, [operators, operatorNameSearch, selectedRarity, selectedClass, fuse]);

    async function handleBanSubmission() {
        // I guess I watched too much Balatro University...
        console.info("Shipping it:", selectedOperators);

        const { error } = await supabase.from("member_vote").insert(
            selectedOperators.map(charId => ({
                id: charId,
                since: new Date().toISOString(),
            })),
        );

        if (error) {
            console.error("Failed to submit ban:", error);
        }

        // just fail silently or else there will a chaos at the event.
        setSelectedOperators([]);
    }

    function handleOperatorSelection(charId: string) {
        // Prevent selection if operator is banned
        if (bannedOperators.includes(charId)) {
            return;
        }

        setSelectedOperators((prev) => {
            if (prev.includes(charId)) {
                // already selected
                return prev.filter(id => id !== charId);
            } else if (prev.length < 6) {
                // not at capacity
                return [...prev, charId];
            }
            return prev; // we are full, bail tf out
        });
    }

    function removeSelectedOperator(charId: string) {
        setSelectedOperators(prev => prev.filter(id => id !== charId));
    }
    // endregion: operator selection

    // trpc connection.
    // I strongly recommend you folding the code.
    // useEffect(() => {
    //     const rpcServer = process.env.RPC_SERVER!;
    //
    //     // Handle incoming WebSocket messages and controller commands
    //     function handleMessage(event: MessageEvent) {
    //         try {
    //             const message = JSON.parse(event.data);
    //
    //             // Handle controller commands based on object type
    //             switch (message.object) {
    //                 case "timer":
    //                     switch (message.cmd) {
    //                         case "start":
    //                             startTimer();
    //                             break;
    //                         case "stop":
    //                             stopTimer();
    //                             break;
    //                         case "reset":
    //                             resetTimer();
    //                             break;
    //                         case "continue":
    //                             continueTimer();
    //                             break;
    //                         default:
    //                             console.warn("Unknown timer command:", message.cmd);
    //                     }
    //                     break;
    //                 default:
    //                     console.warn("Unknown object type:", message.object);
    //             }
    //         } catch (error) {
    //             console.error("Failed to parse WebSocket message:", error);
    //         }
    //     }
    //
    //     const wsClient = createWSClient({
    //         url: rpcServer,
    //     });
    //
    //     const trpcClient = createTRPCProxyClient({
    //         links: [
    //             wsLink({
    //                 client: wsClient,
    //             }),
    //         ],
    //     });
    //
    //     wsClientRef.current = wsClient;
    //     trpcClientRef.current = trpcClient;
    //
    //     const handleOpen = () => {
    //         setIsConnected(true);
    //     };
    //
    //     const handleClose = () => {
    //         setIsConnected(false);
    //     };
    //
    //     const handleError = (error: Event) => {
    //         console.error("WebSocket error:", error);
    //         setIsConnected(false);
    //     };
    //
    //     const connection = wsClient.connection;
    //
    //     if (connection) {
    //         const ws = connection.ws;
    //
    //         ws.addEventListener("open", handleOpen);
    //         ws.addEventListener("close", handleClose);
    //         ws.addEventListener("error", handleError);
    //         ws.addEventListener("message", handleMessage);
    //     }
    //
    //     return () => {
    //         if (connection) {
    //             const ws = connection.ws;
    //             ws.removeEventListener("open", handleOpen);
    //             ws.removeEventListener("close", handleClose);
    //             ws.removeEventListener("error", handleError);
    //             ws.removeEventListener("message", handleMessage);
    //         }
    //         wsClient.close();
    //     };
    // }, []);

    // get initial banned operators from Eye of Priestess.
    // more escape hatches I guess.
    useEffect(() => {
        (async function () {
            const { data } = await supabase
                .from("banned_operators")
                .select("id");

            if (data) {
                const bannedIds = data.map(item => item.id);
                setBannedOperators(bannedIds);
            }
        })();
    }, []);

    // handle ban updates from Eye of Priestess.
    useEffect(() => {
        const channel = supabase
            .channel("ban-update")
            .on("postgres_changes", {
                event: "INSERT",
                schema: "public",
                table: "banned_operators",
            }, (payload) => {
                setBannedOperators(prev => [...prev, payload.new.id]);
            })
            .on("postgres_changes", {
                event: "UPDATE",
                schema: "public",
                table: "banned_operators",
            }, (payload) => {
                setBannedOperators((prev) => {
                    const filtered = prev.filter(id => id !== payload.old.id);
                    return [...filtered, payload.new.id];
                });
            })
            .on("postgres_changes", {
                event: "DELETE",
                schema: "public",
                table: "banned_operators",
            }, (payload) => {
                setBannedOperators(prev => prev.filter(id => id !== payload.old.id));
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel).then();
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

    // fetch the operators
    // it's just ~350 operators, so I guess supabase can handle that.
    useEffect(() => {
        (async function () {
            const { data: operators } = await supabase.from("operator").select("name,id,rarity,archetype,profession,charId");
            if (operators)
                setOperators(operators);
        })();
    }, []);

    // region: data backup, must be last hook because React effects are LIFO
    useEffect(() => {
        const savedSearch = localStorage.getItem("drafting-search");
        const savedRarity = localStorage.getItem("drafting-rarity");
        const savedClass = localStorage.getItem("drafting-class");
        const savedOperators = localStorage.getItem("drafting-selected-operators");
        const savedBannedOperators = localStorage.getItem("drafting-banned-operators");

        if (savedSearch) {
            setOperatorNameSearch(savedSearch);
        }
        if (savedRarity) {
            setSelectedRarity(Number.parseInt(savedRarity, 10));
        }
        if (savedClass) {
            setSelectedClass(savedClass as OperatorClass);
        }
        if (savedOperators) {
            try {
                const parsed = JSON.parse(savedOperators) as string[];
                setSelectedOperators(parsed);
            } catch (error) {
                console.warn("Failed to parse saved operators:", error);
            }
        }
        if (savedBannedOperators) {
            try {
                const parsed = JSON.parse(savedBannedOperators) as string[];
                setBannedOperators(parsed);
            } catch (error) {
                console.warn("Failed to parse saved banned operators:", error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("drafting-search", operatorNameSearch);
    }, [operatorNameSearch]);

    useEffect(() => {
        localStorage.setItem("drafting-rarity", selectedRarity.toString());
    }, [selectedRarity]);

    useEffect(() => {
        localStorage.setItem("drafting-class", selectedClass);
    }, [selectedClass]);

    useEffect(() => {
        localStorage.setItem("drafting-selected-operators", JSON.stringify(selectedOperators));
    }, [selectedOperators]);

    useEffect(() => {
        localStorage.setItem("drafting-banned-operators", JSON.stringify(bannedOperators));
    }, [bannedOperators]);
    // endregion: data backup

    function formatTime(milliseconds: number) {
        const totalMs = Math.max(0, milliseconds);
        const minutes = Math.floor(totalMs / 60000);
        const seconds = Math.floor((totalMs % 60000) / 1000);
        const ms = Math.floor((totalMs % 1000) / 10);

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
    }

    return (
        <div className={"h-visible vns-background flex flex-col relative"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle title={"Ban pick"} favorText={""} dark />
                </div>
            </div>
            <div
                className={"flex flex-col items-center justify-center gap-y-4 text-base-content mb-4"}
                data-theme={"dark"}
            >
                <div className={`text-sm font-bold ${isConnected ? "text-green-300" : "text-red-300"}`}>
                    Kết nối đến Terra #1:
                    {" "}
                    {isConnected ? "Online" : "Offline"}
                </div>
                <div className={"hidden lg:block text-base-content text-3xl font-bold"}>
                    Bạn cần sử dụng điện thoại cho phần này.
                </div>

                {/* the actual shit. */}
                <div className={`lg:hidden flex flex-col items-center justify-center gap-y-4`}>
                    <div className={"text-base-content text-xl font-mono"}>
                        {formatTime(timeLeft)}
                    </div>
                    <div className={"flex items-center justify-center gap-x-2"}>
                        <input className={"border-1 border-white px-5"} value={operatorNameSearch} onChange={e => setOperatorNameSearch(e.target.value)} placeholder={"Ghi tên op ở đây..."} />
                        <button className={"border-1 border-white mx-2 px-4 bg-[#2e76a9]"} type={"button"} onClick={() => setOperatorNameSearch("")}>Clear</button>
                    </div>
                    <div className={"flex items-center justify-center gap-x-2"}>
                        <Image src={selectedRarity >= 1 ? StarSelected : StarUnSelected} alt={"Star 1"} height={32} onClick={() => setSelectedRarity(1)} />
                        <Image src={selectedRarity >= 2 ? StarSelected : StarUnSelected} alt={"Star 2"} height={32} onClick={() => setSelectedRarity(2)} />
                        <Image src={selectedRarity >= 3 ? StarSelected : StarUnSelected} alt={"Star 3"} height={32} onClick={() => setSelectedRarity(3)} />
                        <Image src={selectedRarity >= 4 ? StarSelected : StarUnSelected} alt={"Star 4"} height={32} onClick={() => setSelectedRarity(4)} />
                        <Image src={selectedRarity >= 5 ? StarSelected : StarUnSelected} alt={"Star 5"} height={32} onClick={() => setSelectedRarity(5)} />
                        <Image src={selectedRarity >= 6 ? StarSelected : StarUnSelected} alt={"Star 6"} height={32} onClick={() => setSelectedRarity(6)} />
                    </div>
                    <div className={"flex items-center justify-center px-2"}>
                        <div className={"mr-5"}>Class</div>
                        <ClassIcon operatorClass={"caster"} active={selectedClass === "caster"} onClick={() => setSelectedClass("caster")} />
                        <ClassIcon operatorClass={"medic"} active={selectedClass === "medic"} onClick={() => setSelectedClass("medic")} />
                        <ClassIcon operatorClass={"guard"} active={selectedClass === "guard"} onClick={() => setSelectedClass("guard")} />
                        <ClassIcon operatorClass={"sniper"} active={selectedClass === "sniper"} onClick={() => setSelectedClass("sniper")} />
                        <ClassIcon operatorClass={"specialist"} active={selectedClass === "specialist"} onClick={() => setSelectedClass("specialist")} />
                        <ClassIcon operatorClass={"supporter"} active={selectedClass === "supporter"} onClick={() => setSelectedClass("supporter")} />
                        <ClassIcon operatorClass={"defender"} active={selectedClass === "defender"} onClick={() => setSelectedClass("defender")} />
                        <ClassIcon operatorClass={"vanguard"} active={selectedClass === "vanguard"} onClick={() => setSelectedClass("vanguard")} />
                    </div>
                    <div className={"grid grid-cols-5 gap-4 h-[25vh] overflow-y-auto px-4 content-start"}>
                        {filteredOperators.map(operator => (
                            <OperatorIcon
                                key={operator.charId}
                                operator={{
                                    id: operator.charId,
                                    name: operator.name,
                                    rarity: operator.rarity,
                                    class: operator.profession as OperatorClass,
                                    subclass: operator.archetype,
                                }}
                                isSelected={selectedOperators.includes(operator.charId)}
                                isBanned={bannedOperators.includes(operator.charId)}
                                onClickFn={() => handleOperatorSelection(operator.charId)}
                            />
                        ))}
                    </div>
                    <div className={"w-full px-6"}>
                        <div className={"text-red-300 italic text-center mb-2"}>
                            Hãy chọn Operator bạn muốn cấm (
                            {selectedOperators.length}
                            /6)
                        </div>
                        <div className={"grid grid-cols-6 gap-2 h-32 content-center"}>
                            {Array.from({ length: 6 }, (_, index) => {
                                const selectedCharId = selectedOperators[index];
                                const selectedOp = selectedCharId ? operators.find(op => op.charId === selectedCharId) : null;

                                return (
                                    <div
                                        key={index}
                                        className={"h-20 flex items-start justify-center cursor-pointer"}
                                        onClick={() => selectedCharId && removeSelectedOperator(selectedCharId)}
                                    >
                                        {selectedOp
                                            ? (
                                                    <OperatorIcon
                                                        operator={{
                                                            id: selectedOp.charId,
                                                            name: selectedOp.name,
                                                            rarity: selectedOp.rarity,
                                                            class: selectedOp.profession as OperatorClass,
                                                            subclass: selectedOp.archetype,
                                                        }}
                                                        isSelected={false}
                                                        onClickFn={() => removeSelectedOperator(selectedCharId)}
                                                    />
                                                )
                                            : (
                                                    <div className={"text-gray-500 text-xs text-center"}>
                                                        Empty
                                                    </div>
                                                )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"grid grid-cols-2 content-stretch w-screen"}>
                        <button
                            type={"button"}
                            className={"btn bg-red-400 mx-6"}
                            disabled={selectedOperators.length === 0}
                            onClick={async () => {
                                await handleBanSubmission();
                            }}
                        >
                            BAN
                        </button>
                        <button type={"button"} className={"btn bg-green-400 text-black mx-6"} onClick={() => setSelectedOperators([])}>CLEAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
