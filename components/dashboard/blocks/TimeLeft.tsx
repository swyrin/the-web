"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTimer } from "@/lib/hooks/use-timer";

// TODO: Fill this shit.
const token = "";

export default function TimeLeft() {
    const [stopTime, setStopTime] = useState(60);
    const { timerData, isTimerLoaded, formatTime, getDisplayTime } = useTimer();

    const isStopped = timerData.state === "stopped";
    const isRunning = timerData.state === "running";
    const isPaused = timerData.state === "paused";

    async function callTimerAPI(cmd: "start" | "stop" | "reset" | "continue", time: number = 60) {
        const body: any = {
            token,
            time
        };

        const res = await fetch(`/api/timer/${cmd}`, {
            method: "POST",
            body: JSON.stringify(body)
        });

        if (res.ok) {
            toast.success("Send timer command success.");
        } else {
            toast.error("Send timer command failure.");
        }
    }

    return (
        <div className="flex size-full flex-col items-center justify-center rounded-xl bg-muted">
            <span className="text-lg font-semibold">Time Left</span>
            <span className="text-3xl font-bold">
                <span className={clsx(
                    "font-extrabold",
                    isTimerLoaded && {
                        "text-green-400": timerData.state === "running",
                        "text-yellow-400": timerData.state === "paused",
                        "text-muted-foreground": timerData.state === "stopped"
                    }
                )}
                >
                    {!isTimerLoaded ? "--:--" : formatTime(getDisplayTime())}
                </span>
            </span>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Button
                    disabled={!isTimerLoaded || !isStopped}
                    onClick={() => callTimerAPI("start")}
                >
                    Start
                </Button>
                <Button
                    disabled={!isTimerLoaded || !isRunning}
                    onClick={() => callTimerAPI("stop")}
                >
                    Pause
                </Button>
                <Button
                    disabled={!isTimerLoaded || !isPaused}
                    onClick={() => callTimerAPI("continue")}
                >
                    Resume
                </Button>
                <div className="flex items-center gap-2">
                    <Button
                        disabled={!isTimerLoaded}
                        variant="destructive"
                        onClick={() => callTimerAPI("reset", stopTime)}
                    >
                        Reset
                    </Button>
                    <div className={clsx({
                        "text-muted-foreground": !isTimerLoaded,
                        "text-primary": !(!isTimerLoaded) // not this time, DeMorgan.
                    })}
                    >
                        to
                    </div>
                    <Input
                        className="w-16"
                        disabled={!isTimerLoaded}
                        max={727}
                        min={1}
                        type="number"
                        value={stopTime}
                        onChange={e => setStopTime(Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
}
