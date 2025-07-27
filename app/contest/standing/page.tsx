"use client";

import type { ContestantInfo } from "@/lib/vns";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";

export default function OverviewPage() {
    const [data, setData] = useState<ContestantInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/contest")
            .then(res => res.json())
            .then((json) => {
                setData(json.message);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load data");
                setLoading(false);
            });
    }, []);

    return (
        <div className={"vns-background flex h-[100vh] flex-col"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle dark favorText={""} title={"STANDING"} />
                </div>
            </div>
            <div
                className={"flex flex-1/2 flex-col items-center justify-center space-y-4"}
                data-theme={"dark"}
            >
                {loading && <div>Loading...</div>}
                {!loading && error && <div>{error}</div>}
                {!loading && !error && (
                    <table
                        className={"table-auto border bg-black text-center text-white"}
                    >
                        <thead>
                            <tr>
                                <th className={"w-[100px] border p-8 text-4xl"}>Hạng</th>
                                <th className={"w-[300px] border px-2 py-1 text-4xl"}>Tên</th>
                                <th className={"w-[200px] border px-2 py-1 text-4xl"}>Mã số vé</th>
                                <th className={"w-[300px] border px-2 py-1 text-4xl"}>Điểm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => {
                                let style = "";

                                switch (row.rank) {
                                    case 1:
                                        style = "bg-amber-300 text-black";
                                        break;
                                    case 2:
                                        style = "bg-gray-300 text-black";
                                        break;
                                    case 3:
                                        style = "bg-orange-800";
                                        break;
                                    case 6:
                                    case 7:
                                    case 8:
                                        style = "opacity-75";
                                        break;
                                    case 9:
                                    case 10:
                                        style = "opacity-50";
                                        break;
                                }

                                return (
                                    <tr
                                        key={row.number}
                                        className={`${style}`}
                                    >
                                        <td className={"border border-white px-2 py-1 text-2xl font-bold"}>{row.rank}</td>
                                        <td className={"border border-white px-2 py-1 text-2xl"}>{row.name}</td>
                                        <td className={"border border-white px-2 py-1 text-2xl"}>{row.number}</td>
                                        <td className={"border border-white px-2 py-1 text-2xl"}>{row.score}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
