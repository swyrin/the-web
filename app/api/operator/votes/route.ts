import { NextResponse } from "next/server";
import { getAggregatedVotes } from "@/app/api/operator/utils/operator-utils";
import { elevatedSupabase } from "@/lib/supabase/elevated-client";

/**
 * Get detailed votes count for all entries, sorted descending by vote count.
 *
 * @returns The vote listing.
 */
export async function GET() {
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

/**
 * Wipes all votes, literally.
 *
 * There is no check.
 *
 * You have been warned.
 */
export async function DELETE() {
    try {
        await elevatedSupabase.from("member_vote").delete().neq("vote_number", 0);

        return NextResponse.json({ message: "All votes wiped." }, { status: 200 });
    } catch {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
