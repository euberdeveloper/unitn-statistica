import { Injectable } from '@angular/core';

//Dependencies
import * as VEGA from 'vega-statistics';
const vega = VEGA;

@Injectable({
  providedIn: 'root'
})
export class DeserializeService {

  deserialize(classe: string): any {
    return eval('(' + classe + ')');
  }

}
