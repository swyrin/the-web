"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// TODO: Fill this shit.
const token = "";

export default function VoteCount() {
    const [voteCount, setVoteCount] = useState<number>(0);
    const [mostVoted, setMostVoted] = useState<{ charid: string; count: number } | null>(null);

    async function fetchVoteCount() {
        const res = await fetch("/api/operator/votes");
        const data = await res.json();
        if (res.ok && Array.isArray(data)) {
            const total = data.reduce((sum, entry) => sum + entry.count, 0);
            setVoteCount(total);
            toast.success("Fetched successfully");
        } else {
            setVoteCount(0);
        }
    }

    async function fetchMostVoted() {
        const res = await fetch("/api/operator/preview");
        const data = await res.json();
        if (res.ok && data && typeof data === "object") {
            setMostVoted({ charid: data.charid, count: data.count });
            toast.success("Fetched successfully");
        } else {
            setMostVoted(null);
            toast.error("Fetch failure, maybe we got 412'd");
        }
    }

    async function wipeVotes() {
        const body: any = {
            token
        };

        const res = await fetch("/api/operator/votes", { method: "DELETE", body: JSON.stringify(body) });
        if (res.ok) {
            toast.success("Vote wipe command success.");
        } else {
            toast.error("Vote wipe command failure.");
        }
    }

    async function ban() {
        const body: any = {
            token
        };

        const res = await fetch("/api/operator/ban", { method: "DELETE", body: JSON.stringify(body) });

        if (res.ok) {
            toast.success("Ban command success.");
        } else {
            toast.error("Ban command failure.");
        }
    }

    return (
        <div className="flex size-full flex-col items-center justify-center rounded-xl bg-muted">
            <div className="flex w-full flex-wrap items-center justify-evenly">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold">Votes</span>
                    <span className="text-2xl font-bold text-muted-foreground">
                        {voteCount}
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold">Most Voted Entry</span>
                    <span className="text-2xl font-bold text-muted-foreground">
                        {mostVoted ? `${mostVoted.charid} (${mostVoted.count})` : "N/A"}
                    </span>
                </div>
            </div>
            <div className="mt-4 flex gap-2">
                <Button onClick={async () => {
                    fetchVoteCount();
                    fetchMostVoted();
                }}
                >
                    Refetch votes
                </Button>
                <Button onClick={wipeVotes}>
                    Wipe All Votes
                </Button>
                <Button onClick={ban}>
                    Ban
                </Button>
            </div>
        </div>
    );
}
