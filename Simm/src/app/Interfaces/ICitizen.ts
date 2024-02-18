import { Gender } from "../Types/Gender";
import { Sexuality } from "../Types/Sexuality";
import { IJob } from "./IJob";
import { IRace } from "./IRace";

export interface ICitizen {
    name: string;
    age: number;
    gender: Gender
    race: IRace
    sexuality?: Sexuality
    job?: IJob
}