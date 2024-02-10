import { Component, OnInit } from '@angular/core';
import { names } from '../../../assets/names';
import { races } from '../../../assets/races';
import { genders } from '../../../assets/genders';
@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.sass'
})
export class PlayerInfoComponent implements OnInit{
  name = ""
  race = ""
  age = 0
  gender = ""

  ngOnInit(): void {
    this.generateName()
    this.generateRace()
    this.generateAge()
    this.generateGender()
  }

  generateName(){
    const randomNumber = Math.floor(Math.random() * names.length)
    this.name = names[randomNumber].name
  }

  generateRace(){
    const randomNumber = Math.floor(Math.random() * races.length)
    this.race = races[randomNumber].name
  }

  generateAge(){
    let race = races.find(obj => obj.name === this.race);
    if(race)
      this.age = Math.floor(Math.random() * race.ageLimit)
  }

  generateGender(){
    const randomNumber = Math.floor(Math.random() * genders.length)
    this.gender = genders[randomNumber]
  }
}
