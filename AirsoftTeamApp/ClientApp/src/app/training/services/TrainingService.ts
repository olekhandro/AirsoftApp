import { Component, Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TrainingModel } from '../models/TrainingModel';

@Injectable({
  providedIn: 'root'
})

export class TrainingService {

  public trainings: TrainingModel[];

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public GetAllTrainings() {
    return this.http.get<TrainingModel[]>(this.baseUrl + 'api/Training/Trainings', { headers: this.headers }).pipe(tap(data => {
      this.trainings = data;
    }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.  
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.  
      // The response body may contain clues as to what went wrong,  
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message  
    return throwError('Something bad happened; please try again later.');
  };
}

