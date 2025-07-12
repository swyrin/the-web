export type CrewMember = {
    name: string;
    quote: string;
    role: string[];
};

export type OperatorClass = "ALL" | "vanguard" | "guard" | "specialist" | "sniper" | "caster" | "medic" | "supporter" | "defender";

export type Operator = {
    id: string;
    name: string;
    rarity: number;
    class: OperatorClass;
    subclass: string;
};
