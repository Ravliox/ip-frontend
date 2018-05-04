import { Injectable } from '@angular/core';
import { DB } from './fake-db'; 


@Injectable()
export class LoginService {

  users = DB;

  constructor() { 
  }

  checkUser(user) : boolean {
    let rez = this.users.find(usr => user.user === usr.user)

    if (rez === undefined) {
      return false;
    }
    return true;
  }

}
