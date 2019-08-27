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

//$("address").each(function () {
//  var address = $(this).text().replace(/\,/g, ' '); // get rid of commas
//  var url = address.replace(/\ /g, '%20'); // convert address into approprite URI for google maps

//  $(this).wrap('<a href="http://maps.google.com/maps?q=' + url + '" target="_blank"></a>');

//});

