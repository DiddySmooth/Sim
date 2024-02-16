import { Component, Input, input } from '@angular/core';
import { ICitizen } from '../../Interfaces/ICitizen';
import { CitizenInfoServiceService } from '../../Services/citizen-info-service.service';

@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  styleUrl: './citizen-list.component.sass'
})
export class CitizenListComponent {
  @Input() citizens: ICitizen [] = []
  constructor(private citizenInfo: CitizenInfoServiceService){}
  showCitizen(cit: ICitizen){
    this.citizenInfo.updateCitizen(cit)
  }

}
