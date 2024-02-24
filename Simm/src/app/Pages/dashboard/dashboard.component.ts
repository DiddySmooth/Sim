import { Component, OnInit } from '@angular/core';
import { ICitizen } from '../../Interfaces/ICitizen';
import { checkIfOpenToRelationship, generateCitizen, generateJob, generateSexuality } from '../../Helpers/citizenGenerator';
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
      let cit = generateCitizen(this.citizens)
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
          if(cit.relationshipStatus === true && cit.significantOther){
            cit.significantOther.relationshipStatus = false
            cit.significantOther.openToRelationship = true
            cit.significantOther.significantOther = undefined
          }
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
      this.checkForJob(cit, this.citizens)
      checkIfOpenToRelationship(cit)
      this.checkForKids()
    }
    if(!this.hasMayor){
      this.appointMayor()
    }
    this.checkForRelationships()
    this.doesCitMoveIn()
  }

  doesCitMoveIn(){
    let rand = Math.floor(Math.random() * 5)
    if(rand == 4){
      this.generateCitizens(1, true)
    }
  }

  checkForJob(cit: ICitizen, cits: ICitizen[]){
    if(cit.age == cit.race.pubertyAge.min){
      cit.job = generateJob(cits)
      this.messageService.updatedMessages(cit.name+ "Has gotten a job as a " + cit.job.name)
    }
  }

  checkForSexuality(cit: ICitizen){
    if(cit.age > cit.race.pubertyAge.min && cit.age < cit.race.pubertyAge.max && !cit.sexuality){
      cit.sexuality = generateSexuality()
      cit.Messages?.push(cit.name + " Discovered they are " + cit.sexuality)
    }
  }

  appointMayor(){
    var rand = Math.floor(Math.random() * this.citizens.length)
    this.citizens[rand].job2 = {
      name: "Mayor",
      primarySkill: "Charisma",
      secondarySkill: "Intelligence",
      populationRequirment: 0
    }
    this.messageService.updatedMessages(this.citizens[rand].name + " has been appointed Mayor")
    this.hasMayor = true
  }

  checkForRelationships(){
    for(let cit of this.citizens){
      for(let cit2 of this.citizens){
        if(this.checkIfRelationshipAppropriate(cit, cit2)){
          if(Math.floor(Math.random() * 4) == 3){
            cit.relationshipStatus = true
            cit.openToRelationship = false
            cit.significantOther = cit2
            cit2.relationshipStatus = true
            cit2.openToRelationship = false
            cit2.significantOther = cit
            this.messageService.updatedMessages(cit.name + " and " + cit2.name + " are now daiting.")
          }
        }
      }
    }
  }
  checkForKids(){
    for(let cit of this.citizens){
      if(cit.relationshipStatus == true && cit.recentlyHadChild == false){
        if(Math.floor(Math.random() * 4) == 3){
          cit.recentlyHadChild = true
          if(cit.significantOther){
            cit.significantOther.recentlyHadChild = true
          }
          let newCit = generateCitizen(this.citizens)
          newCit.age = 0
          newCit.parent = cit
          this.citizens.push(newCit)
          this.messageService.updatedMessages(cit.name + " and " + cit.significantOther?.name + " had a baby named " + newCit.name)
        }
      }
    }
  }
  checkIfRelationshipAppropriate(cit1: ICitizen, cit2: ICitizen){
    if(cit1.age < cit1.race.pubertyAge.min || cit2.age < cit1.race.pubertyAge.min){
      return false
    }
    if(!cit1.openToRelationship || !cit2.openToRelationship){
      return false
    }
    if(cit1.race !== cit2.race){
      return false
    }
    if(cit1.age < cit1.race.pubertyAge.max + 3 || cit2.age < cit2.race.pubertyAge.max){
      if(Math.abs(cit1.age - cit2.age ) > 3){
        return false
      }
    }
    return true
  }
}
