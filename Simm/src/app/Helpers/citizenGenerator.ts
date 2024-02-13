import { genders } from "../../assets/genders";
import { names } from "../../assets/names";
import { races } from "../../assets/races";
import { ICitizen } from "../Interfaces/ICitizen";
import { IRace } from "../Interfaces/IRace";
import { Gender } from "../Types/Gender";


export function generateCitizen(): ICitizen{
    var race = generateRace()
    var age = generateAge(race)

    var newCitizen: ICitizen = {
        race: race,
        name: generateName(),
        age: age,
        gender: generateGender()
    }
    return newCitizen
}
function generateRace(){
    const randomNumber = Math.floor(Math.random() * races.length)
    return races[randomNumber]
}
function generateName(){
    const randomNumber = Math.floor(Math.random() * names.length)
    return names[randomNumber]
}
function generateAge(race: IRace){

        return Math.floor(Math.random() * race.ageLimit)

}
function generateGender(){
    const randomNumber = Math.floor(Math.random() * genders.length)
    return genders[randomNumber] as Gender
}