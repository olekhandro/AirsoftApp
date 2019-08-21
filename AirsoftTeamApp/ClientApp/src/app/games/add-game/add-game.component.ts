import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'add-game-component',
  templateUrl: './add-game.component.html'
})
export class AddGameComponent {
  isExpanded = false;

  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
