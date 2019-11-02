import { Component, OnInit } from '@angular/core';
import { NewUser } from '../models/user.model';
import { auth } from "firebase";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: HTMLFormElement;
  user: NewUser;
  regProc: boolean;
  regErr: string;  

  constructor() { }

  ngOnInit() {
    
    this.form = document.forms[0];

    this.user = {
      username: 'blast',
      email: 'blast@sclass.com',
      password: '',
      password2: ''
    };
  
  }

  register() {
    this.regProc = true;

    // create new user
    auth().createUserWithEmailAndPassword(
      this.user.email, this.user.password
    ).then(
      (user) => {
        // update display name
        user.user.updateProfile({
          displayName: this.user.username
        }).
          then(() => {
            delete this.regProc
            this.form.reset();
          }).catch(
          err => {
            delete this.regProc;
            this.regErr = 'oops';
          }
        )

      }
    ).catch(
      (err: firebase.auth.Error) => {
        delete this.regProc;
        this.regErr = err.code;
      }
    )
  }

}
