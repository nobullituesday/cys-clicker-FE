import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { ShopPreviewComponent } from '../shop-preview/shop-preview.component';

interface FloatingText {
  x: number;
  y: number;
}

@Component({
  selector: 'app-game',
  imports: [NgFor, LeaderboardComponent, ShopPreviewComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  username: string = "H4ckerman";
  score: number = 0;
  floatingTexts: FloatingText[] = [];
  virusAmountGained: number = 1;

  addVirus(event: MouseEvent) {
    this.score++;
    // here we will have to implement the backend call as well 
    console.log("Yippie, Backend call one day");

    // Get button position for floating text
    const button = event.target as HTMLElement;
    const rect = button.getBoundingClientRect();

    // Generate random offset near the button for floating text
    const randomX = rect.left + rect.width / 2 + (Math.random() * 200 - 150);
    const randomY = rect.top + rect.height / 2 + (Math.random() * 100 - 50);

    const newText: FloatingText = { x: randomX, y: randomY };
    this.floatingTexts.push(newText);

    setTimeout(() => {
      this.floatingTexts.shift();
    }, 2000);
  }
}
