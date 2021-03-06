import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Input } from '../exercise/exercise.service';

export interface UserInfo {
  id: string;
  timestamp: string;
}

export interface ProvideExerciseBody {
  user: string;
  password: string;
  date: string;
  userInfo: UserInfo;
}

export interface ProvideExerciseResponse {
  date: string;
  inputs: Input[];
  solution: string;
  simulated: boolean;
  notes: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  get
  serverDomain(): string {
    return isDevMode() ? 'https://unitn-statistica.herokuapp.com' : '';
  }

  constructor(private http: HttpClient) { }

  provideExercise(body: ProvideExerciseBody): Observable<ProvideExerciseResponse> {
    return this.http.post<ProvideExerciseResponse>(this.serverDomain + '/api/provide-exercise', body, httpOptions)
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
