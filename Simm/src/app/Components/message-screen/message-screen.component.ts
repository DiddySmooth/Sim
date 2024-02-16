import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-message-screen',
  templateUrl: './message-screen.component.html',
  styleUrl: './message-screen.component.sass',
})
export class MessageScreenComponent implements OnInit {
  messages: any[] = [];
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    this.messageService.messages$.subscribe((array) => {
      this.messages = array;
      this.updateScroll();
    });
  }
  updateScroll() {
    var element = document.getElementById('messageBox');
    setTimeout(function () {
      if(element)
        element.scrollTop = element.scrollHeight;
    }, 100);
  }
}
