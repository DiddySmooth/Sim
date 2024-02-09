import { Component, OnInit } from '@angular/core';
import { names } from '../../../assets/names';
import { races } from '../../../assets/races';
@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.sass'
})
export class PlayerInfoComponent implements OnInit{
  name = ""
  race = ""
  ngOnInit(): void {
    this.generateName()
    this.generateRace()
  }
  generateName(){
    const randomNumber = Math.floor(Math.random() * names.length)
    this.name = names[randomNumber].name
  }
  generateRace(){
    const randomNumber = Math.floor(Math.random() * races.length)
    this.race = races[randomNumber].name
  }
}
