import { Component, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { Router, ActivatedRoute } from '@angular/router';
import { auth } from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: HTMLFormElement;
  user: User;
  logging: boolean;
  loginErr: string;
  unAuth: boolean;
  loggedOut: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    if (this.route.snapshot.paramMap.has('auth')) {
      this.unAuth = true
    };

    if (this.route.snapshot.paramMap.has('logout')) {
      this.loggedOut = true
    };
    
    this.form = document.forms[0];

    this.user = {
      email: 'blast@sclass.com',
      password: '111111'
    };
    
  }

  login() {
    this.logging = true;

    auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(
      (user) => {
        this.logging = false;
        this.form.reset();
        this.router.navigate([`home/${user.user.displayName}`]);
      }).catch(
        (err: firebase.auth.Error) => {
        this.logging = false;
          this.loginErr = err.code.slice(5, err.code.length);
      })
  }
}
