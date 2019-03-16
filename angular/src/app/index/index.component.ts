import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  form: FormGroup;
  hidePassword = true;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
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

}
