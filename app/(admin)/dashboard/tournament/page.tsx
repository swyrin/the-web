import { Suspense } from "react";
import TimeLeft from "@/components/dashboard/blocks/TimeLeft";
import VoteCount from "@/components/dashboard/blocks/VoteCount";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
    return (
        <div className="mx-auto flex size-full max-w-6xl flex-col gap-6">
            <div className="flex size-full flex-col gap-6">
                <div className="flex-1">
                    <Suspense fallback={(
                        <Skeleton className="size-full rounded-xl" />
                    )}
                    >
                        <TimeLeft />
                    </Suspense>
                </div>
                <div className="flex-1">
                    <Suspense fallback={(
                        <Skeleton className="h-40 w-full rounded-xl" />
                    )}
                    >
                        <VoteCount />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
