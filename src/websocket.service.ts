import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://your-backend-url/chat');
  }

  sendMessage(message: string, username: string) {
    this.socket$.next({ username, message });
  }

  getMessages() {
    return this.socket$;
  }
}
