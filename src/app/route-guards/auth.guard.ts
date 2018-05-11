import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';
import { of } from 'rxjs/observable/of'
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private loginService : LoginService, private snackBar : MatSnackBar, private router : Router) {

  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn()) {
      return of (true);
    } else {
      this.snackBar.open ("Unauthorized access! Login first!", "", {
        duration: 1500
      });
      this.router.navigate(['signin']);
    }
  }
}
