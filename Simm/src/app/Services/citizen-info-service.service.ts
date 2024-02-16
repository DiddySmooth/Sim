import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICitizen } from '../Interfaces/ICitizen';

@Injectable({
  providedIn: 'root'
})
export class CitizenInfoServiceService {
  private citizenSubject = new Subject<ICitizen>();

  citizen$ = this.citizenSubject

  updateCitizen(citizen:ICitizen){
    this.citizenSubject.next(citizen)
  }
  constructor() { }
}
