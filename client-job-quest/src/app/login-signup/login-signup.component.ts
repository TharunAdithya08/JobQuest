import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent implements OnInit{
  isShowLogin: boolean = false;
  isShowSignup: boolean = false;
  isShowDesc: boolean = true;
  isFirstPanelOpen: boolean = false;

  constructor(private router: Router){}

  ngOnInit() {}

  signupPanel() {
    this.isShowLogin = false;
    this.isShowSignup = true;
    this.isShowDesc = false;
  }

  loginPanel() {
    this.isShowDesc = false;
    this.isShowLogin = true;
    this.isShowSignup = false;
  }

  onPanelClicked() {
    this.isFirstPanelOpen = true;
  }

  showDescription() {
    this.isShowDesc = true;
    this.isShowLogin = false;
  }
}
