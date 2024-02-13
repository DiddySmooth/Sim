import { Gender } from "../Types/Gender";
import { IRace } from "./IRace";

export interface ICitizen {
    name: string;
    age: number;
    gender: Gender
    race: IRace
}