import type { Train } from "./TrainInterface.js";
import { Move } from "./Move.js";
export declare class Intercity implements Train {
    id: string;
    name: string;
    health: number;
    body: Array<[string, number]>;
    length: number;
    shout: string;
    move(): Move;
    constructor();
}
//# sourceMappingURL=Intercity.d.ts.map