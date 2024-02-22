import { genders } from "../../assets/genders";
import { jobs } from "../../assets/jobs";
import { names } from "../../assets/names";
import { races } from "../../assets/races";
import { ICitizen } from "../Interfaces/ICitizen";
import { IRace } from "../Interfaces/IRace";
import { MessageService } from "../Services/message.service";
import { Gender } from "../Types/Gender";
import { Sexuality } from "../Types/Sexuality";


export function generateCitizen(cits: ICitizen[]): ICitizen {
    var race = generateRace()
    var age = generateAge(race)
    var newCitizen: ICitizen = {
        race: race,
        name: generateName(),
        age: age,
        gender: generateGender(),
        Strength: Math.floor(Math.random() * 11),
        Constitution: Math.floor(Math.random() * 11),
        Dexterity: Math.floor(Math.random() * 11),
        Charisma: Math.floor(Math.random() * 11),
        Intelligence: Math.floor(Math.random() * 11),
        Wisdom: Math.floor(Math.random() * 11),
        Messages: [],
        relationshipStatus: false,
        openToRelationship: false
    }
    if (newCitizen.age > newCitizen.race.pubertyAge.max) {
        newCitizen.job = generateJob(cits)
    }
    return newCitizen
}
function generateRace() {
    const randomNumber = Math.floor(Math.random() * races.length)
    return races[randomNumber]
}
function generateName() {
    const randomNumber = Math.floor(Math.random() * names.length)
    return names[randomNumber]
}
function generateAge(race: IRace) {
    return Math.floor(Math.random() * race.ageLimit)
}
function generateGender() {
    const randomNumber = Math.floor(Math.random() * genders.length)
    return genders[randomNumber] as Gender
}
export function generateSexuality() {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 1) {
        return "Gay" as Sexuality
    } else if (randomNumber == 2) {
        return "Bisexual" as Sexuality
    } else {
        return "Straight" as Sexuality
    }
}
export function generateJob(cits?: ICitizen[]) {
    const rand = Math.floor(Math.random() * jobs.length)
    if (cits?.length == 0) {
        return jobs[3]
    }
    else if (cits && jobs[rand].populationRequirment < cits?.length) {
        return jobs[rand]
    } else {
        return generateJob(cits)
    }
}

export function checkIfOpenToRelationship(cit: ICitizen) {
    if (cit.relationshipStatus == false) {
        cit.openToRelationship = true
    }
}
