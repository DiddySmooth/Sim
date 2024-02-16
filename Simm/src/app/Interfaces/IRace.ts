import { RaceName } from "../Types/RaceName";
import { IMinMax } from "./IMinMax";

export interface IRace {
    name: string
    ageLimit: number
    pubertyAge: IMinMax
}