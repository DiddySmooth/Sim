import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesSubject = new BehaviorSubject<string[]>([])

  messages$ = this.messagesSubject.asObservable()

  updatedMessages(message: string){
    const currentMessage = this.messagesSubject.getValue()
    const updatedMessage = [...currentMessage, message]
    this.messagesSubject.next(updatedMessage)
  }
  
  constructor() { }
}
