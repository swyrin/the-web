import { NextResponse } from "next/server";
import { createSupabase } from "@/lib/supabase/client";

/**
 * Fetch all available operators.
 *
 * @returns The operator list.
 */
export async function GET() {
    const supabase = createSupabase();
    const { data: operators, error } = await supabase
        .from("operators_v2")
        .select("name,charid,rarity,profession");

    const cacheHeaders = {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400"
    };

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500, headers: cacheHeaders });
    }

    return NextResponse.json(operators ?? [], { headers: cacheHeaders });
}
