import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'add-event-component',
  templateUrl: './add-event.component.html'
})
export class AddEventComponent {
  isExpanded = false;

  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
