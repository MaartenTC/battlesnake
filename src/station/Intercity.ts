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
    body : Array<Coord>
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
        const validMoves = moves.filter((move : Move) => !invalidMoves.includes(move));
        if(validMoves.length < 1){
            return Move.UP;
        }
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
        const borderMoves : Array<Move> = this.avoidBorders(board);
        const neckMoves : Array<Move> = this.avoidSelf();
        const invalidMoves : Array<Move>= borderMoves.concat(neckMoves);
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
    avoidBorders(board : Board) : Array<Move>{
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
    avoidSelf() : Array<Move>{
        const invalidMoves: Array<Move> = [];
        const headCoord: Coord = this.head;

        const rightCoord: Coord = { x: headCoord.x + 1, y: headCoord.y };
        const leftCoord: Coord = { x: headCoord.x - 1, y: headCoord.y };
        const upCoord: Coord = { x: headCoord.x, y: headCoord.y + 1 };
        const downCoord: Coord = { x: headCoord.x, y: headCoord.y - 1 };

        if (this.body.some(c => c.x === rightCoord.x && c.y === rightCoord.y)) {
            invalidMoves.push(Move.RIGHT);
        }
        if (this.body.some(c => c.x === leftCoord.x && c.y === leftCoord.y)) {
            invalidMoves.push(Move.LEFT);
        }
        if (this.body.some(c => c.x === upCoord.x && c.y === upCoord.y)) {
            invalidMoves.push(Move.UP);
        }
        if (this.body.some(c => c.x === downCoord.x && c.y === downCoord.y)) {
            invalidMoves.push(Move.DOWN);
        }
        return invalidMoves;
    }

}