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
    job2?: IJob
    Dexterity: number
    Strength: number
    Constitution: number
    Intelligence: number
    Charisma: number
    Wisdom: number
    Messages?: string[]
    relationshipStatus: boolean
    openToRelationship: boolean
    significantOther?: ICitizen

}