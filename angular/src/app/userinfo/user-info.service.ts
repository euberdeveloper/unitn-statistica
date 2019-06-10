import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import * as uuid from 'uuid/v4';

import { UserInfo } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private static readonly USER_INFO_KEY = 'unitn-statistica-uuid';
  id: string = null;

  get info(): UserInfo {
    return {
      id: this.id,
      timestamp: (new Date()).toISOString()
    };
  }

  constructor(private storage: LocalStorageService) {
    const id = storage.retrieve(UserInfoService.USER_INFO_KEY);
    if (id) {
      this.id = id;
    } else {
      this.id = uuid();
      storage.store(UserInfoService.USER_INFO_KEY, this.id);
    }
  }

}
