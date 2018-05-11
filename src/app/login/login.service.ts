import { Injectable } from '@angular/core';
import { DB } from './fake-db'; 


@Injectable()
export class LoginService {

  users = DB;
  activeUser; //= this.users[0]; 

  constructor() { 
  }

  checkUser(user) : boolean {
    console.log(this.users);
    let rez = this.users.find(usr => user.user === usr.user && user.pass === usr.pass)

    if (rez === undefined) {
      return false;
    }
    this.loginUser(rez);
    return true;
  }

  loginUser(user) : void {
    this.activeUser = user;
  }

  isLoggedIn() : boolean {
    return this.activeUser ? true : false;
  }

  getActiveUser() : any {
    return this.activeUser;
  }

  logout() : void {
    this.activeUser = null;
  }

}
