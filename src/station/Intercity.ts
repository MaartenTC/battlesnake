import type { Train } from "../stationadapter/Train.js";
import {Move} from "./Move.js"
import { randomInt } from "crypto";
import {type TrainData} from "./TrainData.js"
export class Intercity implements Train{
    id : string;
    name : string;
    health : number;
    body : Array<[string, number]>
    length :  number;
    shout : string;
    
    move() : Move{
        const moves : Move[] = Object.values(Move) as Move[];
        const chosenMove : Move = moves[randomInt(moves.length)]!
        return chosenMove
    }
    getMetaData() : TrainData {
        const metaData : TrainData = {
            "apiversion" : "1",
            "author" : "NsSprinter",
            "color" : "#eeff00",
            "version" : "0.01",
            "head" : "smart-caterpillar",
            "tail" : "replit-notmark"
        };
        return metaData;
    }
    constructor() {
        this.id = "1"
        this.name = "Intercity"
        this.health = 100;
        this.body = [];
        this.length = 0;
        this.shout = "Choo Choo!";
    }
}