import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebSocketSubject } from 'rxjs/webSocket';

interface ChatMessage {
  username: string;
  message: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [NgFor, FormsModule],
})
export class ChatComponent implements OnInit {
  private socket$!: WebSocketSubject<any>;
  messages: ChatMessage[] = [];
  messageInput: string = '';
  isRegistered: boolean = false; 

  constructor() {}

  ngOnInit() {
 
  }

  sendMessage() {
    if (this.messageInput.trim() && this.isRegistered) {
      const chatMessage = {
        event: 'chat-message',
        username: 'Player1',
        message: this.messageInput
      };

      this.socket$.next(chatMessage);
      this.messageInput = '';
    }
  }
}
