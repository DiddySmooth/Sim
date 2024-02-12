import { Component, OnInit } from '@angular/core';
import { ICitizen } from '../../Interfaces/ICitizen';
import { generateCitizen } from '../../Helpers/citizenGenerator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent implements OnInit{
  citizens: ICitizen[] = []
  ngOnInit(): void {
    this.generateCitizens(5)
  }
  generateCitizens(num: number){
      for(let i = 0; i < num; i++){
        this.citizens.push(generateCitizen())
      }
      console.log(this.citizens)
  }
}
