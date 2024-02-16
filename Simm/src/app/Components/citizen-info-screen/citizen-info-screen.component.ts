import { Component, OnInit } from '@angular/core';
import { CitizenInfoServiceService } from '../../Services/citizen-info-service.service';
import { ICitizen } from '../../Interfaces/ICitizen';

@Component({
  selector: 'app-citizen-info-screen',
  templateUrl: './citizen-info-screen.component.html',
  styleUrl: './citizen-info-screen.component.sass'
})
export class CitizenInfoScreenComponent implements OnInit{
  citizen!: ICitizen;
  constructor(private citizenService: CitizenInfoServiceService){}
  ngOnInit(): void {
    this.citizenService.citizen$.subscribe((x) => {
      this.citizen = x
    })
  }

}
