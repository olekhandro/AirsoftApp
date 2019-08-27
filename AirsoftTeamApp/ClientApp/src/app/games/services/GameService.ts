import { Component, Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { GameModel } from '../models/GameModel';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  public events: GameModel[];

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public GetAllGames() {
    return this.http.get<GameModel[]>(this.baseUrl + 'api/Game/Games', { headers: this.headers }).pipe(tap(data => {
      this.events = data;
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

