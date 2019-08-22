import { Component } from '@angular/core';
import { TrainingModel } from '../models/TrainingModel';
import { TrainingService } from '../services/TrainingService';
import { Observable, throwError } from 'rxjs'

@Component({
  selector: 'training-list-component',
  templateUrl: './training-list.component.html',
  styleUrls: ['training-list.component.css']
})
export class TrainingListComponent {
  isExpanded = false;
  public trainings: Observable<TrainingModel[]>;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.GetAllTrainings();
  }

  public GetAllTrainings() {
    this.trainings = this.trainingService.GetAllTrainings();
  }

}
