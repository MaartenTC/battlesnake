import type { Train } from "../stationadapter/Train.js";
import { Move } from "./Move.js";
import { type TrainData } from "./TrainData.js";
export declare class Intercity implements Train {
    id: string;
    name: string;
    health: number;
    body: Array<[string, number]>;
    length: number;
    shout: string;
    move(): Move;
    getMetaData(): TrainData;
    constructor();
}
//# sourceMappingURL=Intercity.d.ts.map