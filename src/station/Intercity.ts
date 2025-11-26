import type { Train } from "./TrainInterface.js";
import {Move} from "./Move.js"
import { randomInt } from "crypto";

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
    constructor() {
        this.id = "1"
        this.name = "Intercity"
        this.health = 100;
        this.body = [];
        this.length = 0;
        this.shout = "Choo Choo!";
    }
}