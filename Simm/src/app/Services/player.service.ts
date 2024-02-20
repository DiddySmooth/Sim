import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private ageSubject = new Subject<any>();

  age$ = this.ageSubject.asObservable();

  updateAge(age: any) {
    this.ageSubject.next(age);
  }
  constructor() { }
}
