import { IRace } from "../app/Interfaces/IRace";

export let races: IRace[] = [
    {
        name: "Human",
        ageLimit: 110,
        pubertyAge: {
            min: 10,
            max: 12
        }
    },
    {
        name: "Elf",
        ageLimit: 1000,
        pubertyAge: {
            min: 100,
            max: 120
        }
    },
    {
        name: "Drawf",
        ageLimit: 400,
        pubertyAge: {
            min: 30,
            max: 35
        }
    },
    {
        name: "Goblin",
        ageLimit: 60,
        pubertyAge: {
            min: 10,
            max: 12
        }
    }
]