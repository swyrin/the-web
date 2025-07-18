// @generated

export type Json
  = | string
      | number
      | boolean
      | null
      | { [key: string]: Json | undefined }
      | Json[];

export type Terra = {
    // Allows to automatically instanciate createClient with right options
    // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
    __InternalSupabase: {
        PostgrestVersion: "12.2.3 (519615d)";
    };
    graphql_public: {
        Tables: {
            [_ in never]: never
        };
        Views: {
            [_ in never]: never
        };
        Functions: {
            graphql: {
                Args: {
                    operationName?: string;
                    query?: string;
                    variables?: Json;
                    extensions?: Json;
                };
                Returns: Json;
            };
        };
        Enums: {
            [_ in never]: never
        };
        CompositeTypes: {
            [_ in never]: never
        };
    };
    public: {
        Tables: {
            _prisma_migrations: {
                Row: {
                    applied_steps_count: number;
                    checksum: string;
                    finished_at: string | null;
                    id: string;
                    logs: string | null;
                    migration_name: string;
                    rolled_back_at: string | null;
                    started_at: string;
                };
                Insert: {
                    applied_steps_count?: number;
                    checksum: string;
                    finished_at?: string | null;
                    id: string;
                    logs?: string | null;
                    migration_name: string;
                    rolled_back_at?: string | null;
                    started_at?: string;
                };
                Update: {
                    applied_steps_count?: number;
                    checksum?: string;
                    finished_at?: string | null;
                    id?: string;
                    logs?: string | null;
                    migration_name?: string;
                    rolled_back_at?: string | null;
                    started_at?: string;
                };
                Relationships: [];
            };
            banned_operators: {
                Row: {
                    id: string;
                    since: string;
                };
                Insert: {
                    id: string;
                    since?: string;
                };
                Update: {
                    id?: string;
                    since?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "banned_operators_id_fkey";
                        columns: ["id"];
                        isOneToOne: true;
                        referencedRelation: "operators_v2";
                        referencedColumns: ["charid"];
                    },
                ];
            };
            member_vote: {
                Row: {
                    id: string | null;
                    since: string;
                    vote_number: number;
                };
                Insert: {
                    id?: string | null;
                    since?: string;
                    vote_number?: number;
                };
                Update: {
                    id?: string | null;
                    since?: string;
                    vote_number?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "member_vote_id_fkey";
                        columns: ["id"];
                        isOneToOne: false;
                        referencedRelation: "operators_v2";
                        referencedColumns: ["charid"];
                    },
                ];
            };
            old_member_vote: {
                Row: {
                    id: string | null;
                    since: string;
                    vote_number: number;
                };
                Insert: {
                    id?: string | null;
                    since?: string;
                    vote_number?: number;
                };
                Update: {
                    id?: string | null;
                    since?: string;
                    vote_number?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "old_member_vote_id_fkey";
                        columns: ["id"];
                        isOneToOne: false;
                        referencedRelation: "operators_v2";
                        referencedColumns: ["charid"];
                    },
                ];
            };
            operator: {
                Row: {
                    alias: string[] | null;
                    archetype: string;
                    charId: string;
                    costE0: number;
                    costE2: number;
                    gender: string;
                    group: string | null;
                    id: number;
                    infected: string;
                    name: string;
                    nation: string;
                    position: string;
                    profession: string;
                    race: string;
                    rarity: number;
                };
                Insert: {
                    alias?: string[] | null;
                    archetype: string;
                    charId?: string;
                    costE0: number;
                    costE2: number;
                    gender: string;
                    group?: string | null;
                    id?: number;
                    infected: string;
                    name: string;
                    nation: string;
                    position: string;
                    profession: string;
                    race: string;
                    rarity: number;
                };
                Update: {
                    alias?: string[] | null;
                    archetype?: string;
                    charId?: string;
                    costE0?: number;
                    costE2?: number;
                    gender?: string;
                    group?: string | null;
                    id?: number;
                    infected?: string;
                    name?: string;
                    nation?: string;
                    position?: string;
                    profession?: string;
                    race?: string;
                    rarity?: number;
                };
                Relationships: [];
            };
            operators_v2: {
                Row: {
                    archetype: string;
                    charid: string;
                    coste0: number;
                    coste2: number;
                    faction: string;
                    gender: string;
                    infected: string;
                    name: string;
                    position: string;
                    profession: string;
                    race: string;
                    rarity: number;
                };
                Insert: {
                    archetype: string;
                    charid: string;
                    coste0: number;
                    coste2: number;
                    faction: string;
                    gender: string;
                    infected: string;
                    name: string;
                    position: string;
                    profession: string;
                    race: string;
                    rarity: number;
                };
                Update: {
                    archetype?: string;
                    charid?: string;
                    coste0?: number;
                    coste2?: number;
                    faction?: string;
                    gender?: string;
                    infected?: string;
                    name?: string;
                    position?: string;
                    profession?: string;
                    race?: string;
                    rarity?: number;
                };
                Relationships: [];
            };
            timer_state: {
                Row: {
                    id: string;
                    paused_at: string | null;
                    remaining_time: number;
                    started_at: string | null;
                    state: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    paused_at?: string | null;
                    remaining_time?: number;
                    started_at?: string | null;
                    state: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    paused_at?: string | null;
                    remaining_time?: number;
                    started_at?: string | null;
                    state?: string;
                    updated_at?: string;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never
        };
        Functions: {
            [_ in never]: never
        };
        Enums: {
            BlobTags:
                | "PROJECTS"
                | "HOBBIES"
                | "MUSIC"
                | "GAMES"
                | "MALARKEY"
                | "OTHER";
        };
        CompositeTypes: {
            [_ in never]: never
        };
    };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
    DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
            & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
        & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R;
        }
            ? R
            : never
    : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"]
        & DefaultSchema["Views"])
        ? (DefaultSchema["Tables"]
            & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
                Row: infer R;
            }
                ? R
                : never
        : never;

export type TablesInsert<
    DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I;
    }
        ? I
        : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
        ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
            Insert: infer I;
        }
            ? I
            : never
        : never;

export type TablesUpdate<
    DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U;
    }
        ? U
        : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
        ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
            Update: infer U;
        }
            ? U
            : never
        : never;

export type Enums<
    DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
    EnumName extends DefaultSchemaEnumNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
        ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
        : never;

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
        : never = never,
> = PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
        ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
        : never;

export const Constants = {
    graphql_public: {
        Enums: {},
    },
    public: {
        Enums: {
            BlobTags: ["PROJECTS", "HOBBIES", "MUSIC", "GAMES", "MALARKEY", "OTHER"],
        },
    },
} as const;
