import { Component, OnInit } from '@angular/core';
import { names } from '../../../assets/names';
import { races } from '../../../assets/races';
import { genders } from '../../../assets/genders';
import { Subscription } from 'rxjs';
import { PlayerService } from '../../player.service';
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

  constructor(private dataService: PlayerService) {
    this.subscription = this.dataService.age$.subscribe(value => {
      this.age = value;
    });
  }
  ngOnInit(): void {
    this.generateName()
    this.generateRace()
    this.generateAge()
    this.generateGender()
  }
  
  private subscription: Subscription;

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
    this.dataService.updateAge(this.age)
  }

  generateGender(){
    const randomNumber = Math.floor(Math.random() * genders.length)
    this.gender = genders[randomNumber]
  }
}
