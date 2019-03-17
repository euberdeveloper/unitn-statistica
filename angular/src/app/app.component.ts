import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

import { AlertService, SnackType, SnackMessage } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private alertSubscription: Subscription;

  constructor(
    private snackbar: MatSnackBar,
    private alert: AlertService
    ) { }

  ngOnInit(): void {
    this.alertSubscription = this.alert.snackbar.subscribe(
      snackMessage => {
        switch(snackMessage.type) {
          case SnackType.SUCCESS:
            this.successSnack(snackMessage);
            break;
          case SnackType.WARN:
            this.warnSnack(snackMessage);
            break;
          case SnackType.ERROR:
            this.errorSnack(snackMessage);
            break;
          case SnackType.INFO:
            this.infoSnack(snackMessage);
            break;
        }
      }
    );
  }

  ngOnDestroy(): void {
    if(this.alertSubscription && !this.alertSubscription.closed) {
      this.alertSubscription.unsubscribe();
    }
  }

  private successSnack(snackMessage: SnackMessage): void {
    this.snackbar.open(snackMessage.message, snackMessage.action || 'Ok', {
      duration: 2000,
      panelClass: 'success_snack'
    });
    console.log(snackMessage.log, snackMessage.object);
  }

  private infoSnack(snackMessage: SnackMessage): void {
    this.snackbar.open(snackMessage.message, snackMessage.action || 'Ok', {
      duration: 2000
    });
    console.log(snackMessage.log, snackMessage.object);
  }

  private warnSnack(snackMessage: SnackMessage): void {
    this.snackbar.open(snackMessage.message, snackMessage.action || 'Ok', {
      duration: 2000,
      panelClass: 'warn_snack'
    });
    console.warn(snackMessage.log, snackMessage.object);
  }

  private errorSnack(snackMessage: SnackMessage): void {
    this.snackbar.open(snackMessage.message, snackMessage.action || 'Ok', {
      duration: 2000,
      panelClass: 'error_snack'
    });
    console.error(snackMessage.log, snackMessage.object);
  }

}
