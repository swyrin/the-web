import { prismaClient } from "@/lib/prisma_client";

/**
 * Get total vote count.
 */
export async function GET() {
    const entries = await prismaClient.memberVote.findMany({});

    return Response.json({
        count: entries.length,
    });
}
