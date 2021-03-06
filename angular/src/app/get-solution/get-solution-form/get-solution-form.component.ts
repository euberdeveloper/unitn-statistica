import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Input as ExerciseInput } from '../../exercise/exercise.service';

@Component({
  selector: 'app-get-solution-form',
  templateUrl: './get-solution-form.component.html',
  styleUrls: ['./get-solution-form.component.scss']
})
export class GetSolutionFormComponent {

  @Input()
  get inputs(): ExerciseInput[] {
    return this._inputs;
  }
  set inputs(inputs: ExerciseInput[]) {
    this._inputs = inputs;
    if (inputs) {
      this.form = this.fb.group({ ...inputs.map(_input => [ null, Validators.required ]), times: [ null, (this.simulated ? Validators.required : []) ] });
    }
  }
  private _inputs: ExerciseInput[];

  @Input() date: string;
  @Input() simulated: boolean;
  @Input() notes: string;
  @Output('getSolution') getSolutionEmitter = new EventEmitter<{ inputs: string[], times: number }>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  getFormControl(index: number | string): FormControl {
    return this.form.get(index.toString()) as FormControl;
  }

  getSolution(): void {
    if (this.form.valid) {
      const { times, ...inputs } = this.form.value;
      this.getSolutionEmitter.emit({ inputs: Object.values(inputs), times: times || 1 });
    }
  }

}
