import { Move } from "./Move.js";
import { randomInt } from "crypto";
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