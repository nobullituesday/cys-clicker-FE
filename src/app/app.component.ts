import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ShopComponent } from './shop/shop.component';

@Component({
  selector: 'app-root',
  imports: [ GameComponent, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cyber_securitcy_game';
}
