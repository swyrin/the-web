import type { Terra } from "@/lib/supabase/terra";
import { createClient } from "@supabase/supabase-js";

export const elevatedSupabase = createClient<Terra>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    },
);
