"use client";

import type { Terra } from "@/lib/supabase/terra";
import type { OperatorClass, OperatorRarity } from "@/lib/vns";
import Fuse from "fuse.js";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import PageTitle from "@/components/PageTitle";
import ClassIcon from "@/components/tournament/ClassIcon";
import OperatorIcon from "@/components/tournament/OperatorIcon";
import { useTimer } from "@/lib/hooks/useTimer";
import { supabase } from "@/lib/supabase/client";
import StarSelected from "@/public/tournament/drafting/star-selected.svg";
import StarUnSelected from "@/public/tournament/drafting/star-unselected.svg";

type Operator = Terra["public"]["Tables"]["operators_v2"]["Row"];
type SelectedOperator = Pick<Operator, "name" | "rarity" | "profession" | "charid">;
type OperatorClassSelection = "ALL" | OperatorClass;

export default function DraftingPage() {
    const [operatorNameSearch, setOperatorNameSearch] = useState("");
    const [maxRarity, setMaxRarity] = useState(6);
    const [selectedClass, setSelectedClass] = useState<OperatorClassSelection>("ALL");
    const [selectedOperators, setSelectedOperators] = useState<string[]>([]);
    const [bannedOperators, setBannedOperators] = useState<string[]>([]);
    const [operators, setOperators] = useState<SelectedOperator[]>([]);
    const [isVotingAllowed, setIsVotingAllowed] = useState(false);
    const { isRealtimeConnected, isTimerLoaded, timerData, getDisplayTime, formatTime } = useTimer();

    // #region operator selection
    const fuse = useMemo(() => {
        if (operators.length === 0)
            return null;

        return new Fuse(operators, {
            keys: ["name"],
            threshold: 0.5,
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
            const matchesRarity = op.rarity <= maxRarity;
            const matchesClass = selectedClass === "ALL" || (op.profession as OperatorClass) === selectedClass;
            return matchesRarity && matchesClass;
        });

        // desc rarity, asc name
        return filtered.sort((a, b) => {
            if (a.rarity !== b.rarity) {
                return b.rarity - a.rarity;
            }
            return a.name.localeCompare(b.name);
        });
    }, [operators, operatorNameSearch, maxRarity, selectedClass, fuse]);

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

        // ...and yes
        setIsVotingAllowed(false);
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

    function handleClassSelection(classType: OperatorClass) {
        // basically toggle the class selection
        if (selectedClass === classType) {
            setSelectedClass("ALL");
        } else {
            setSelectedClass(classType);
        }
    }
    // #endregion operator selection

    useEffect(() => {
        // get initial banned operators from Eye of Priestess.
        // more escape hatches I guess.
        (async () => {
            const { data } = await supabase
                .from("banned_operators")
                .select("id");

            if (data) {
                const bannedIds = data.map(item => item.id);
                setBannedOperators(bannedIds);
            }
        })();

        // fetch the operators
        // it's just ~350 operators, so I guess supabase can handle that.
        (async () => {
            const { data: operators } = await supabase.from("operators_v2").select("name,charid,rarity,profession,archetype");
            if (operators) {
                setOperators(operators);
            }
        })();

        const channel = supabase
            .channel("ban-update")
            .on("postgres_changes", {
                event: "INSERT",
                schema: "public",
                table: "banned_operators",
            }, (payload) => {
                console.info("New ban added:", payload.new.id);
                setBannedOperators(prev => [...prev, payload.new.id]);
            })
            .on("postgres_changes", {
                event: "UPDATE",
                schema: "public",
                table: "banned_operators",
            }, (payload) => {
                setBannedOperators((prev) => {
                    console.info(`New ban updated: ${payload.old.id} to ${payload.new.id}`);
                    const filtered = prev.filter(id => id !== payload.old.id);
                    return [...filtered, payload.new.id];
                });
            })
            .on("postgres_changes", {
                event: "DELETE",
                schema: "public",
                table: "banned_operators",
            }, (payload) => {
                console.info("New ban nuked:", payload.old.id);
                setBannedOperators(prev => prev.filter(id => id !== payload.old.id));
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel).then();
        };
    }, []);

    useEffect(() => {
        switch (timerData.state) {
            case "paused":
            case "stopped":
                setIsVotingAllowed(false);
                break;
            case "running":
                setIsVotingAllowed(true);
                break;
        }
    }, [timerData.state]);

    // #region data backup
    useEffect(() => {
        const savedSearch = localStorage.getItem("drafting-search");
        const savedRarity = localStorage.getItem("drafting-rarity");
        const savedClass = localStorage.getItem("drafting-class");
        const savedOperators = localStorage.getItem("drafting-selected-operators");

        if (savedSearch) {
            setOperatorNameSearch(savedSearch);
        }
        if (savedRarity) {
            setMaxRarity(Number.parseInt(savedRarity, 10));
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
    }, []);

    useEffect(() => {
        localStorage.setItem("drafting-search", operatorNameSearch);
    }, [operatorNameSearch]);

    useEffect(() => {
        localStorage.setItem("drafting-rarity", maxRarity.toString());
    }, [maxRarity]);

    useEffect(() => {
        localStorage.setItem("drafting-class", selectedClass);
    }, [selectedClass]);

    useEffect(() => {
        localStorage.setItem("drafting-selected-operators", JSON.stringify(selectedOperators));
    }, [selectedOperators]);
    // #endregion data backup

    return (
        <div className={"h-[100svh] vns-background flex flex-col"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle title={"Ban pick"} favorText={""} dark />
                </div>
            </div>
            <div
                className={"flex flex-col items-center justify-center gap-y-4 text-base-content mb-8"}
                data-theme={"dark"}
            >
                <div className={"flex text-sm font-bold"}>
                    <div>
                        PRTS:
                        {" "}
                        <span className={`${isRealtimeConnected ? "text-green-300" : "text-red-300"}`}>
                            {isRealtimeConnected ? "Online" : "Offline"}
                        </span>
                    </div>
                </div>

                <div className={"flex flex-col items-center justify-center gap-y-4"}>
                    <div className={"text-xl text-white"}>
                        Thời gian còn lại:
                        {" "}
                        <span className={`font-extrabold ${
                            !isTimerLoaded
                                ? "text-red-400"
                                : timerData.state === "running"
                                    ? "text-green-400"
                                    : timerData.state === "paused"
                                        ? "text-yellow-400"
                                        : "text-red-400"
                        }`}
                        >
                            {!isTimerLoaded ? "--:--" : formatTime(getDisplayTime())}
                        </span>
                    </div>
                    <div className={"space-x-5"}>
                        <input className={"border-1 border-white px-5"} value={operatorNameSearch} onChange={e => setOperatorNameSearch(e.target.value)} placeholder={"Ghi tên op ở đây..."} />
                        <button
                            className={"border-1 border-white mx-2 px-4 bg-[#2e76a9] disabled:bg-gray-600 disabled:opacity-50"}
                            type={"button"}
                            disabled={operatorNameSearch === ""}
                            onClick={() => setOperatorNameSearch("")}
                        >
                            Clear
                        </button>
                    </div>
                    <div className={"flex items-center justify-center space-x-1"}>
                        <Image src={maxRarity >= 1 ? StarSelected : StarUnSelected} alt={"Star 1"} height={32} onClick={() => setMaxRarity(1)} />
                        <Image src={maxRarity >= 2 ? StarSelected : StarUnSelected} alt={"Star 2"} height={32} onClick={() => setMaxRarity(2)} />
                        <Image src={maxRarity >= 3 ? StarSelected : StarUnSelected} alt={"Star 3"} height={32} onClick={() => setMaxRarity(3)} />
                        <Image src={maxRarity >= 4 ? StarSelected : StarUnSelected} alt={"Star 4"} height={32} onClick={() => setMaxRarity(4)} />
                        <Image src={maxRarity >= 5 ? StarSelected : StarUnSelected} alt={"Star 5"} height={32} onClick={() => setMaxRarity(5)} />
                        <Image src={maxRarity >= 6 ? StarSelected : StarUnSelected} alt={"Star 6"} height={32} onClick={() => setMaxRarity(6)} />
                    </div>
                    <div className={"flex items-center justify-center space-x-1"}>
                        <div className={"pr-4"}>Class</div>
                        <ClassIcon operatorClass={"Caster"} active={selectedClass === "Caster"} onClick={() => handleClassSelection("Caster")} />
                        <ClassIcon operatorClass={"Medic"} active={selectedClass === "Medic"} onClick={() => handleClassSelection("Medic")} />
                        <ClassIcon operatorClass={"Guard"} active={selectedClass === "Guard"} onClick={() => handleClassSelection("Guard")} />
                        <ClassIcon operatorClass={"Sniper"} active={selectedClass === "Sniper"} onClick={() => handleClassSelection("Sniper")} />
                        <ClassIcon operatorClass={"Specialist"} active={selectedClass === "Specialist"} onClick={() => handleClassSelection("Specialist")} />
                        <ClassIcon operatorClass={"Supporter"} active={selectedClass === "Supporter"} onClick={() => handleClassSelection("Supporter")} />
                        <ClassIcon operatorClass={"Defender"} active={selectedClass === "Defender"} onClick={() => handleClassSelection("Defender")} />
                        <ClassIcon operatorClass={"Vanguard"} active={selectedClass === "Vanguard"} onClick={() => handleClassSelection("Vanguard")} />
                    </div>
                    <div className={"grid grid-cols-5 lg:grid-cols-9 space-x-2 space-y-4 h-[25vh] overflow-y-auto overflow-x-hidden content-start"}>
                        {filteredOperators.map(operator => (
                            <OperatorIcon
                                key={operator.charid}
                                operator={{
                                    id: operator.charid,
                                    name: operator.name,
                                    rarity: operator.rarity as OperatorRarity,
                                    class: operator.profession as OperatorClass,
                                }}
                                isSelected={selectedOperators.includes(operator.charid)}
                                isBanned={(operator.profession as OperatorClass) === "Specialist" || bannedOperators.includes(operator.charid)}
                                onClickFn={() => handleOperatorSelection(operator.charid)}
                            />
                        ))}
                    </div>
                    <div className={"w-[92vw]"}>
                        <div className={"text-red-300 italic text-center mb-2 font-extrabold"}>
                            Hãy chọn Operator bạn muốn cấm (
                            {selectedOperators.length}
                            /6)
                        </div>
                        <div className={"grid grid-cols-6 gap-2 content-center"}>
                            {Array.from({ length: 6 }, (_, index) => {
                                const selectedCharId = selectedOperators[index];
                                const selectedOp = selectedCharId ? operators.find(op => op.charid === selectedCharId) : null;

                                return (
                                    <div
                                        key={index}
                                        className={"w-20 h-32 flex items-start justify-center"}
                                        onClick={() => selectedCharId && removeSelectedOperator(selectedCharId)}
                                    >
                                        {selectedOp
                                            ? (
                                                    <OperatorIcon
                                                        operator={{
                                                            id: selectedOp.charid,
                                                            name: selectedOp.name,
                                                            rarity: selectedOp.rarity as OperatorRarity,
                                                            class: selectedOp.profession as OperatorClass,
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
                    <div className={"px-12 space-x-4 grid grid-cols-2 grid-rows-1 w-[95vw]"}>
                        <button
                            type={"button"}
                            className={"btn bg-red-400"}
                            disabled={selectedOperators.length === 0 || !isVotingAllowed || getDisplayTime() <= 0}
                            onClick={async () => {
                                await handleBanSubmission();
                            }}
                        >
                            BAN
                        </button>
                        <button type={"button"} className={"btn bg-green-400 text-black"} onClick={() => setSelectedOperators([])}>CLEAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
