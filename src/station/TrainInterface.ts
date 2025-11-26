export interface Train {
    id : string;
    name : string;
    health : number;
    body : Array<[string, number]>
    length :  number,
    shout : string,
    move() : void;
}