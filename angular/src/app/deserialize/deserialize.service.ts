import { Injectable } from '@angular/core';

import * as VEGA from 'vega-statistics';

@Injectable({
  providedIn: 'root'
})
export class DeserializeService {

  deserialize(classe: string): any {
    const vega = VEGA;
    const res = eval('(' + classe + ')');
    console.log(res);
    return res;
  }

}
