import type { Train } from "../stationadapter/Train.js";
import {Move} from "./Move.js"
import { randomInt } from "crypto";
import {type TrainData} from "./TrainData.js"
import { type Board } from "./Board.js";
import { type Coord } from "./Coord.js";
export class Intercity implements Train{
    id : string;
    name : string;
    health : number;
    body : Array<[Coord]>
    head : Coord
    length :  number;
    shout : string;
    
    constructor() {
        this.id = "1";
        this.name = "Intercity"
        this.health = 0;
        this.body = [];
        this.head = {"x" : 0, "y" : 0};
        this.length = 0;
        this.shout = "Choo Choo!";
    }
    move(board : Board, you : Train) : Move{
        const moves : Move[] = Object.values(Move) as Move[];
        this.updateTrain(you);
        const invalidMoves : Array<Move> = this.getInvalidMoves(board);
        const validMoves = moves.reduce((accumulator: Move[], currentValue: Move) => {
            if(!invalidMoves.includes(currentValue)){
                accumulator.push(currentValue)
            }
            return accumulator;
        }, []);
        const chosenMove : Move = validMoves[randomInt(validMoves.length)]!
    return chosenMove
    }
    getMetaData() : TrainData {
        const metaData : TrainData = {
            "apiversion" : "1",
            "author" : "NsSprinter",
            "color" : "#f3ff45ff",
            "version" : "0.01",
            "head" : "smart-caterpillar",
            "tail" : "replit-notmark"
        };
        return metaData;
    }
    getInvalidMoves(board : Board) : Array<Move>{
        const headCoord : Coord = this.head;
        const height : number = board.height;
        const width : number = board.width;
        const invalidMoves : Array<Move> = [];
        if(headCoord.x + 1 >= width){
            invalidMoves.push(Move.RIGHT)
        }
        if(headCoord.x - 1 < 0){
            invalidMoves.push(Move.LEFT)
        }
        if(headCoord.y + 1 >= height){
            invalidMoves.push(Move.UP)
        }
        if(headCoord.y - 1 < 0){
            invalidMoves.push(Move.DOWN)
        }
        return invalidMoves;
    }
    updateTrain(you : Train){
        this.id = you.id;
        this.name = you.name
        this.health = you.health;
        this.body = you.body;
        this.head = you.head;
        this.length = you.length;
        this.shout = you.shout;
    }
}