import { Skill } from "../Types/Skills"

export interface IJob{
    name: string
    primarySkill: Skill
    secondarySkill?: Skill
    populationRequirment: number
}