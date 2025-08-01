import type { Terra } from "@/lib/supabase/terra";
import { createBrowserClient } from "@supabase/ssr";

/**
 * Get the Supabase instance.
 *
 * @param isElevated Whether is this client elevated.
 * @returns The supabase.
 */
export function createSupabase(isElevated: boolean = false) {
    return createBrowserClient<Terra>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        isElevated ? process.env.SUPABASE_SERVICE_ROLE_KEY! : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
};
