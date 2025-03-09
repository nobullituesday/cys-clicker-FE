import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  imports: [NgFor],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {
  players = [
    { username: 'Kek1', score: 120 },
    { username: 'Kek2', score: 100 },
    { username: 'Kek3', score: 80 },
    { username: 'Kek1', score: 120 },
    { username: 'Kek2', score: 100 },
    { username: 'Kek3', score: 80 },
    { username: 'Kek1', score: 120 },
    { username: 'Kek2', score: 100 },
    { username: 'Kek3', score: 80 },
    
  ];
}
