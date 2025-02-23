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
  messages: ChatMessage[] = [
    { username: "HackerMan", message: "I just ddosed the 'deutsche bahn'" },
    { username: "ScriptKiddie", message: "Anyone got free viruses?" },
    { username: "Player1", message: "Hello, world!" }
  ];
  messageInput: string = '';

  constructor() {}

  ngOnInit() {
    this.socket$ = new WebSocketSubject('ws://localhost:3000'); 

    this.socket$.subscribe(
      (message: ChatMessage) => this.messages.push(message), 
      (err) => console.error(err),
      () => console.warn('WebSocket closed')
    );
  }

  sendMessage() {
    if (this.messageInput.trim()) {
      const chatMessage: ChatMessage = {
        username: 'Player1', 
        message: this.messageInput
      };

      this.socket$.next(chatMessage);
      this.messages.push(chatMessage); //just for display 
      this.messageInput = '';
    }
  }
}
