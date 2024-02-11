import { Component } from '@angular/core';
import { ICitizen } from '../../Interfaces/ICitizen';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {
  citizens: ICitizen[] = []
  generateCitizens(num: number){
      for(let i = 0; i < num; i++){
        let newCitizen: ICitizen = {
          age: 15,
          name: "Grayson",
          race: "Human",
          gender: "Male"
        }
      }
  }
}
