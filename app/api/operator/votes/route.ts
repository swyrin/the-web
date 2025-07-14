import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getAggregatedVotes } from "@/app/api/lib/operator-utils";

export async function GET(_request: NextRequest) {
    try {
        const aggregatedVotes = await getAggregatedVotes();

        return NextResponse.json(aggregatedVotes, { status: 200 });
    } catch (error) {
        console.error("Operator votes API error:", error);

        if (error instanceof Error && error.message === "No votes found") {
            return NextResponse.json(
                { error: "No votes found" },
                { status: 412 },
            );
        }

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
