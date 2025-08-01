import type { NextRequest } from "next/server";
import type { ApiElevatedBody } from "@/lib/vns";
import { NextResponse } from "next/server";
import { getHighestVotedOperator } from "@/app/api/operator/utils/operator-utils";
import { createSupabase } from "@/lib/supabase/client";

/**
 * Get all current banned operators ID, at request time.
 *
 * SORTED BY ascending time of addition.
 */
export async function GET() {
    try {
        const elevatedSupabase = createSupabase(true);

        const { data, error } = await elevatedSupabase
            .from("banned_operators")
            .select("id")
            .order("since");

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(data ?? []);
    } catch {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

/**
 * Delete operator with highest votes.
 *
 * @param request The request body.
 * @returns The deleted operator.
 */
export async function DELETE(request: NextRequest) {
    try {
        const body = await request.json() as ApiElevatedBody;

        if (!body.token || body.token !== process.env.SECRET_CODE) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Get the operator with highest vote count
        const highestVoted = await getHighestVotedOperator();
        const elevatedSupabase = createSupabase(true);

        // Add to banned_operators table
        const { data: bannedOperator, error: banError } = await elevatedSupabase
            .from("banned_operators")
            .insert({ id: highestVoted.charid })
            .select()
            .single();

        if (banError) {
            throw banError;
        }

        const { data: votes } = await elevatedSupabase
            .from("member_vote")
            .select("id");

        if (votes) {
            await elevatedSupabase.from("old_member_vote").insert(votes);
        }

        await elevatedSupabase
            .from("member_vote")
            .delete()
            .neq("vote_number", 0);

        return NextResponse.json(bannedOperator, { status: 201 });
    } catch (error) {
        console.error("Operator ban API error:", error);

        if (error instanceof Error && error.message === "No votes found") {
            return NextResponse.json(
                { error: "No votes found to ban" },
                { status: 412 }
            );
        }

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

/**
 * Ban operators by IDs.
 *
 * @param request A list of operator IDs (char_[number]_[callsign]).
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const ids: string[] = body.ids;

        if (!Array.isArray(ids) || ids.length === 0) {
            return NextResponse.json({ error: "No operator IDs provided" }, { status: 400 });
        }

        const elevatedSupabase = createSupabase(true);

        // Insert all provided IDs into banned_operators
        const { error } = await elevatedSupabase
            .from("member_vote")
            .insert(ids.map(id => ({ id })));

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, banned: ids }, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
