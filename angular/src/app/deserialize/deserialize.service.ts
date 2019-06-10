import { Injectable } from '@angular/core';

// Dependencies
import * as VEGA from 'vega-statistics';
const vega = VEGA;
import * as RANDOM from 'random';
const random = RANDOM;

@Injectable({
  providedIn: 'root'
})
export class DeserializeService {

  deserialize(classe: string): any {
    // tslint:disable-next-line:no-eval
    return eval('(' + classe + ')');
  }

}
