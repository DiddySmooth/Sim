import { Component, OnInit } from '@angular/core';
import { names } from '../../../assets/names';
@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.sass'
})
export class PlayerInfoComponent implements OnInit{
  name = ""
  ngOnInit(): void {
    this.generateName()
  }
  generateName(){
    const randomNumber = Math.floor(Math.random() * names.length);
    console.log(randomNumber)
    this.name = names[randomNumber].name
  }
}
