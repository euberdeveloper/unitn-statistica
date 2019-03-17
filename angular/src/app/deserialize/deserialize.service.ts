import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeserializeService {

  deserialize(classe: string): any {
    return eval('(' + classe + ')');
  }

}
