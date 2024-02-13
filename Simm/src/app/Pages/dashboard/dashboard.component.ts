import { Component, OnInit } from '@angular/core';
import { ICitizen } from '../../Interfaces/ICitizen';
import { generateCitizen } from '../../Helpers/citizenGenerator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit {
  citizens: ICitizen[] = [];
  ngOnInit(): void {
    this.generateCitizens(5);
  }
  generateCitizens(num: number) {
    for (let i = 0; i < num; i++) {
      this.citizens.push(generateCitizen());
    }
    console.log(this.citizens);
  }
  checkForDeath(cit: ICitizen) {
    let agePercent = (cit.age / cit.race.ageLimit) * 100

    if(agePercent < 10){
      if (Math.floor(Math.random() * 100) == 1){
        this.removeCit(cit)
      }
    }
    else if(agePercent > 10 && agePercent> 25){
      if (Math.floor(Math.random() * 100) < 2){
        this.removeCit(cit)
      }
    }
    else if(agePercent > 26 && agePercent> 45){
      if (Math.floor(Math.random() * 100) < 3){
        this.removeCit(cit)
      }
    }
    else if(agePercent > 46 && agePercent> 75){
      if (Math.floor(Math.random() * 100) < 4){
        this.removeCit(cit)
      }
    }
    else if(agePercent > 76 && agePercent> 95){
      if (Math.floor(Math.random() * 100) < 8){
        this.removeCit(cit)
      }
    }
    else if(agePercent > 96){
      if (Math.floor(Math.random() * 100) < 90){
        this.removeCit(cit)
      }
    }
    
  }

  removeCit(cit: ICitizen){
    console.log(cit.name + ' Died at the age of ' + cit.age);
    this.citizens = this.citizens.filter((e) =>  e !== cit)
  }

  ageCit() {
    for (let cit of this.citizens) {
      cit.age = cit.age + 1;
      this.checkForDeath(cit);
    }
  }
}
