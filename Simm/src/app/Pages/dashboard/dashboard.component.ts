import { Component, OnInit } from '@angular/core';
import { ICitizen } from '../../Interfaces/ICitizen';
import { generateCitizen, generateJob, generateSexuality } from '../../Helpers/citizenGenerator';
import { MessageService } from '../../Services/message.service';
import { mortalityRates } from '../../../assets/mortalityRates';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit {
  citizens: ICitizen[] = [];
  hasMayor: boolean = false

  constructor(private messageService: MessageService){

  }

  ngOnInit(): void {
    this.generateCitizens(5, false);
  }

  generateCitizens(num: number, displayMessage: boolean) {
    for (let i = 0; i < num; i++) {
      let cit = generateCitizen()
      this.citizens.push(cit);
      if(displayMessage){
        this.messageService.updatedMessages(cit.name + " has join the town")
      }
    }
  }

  checkForDeath(cit: ICitizen) {
    let agePercent = (cit.age / cit.race.ageLimit) * 100

    if (mortalityRates.hasOwnProperty(agePercent)) {
      if (Math.random() < mortalityRates[agePercent]) {
          if(cit.job?.name === "Mayor"){this.hasMayor = false}
          this.removeCit(cit)
          return true;  // Player died
      } else {
          return false;  // Player survived
      }
  } else {
      return false;  // Age not in mortality rates, assume player survives
  }
  }

  removeCit(cit: ICitizen){
    let message = cit.name + ' Died at the age of ' + cit.age;
    this.messageService.updatedMessages(message)
    this.citizens = this.citizens.filter((e) =>  e !== cit)
  }

  ageCits() {
    for (let cit of this.citizens) {
      cit.age = cit.age + 1;
      this.checkForDeath(cit);
      this.checkForSexuality(cit)
      this.checkForJob(cit)
    }
    if(!this.hasMayor){
      this.appointMayor()
    }
    this.doesCitMoveIn()
  }

  doesCitMoveIn(){
    let rand = Math.floor(Math.random() * 5)
    if(rand == 4){
      this.generateCitizens(1, true)
    }
  }

  checkForJob(cit: ICitizen){
    if(cit.age == cit.race.pubertyAge.min){
      cit.job = generateJob()
      this.messageService.updatedMessages(cit.name+ "Has gotten a job as a " + cit.job.name)
    }
  }

  checkForSexuality(cit: ICitizen){
    if(cit.age > cit.race.pubertyAge.min && cit.age < cit.race.pubertyAge.max && !cit.sexuality){
      cit.sexuality = generateSexuality()
      this.messageService.updatedMessages(cit.name + " Discovered they are " + cit.sexuality)
    }
  }

  appointMayor(){
    var rand = Math.floor(Math.random() * this.citizens.length)
    this.citizens[rand].job2 = {
      name: "Mayor"
    }
    this.messageService.updatedMessages(this.citizens[rand].name + " has been appointed Mayor")
    this.hasMayor = true
  }
}
