import { genders } from "../../assets/genders";
import { names } from "../../assets/names";
import { races } from "../../assets/races";
import { ICitizen } from "../Interfaces/ICitizen";
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
    return races[randomNumber].name
}
function generateName(){
    const randomNumber = Math.floor(Math.random() * names.length)
    return names[randomNumber]
}
function generateAge(race: string){
    let raceObj = races.find(obj => obj.name === race);
    if(raceObj)
        return Math.floor(Math.random() * raceObj.ageLimit)
    else return 0
}
function generateGender(){
    const randomNumber = Math.floor(Math.random() * genders.length)
    return genders[randomNumber] as Gender
}