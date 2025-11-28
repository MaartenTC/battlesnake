import { Move } from "../station/Move.js"
import { type TrainData } from "../station/TrainData.js";
import { type Board } from "../station/Board.js";
import { type Coord } from "../station/Coord.js";
export interface Train {
    id : string;
    name : string;
    health : number;
    body : Array<Coord>;
    head : Coord;
    length :  number;
    shout : string;
    move(board : Board, you : Train) : Move;
    getMetaData() : TrainData;
}