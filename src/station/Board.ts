import {type Coord} from "./Coord.js"
import { type Train } from "../stationadapter/Train.js";
export interface Board{
    "height" : number;
    "width" : number;
    "food" : Array<Coord>;
    "hazards" : Array<Coord>;
    "snakes" : Array<Train>
}