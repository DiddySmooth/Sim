import { Component } from '@angular/core';
import { PlayerService } from '../../Services/player.service';

@Component({
  selector: 'app-age-up-area',
  templateUrl: './age-up-area.component.html',
  styleUrl: './age-up-area.component.sass'
})
export class AgeUpAreaComponent {
  season = "spring"
  year = 0

  constructor(private playerService: PlayerService){
    
  }
  nextSeason(){
    if(this.season == "spring"){
      this.season  = "summer"
    }
    else if(this.season == "summer"){
      this.season = "fall"
    }
    else if(this.season == "fall"){
      this.season = "winter"
    }
    else if(this.season == "winter"){
      this.season = "spring"
      this.year ++
    }
    console.log(this.season + this.year)
  }
}
