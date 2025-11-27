import { Move } from "../station/Move.js"
import { type TrainData } from "../station/TrainData.js";
export interface Train {
    id : string;
    name : string;
    health : number;
    body : Array<[string, number]>
    length :  number,
    shout : string,
    move() : Move,
    getMetaData() : TrainData;
}