import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CitizenListService } from './citizen-list.service';

@Injectable({
  providedIn: 'root'
})
export class WorldManagerService {
  private yearSubject = new BehaviorSubject<number>(0)
  private monthSubject = new BehaviorSubject<number>(0)
  private daySubject = new BehaviorSubject<number>(0)
  year$: Observable<number> = this.yearSubject.asObservable();
  month$: Observable<number> = this.yearSubject.asObservable() ;
  day$: Observable<number> = this.yearSubject.asObservable();

  constructor(private citizenListService: CitizenListService) { }

  advanceYear(){
    const currentYear = this.yearSubject.getValue()
    this.yearSubject.next(currentYear + 1)
    this.citizenListService.ageCits()
  }
  advanceDay(){
    const currentDay = this.daySubject.getValue()
    if(currentDay === 5){
      this.daySubject.next(1)
    }
    else{
      this.daySubject.next(currentDay + 1)
    }

  }
}
