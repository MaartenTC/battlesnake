import { Intercity } from "../station/Intercity.js";
import { type Train } from "./Train.js";
export class TrainPicker{
    getInterCity() : Intercity{
        return new Intercity();
    }
}