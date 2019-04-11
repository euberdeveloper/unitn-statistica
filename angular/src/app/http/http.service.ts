import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Input } from '../exercise/exercise.service';

export interface ProvideExerciseBody {
  user: string;
  password: string;
  date: string;
}

export interface ProvideExerciseResponse {
  date: string;
  inputs: Input[];
  solution: string;
  simulated: boolean;
}

const serverDomain = 'https://unitn-statistica.herokuapp.com';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) { }

  provideExercise(body: ProvideExerciseBody): Observable<ProvideExerciseResponse> {
    return this.http.post<ProvideExerciseResponse>(serverDomain + '/api/provide-exercise', body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    const error = err.error;
    if (error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
      console.error(error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${error}`);
      console.log(error);
    }
    // return an observable with a user-facing error message
    return throwError(error.message);
  }

}