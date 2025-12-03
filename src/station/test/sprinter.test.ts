import { expect, test } from 'vitest'
import {type Coord } from '../Coord.js';
import { Sprinter } from '../Sprinter.js';
import { Move } from '../Move.js';

test("test getting the direction of fuel", ()=>{
    const sprinter : Sprinter = new Sprinter();
    sprinter.head = {"x":1, "y":2};
    const foodCoords : Array<Coord>  = [{"x":1, "y":1}];
    expect(sprinter.getFuelDirection(foodCoords)).toBe(Move.DOWN)
})