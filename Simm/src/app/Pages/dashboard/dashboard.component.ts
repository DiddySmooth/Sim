import { Component, OnInit } from '@angular/core';
import { ICitizen } from '../../Interfaces/ICitizen';
import { checkIfOpenToRelationship, generateCitizen, generateJob, generateSexuality } from '../../Helpers/citizenGenerator';
import { MessageService } from '../../Services/message.service';
import { mortalityRates } from '../../../assets/mortalityRates';
import { CitizenListService } from '../../Services/citizen-list.service';
import { Subscription } from 'rxjs';
import { WorldManagerService } from '../../Services/world-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit {
  citizenSubscription!: Subscription;
  citizens: ICitizen[] = [];
  hasMayor: boolean = false

  currentYear: number = 0;

  constructor(private worldManagerService: WorldManagerService, private citizenListService: CitizenListService){
  }
  yearUp(){
    this.worldManagerService.advanceYear()
  }
  ngOnInit(): void {
    this.worldManagerService.year$.subscribe((year: number) =>{
      this.currentYear = year
      console.log(this.currentYear)
    })
    this.citizenListService.citizens.subscribe((citizens: ICitizen[]) => {
      this.citizens = citizens;
    });
    this.citizenListService.generateCitizens(5, false)
  }

 

  

  

  
}
