import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type testCommand = "auth" | "ping";

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ cmd: string }> },
) {
    const body = await request.json() || null;
    if (!body.token || body.token !== process.env.SECRET_CODE) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 },
        );
    }
    try {
        const { cmd } = await params;
        if (!["auth", "ping"].includes(cmd)) {
            return NextResponse.json(
                { error: "Invalid command. Use: auth or ping" },
                { status: 400 },
            );
        }
        const command = cmd as testCommand;
        switch (command) {
            case "auth":
                return NextResponse.json(
                    { authStatus: "ok" },
                    { status: 200 },
                );

            case "ping":
                return NextResponse.json(
                    { pingStatus: "ok" },
                    { status: 200 },
                );
        }
    } catch (error) {
        return NextResponse.json({ error });
    }
}
