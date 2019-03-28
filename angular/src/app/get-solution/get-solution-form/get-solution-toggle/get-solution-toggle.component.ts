import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggle } from '@angular/material';

import { Input as ExerciseInput } from '../../../exercise/exercise.service';

@Component({
  selector: 'app-get-solution-toggle',
  templateUrl: './get-solution-toggle.component.html',
  styleUrls: ['./get-solution-toggle.component.scss']
})
export class GetSolutionToggleComponent implements OnInit {

  @ViewChild('toggle') toggle: MatSlideToggle;
  @Input() control: FormControl;
  @Input() input: ExerciseInput;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.toggle.checked = true, 1);
  }

}
