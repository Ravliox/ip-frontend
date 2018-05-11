import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  hasImage: boolean;
  initial: string;
  user: any;
  
  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
    this.user = this.loginService.getActiveUser();
    console.log (this.user);
    if (this.user.img === "") {
      this.hasImage = false;
      this.initial = this.user.name.charAt(0);
    } else {
      this.hasImage = true;
    }
  }

  logout() {
    this.router.navigate(['']);
    this.loginService.logout();
  }

}
