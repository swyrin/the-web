export type CrewMember = {
    name: string;
    quote: string;
    role: string[];
};

type OperatorClass = "vanguard" | "guard" | "specialist" | "sniper" | "caster" | "medic" | "supporter" | "defender";

export type Operator = {
    // format the nao thi tuy ae, toi test thoi
    id: string;
    name: string;
    rarity: number;
    class: number;
};
