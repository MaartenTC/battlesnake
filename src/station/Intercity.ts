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
            "color" : "#4263f5",
            "version" : "0.01",
            "head" : "smart-caterpillar",
            "tail" : "replit-notmark"
        };
        return metaData;
    }
    getInvalidMoves(board : Board) : Array<Move>{
        const occupiedSpace : Map<string, boolean> = this.getOccupiedSpace(board);
        const borderMoves : Array<Move> = this.avoidBorders(board);
        const neckMoves : Array<Move> = this.avoidBodies(occupiedSpace);
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
    avoidBodies(occupiedSpace : Map<string, boolean>) : Array<Move>{
        const invalidMoves: Array<Move> = [];
        const headCoord: Coord = this.head;

        const rightCoord: Coord = { x: headCoord.x + 1, y: headCoord.y };
        const leftCoord: Coord = { x: headCoord.x - 1, y: headCoord.y };
        const upCoord: Coord = { x: headCoord.x, y: headCoord.y + 1 };
        const downCoord: Coord = { x: headCoord.x, y: headCoord.y - 1 };

        if(occupiedSpace.get(this.getCoordKey(rightCoord))){
            invalidMoves.push(Move.RIGHT);
        }
        if(occupiedSpace.get(this.getCoordKey(leftCoord))){
            invalidMoves.push(Move.LEFT);
        }
        if(occupiedSpace.get(this.getCoordKey(upCoord))){
            invalidMoves.push(Move.UP);
        }
        if(occupiedSpace.get(this.getCoordKey(downCoord))){
            invalidMoves.push(Move.DOWN);
        }

        return invalidMoves;
    }

    getOccupiedSpace(board : Board) : Map<string, boolean>{
        let occupiedSpace : Map<string, boolean> = new Map();
        const others : Array<Train> = board.snakes;
        this.body.forEach((coord : Coord)=>{occupiedSpace.set(this.getCoordKey(coord), true)})
        others.forEach((train : Train)=>{
            train.body.forEach((coord : Coord)=>{
                occupiedSpace.set(this.getCoordKey(coord), true);
            })
        })
        return occupiedSpace;
    }
    getCoordKey(coord : Coord) : string{
        return `${coord.x},${coord.y}`
    }

}