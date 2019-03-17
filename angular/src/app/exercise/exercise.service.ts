import { Injectable } from '@angular/core';

import { DeserializeService } from 'src/app/deserialize/deserialize.service';
import { ProvideExerciseResponse } from 'src/app/http/http.service';

export interface Input {
  description: string;
  type: string;
  hint?: string;
}

export interface Exercise {
  date: string;
  inputs: Input[];
  solution: any;
}

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private exercise: Exercise = null;

  constructor(private deser: DeserializeService) { }

  getExercise(): Exercise {
    return this.exercise;
  }

  setExercise(exercise: ProvideExerciseResponse) {
    this.exercise = exercise ? {
      date: exercise.date,
      inputs: exercise.inputs,
      solution: this.deser.deserialize(exercise.solution)
    } : null;
  }

}
