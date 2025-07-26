"use client";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";

export default function OverviewPage() {
    const [data, setData] = useState<{ number: number; name: string; score: number; rank: number }[]>([]);
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
        <div className={"h-visible vns-background flex flex-col"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <PageTitle title={"STANDING"} favorText={""} dark />
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
                        className={"min-w-[300px] border border-white text-center text-white w-[70%]"}
                    >
                        <thead>
                            <tr>
                                <th className={"border px-2 py-1"}>Rank</th>
                                <th className={"border px-2 py-1"}>Name</th>
                                <th className={"border px-2 py-1"}>Number</th>
                                <th className={"border px-2 py-1"}>Enemy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(row => (
                                <tr
                                    key={row.number}
                                    className={`ranking${row.rank}${row.rank > 3 ? " not-pod" : ""}`}
                                >
                                    <td className={"border px-2 py-1"}>{row.rank}</td>
                                    <td className={"border px-2 py-1"}>{row.name}</td>
                                    <td className={"border px-2 py-1"}>{row.number}</td>
                                    <td className={"border px-2 py-1"}>{row.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
