import { Component, OnInit, NgZone } from '@angular/core';

import { ExerciseService, Exercise, Input as ExerciseInput } from '../exercise/exercise.service';

@Component({
  selector: 'app-get-solution',
  templateUrl: './get-solution.component.html',
  styleUrls: ['./get-solution.component.scss']
})
export class GetSolutionComponent implements OnInit {

  private exercise: Exercise;

  notFound = true;

  form = false;
  inputs: ExerciseInput[] = null;
  date: string;
  simulated: boolean;
  notes: string;

  loading = false;
  progress = 0;

  canShowSolution = false;
  solution = null;

  constructor(
    private zone: NgZone,
    private ex: ExerciseService
  ) { }

  ngOnInit() {
    this.exercise = this.ex.getExercise();
    if (this.exercise) {
      this.notFound = false;
      this.form = true;
      this.simulated = this.exercise.simulated;
      this.date = this.exercise.date;
      this.notes = this.exercise.notes;
      this.inputs = this.exercise.inputs;
    }
  }

  getSolution(inputs: string[], times: number): void {
    this.form = false;
    this.loading = true;
    const solver = new this.exercise.solution(...inputs);
    solver
      .test(times, (progress: number) => {
        this.zone.run( () => (this.progress = (progress / times) * 100) );
      })
      .then((solution: number[]) => {
        this.loading = false;
        this.canShowSolution = true;
        this.solution = solution;
      });
  }

}
