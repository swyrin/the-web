/**
 * Send operator choices.
 * The choice will be truncated to 6 items.
 */
export async function POST() {
    return new Response("", { status: 200 });
}

/**
 * Get operator with HIGHEST count in the time interval.
 */
export async function GET() {
    return new Response("", { status: 200 });
}

/**
 * WIPE ALL RECORDED operator choices.
 * Use this to clear the count when 1-minute timer runs out.
 */
export async function DELETE() {
    return new Response("", { status: 200 });
}
