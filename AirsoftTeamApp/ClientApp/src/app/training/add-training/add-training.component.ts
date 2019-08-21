import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'add-training-component',
  templateUrl: './add-training.component.html'
})
export class AddTrainingComponent {
  isExpanded = false;

  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
