export type CrewMember = {
    name: string;
    quote: string;
    roles: string[];
};

export type OperatorClass = "vanguard" | "guard" | "specialist" | "sniper" | "caster" | "medic" | "supporter" | "defender";
export type OperatorRarity = 1 | 2 | 3 | 4 | 5 | 6;

export type Operator = {
    id: string;
    name: string;
    rarity: OperatorRarity;
    class: OperatorClass;
};

export type ApiElevatedBody = {
    token: string;
};

export type ContestantInfo = {
    number: number;
    name: string;
    score: number;
    rank: number;
};
