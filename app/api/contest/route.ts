import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Get all contestant scores.
 *
 * @returns Contestant scores, sorted descending.
 */
export async function GET() {
    return NextResponse.json(
        { message: "" },
        { status: 200 },
    );
}

/**
 * Add a contestant score.
 *
 * @param _request The request with the body.
 * @returns Nothing, really.
 */
export async function POST(_request: NextRequest) {
    return NextResponse.json(
        { message: "" },
        { status: 200 },
    );
}
