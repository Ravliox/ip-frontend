import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginControl : FormGroup


  constructor(private formBuilder : FormBuilder, private snackBar: MatSnackBar, private loginService : LoginService, private router : Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginControl = this.formBuilder.group({
      login: '' ,
      password: ''
    })
  }

  signIn() {
    let user = {
      login: this.loginControl.get("login").value,
      password: this.loginControl.get("password").value
    }

    let rez = this.loginService.checkUser(user);
    if (rez === true){
      this.router.navigate(['app']);
    } else {
      this.snackBar.open('Incorrect username or password!');
    }
  }
}
