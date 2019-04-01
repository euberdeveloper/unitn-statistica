import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Moment } from 'moment';

import { HttpService } from '../http/http.service';
import { ExerciseService } from '../exercise/exercise.service';
import { AlertService, SnackType } from '../alert/alert.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  form: FormGroup;
  hidePassword = true;

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private http: HttpService,
    private ex: ExerciseService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.ex.setExercise(null);
    this.form = this.fb.group({
      user: null,
      password: null,
      exercise: null
    });
  }

  get user(): FormControl {
    return this.form.get('user') as FormControl;
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
  get exercise(): FormControl {
    return this.form.get('exercise') as FormControl;
  }

  go() {
    if(this.form.valid) {
      const momentDate = this.exercise.value as Moment;
      const year = momentDate.year();
      const month = momentDate.month();
      const day = momentDate.date();
      const date = year + '-' + (month > 8 ? month + 1 : '0' + (month + 1)) + '-' + (day > 9 ? day : '0' + day);
      this.http.provideExercise({
        user: this.user.value,
        password: this.password.value,
        date
      }).subscribe(
        result => {
          this.ex.setExercise(result);
          this.router.navigate([ 'get-solution' ]);
        },
        error => this.alert.pushSnackbar({
          type: SnackType.ERROR,
          message: 'Errore, credenziali errate o data sbagliata',
          log: 'Error in index post: ',
          object: error
        })
      );
    }
  }

}
