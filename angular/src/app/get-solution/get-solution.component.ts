import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { ExerciseService, Exercise, Input } from 'src/app/exercise/exercise.service';

@Component({
  selector: 'app-get-solution',
  templateUrl: './get-solution.component.html',
  styleUrls: ['./get-solution.component.scss']
})
export class GetSolutionComponent implements OnInit {

  private exercise: Exercise;
  inputs: Input[] = null;
  date = 'Nessun esercizio';
  form: FormGroup;

  progress = 0;
  loading = false;
  solution = null;

  constructor(
    private fb: FormBuilder,
    private ex: ExerciseService
  ) { }

  ngOnInit() {
    this.exercise = this.ex.getExercise();
    if(this.exercise) {
      this.date =this.exercise.date;
      this.inputs = this.exercise.inputs;
      this.form = this.fb.group({ ...this.inputs.map(_input => [ null, Validators.required ]), times: [ null, Validators.required ] });
    }
  }

  getFormControl(index: number): FormControl {
    return this.form.get(index.toString()) as FormControl;
  }

  getSolution(): void {
    if(this.form.valid) {
      const { times, ...inputs } = this.form.value;
      const solver = new this.exercise.solution(...Object.values(inputs));
      this.loading = true;
      solver.test(times, (progress: number) => {
        this.progress = progress;
      }).then(solution => this.solution = solution);
    }
  }

}
