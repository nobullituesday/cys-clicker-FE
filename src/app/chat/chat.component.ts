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
    this.socket$ = new WebSocketSubject('ws://192.168.208.1:3000'); //192.168.208.1 port 3000

    this.socket$.subscribe(
      (data: any) => {
        if (data.event === 'chat-message') {
          this.messages.push(data.chatMessage);
        } else if (data.event === 'register') {
          this.isRegistered = true; 
          console.log('we are now registered')
        }
      },
      (err) => console.error(err),
      () => console.warn('WebSocket closed')
    );

    console.log('attempting connection to server: ')
    this.socket$.next({ event: 'register' });

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
