import { Component } from '@angular/core';
import { GameModel} from '../models/GameModel';
import { GameService } from '../services/GameService';
import { Observable, throwError } from 'rxjs'

@Component({
  selector: 'games-list-component',
  templateUrl: './games-list.component.html'
})
export class GamesListComponent {
  isExpanded = false;
  public games: Observable<GameModel[]>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.GetAllGames();
  }

  public GetAllGames() {
    this.games = this.gameService.GetAllGames();
  }
}
