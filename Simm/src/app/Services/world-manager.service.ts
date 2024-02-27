import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CitizenListService } from './citizen-list.service';

@Injectable({
  providedIn: 'root'
})
export class WorldManagerService {
  private yearSubject = new BehaviorSubject<number>(0)
  year$: Observable<number> = this.yearSubject.asObservable();
  month$!: Observable<number>;
  day$!: Observable<number>;

  constructor(private citizenListService: CitizenListService) { }

  advanceYear(){
    const currentYear = this.yearSubject.getValue()
    this.yearSubject.next(currentYear + 1)
    this.citizenListService.ageCits()
  }
}
