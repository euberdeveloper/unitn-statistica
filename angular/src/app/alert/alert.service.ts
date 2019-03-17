import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export enum SnackType {
  SUCCESS,
  ERROR,
  WARN,
  INFO
}

export interface SnackMessage {
  type: SnackType,
  message: string,
  action?: string,
  log: string,
  object ?: any
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _snackbarSubject = new Subject<SnackMessage>();
  get snackbar(): Observable<SnackMessage> {
    return this._snackbarSubject.asObservable();
  }

  pushSnackbar(snackMessage: SnackMessage): void {
    this._snackbarSubject.next(snackMessage);
  }

}
