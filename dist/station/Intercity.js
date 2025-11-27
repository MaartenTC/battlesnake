import { Move } from "./Move.js";
import { randomInt } from "crypto";
import {} from "./TrainData.js";
export class Intercity {
    id;
    name;
    health;
    body;
    length;
    shout;
    move() {
        const moves = Object.values(Move);
        const chosenMove = moves[randomInt(moves.length)];
        return chosenMove;
    }
    getMetaData() {
        const metaData = {
            "apiversion": "1",
            "author": "NsSprinter",
            "color": "#eeff00",
            "version": "0.01",
            "head": "smart-caterpillar",
            "tail": "replit-notmark"
        };
        return metaData;
    }
    constructor() {
        this.id = "1";
        this.name = "Intercity";
        this.health = 100;
        this.body = [];
        this.length = 0;
        this.shout = "Choo Choo!";
    }
}
//# sourceMappingURL=Intercity.js.map