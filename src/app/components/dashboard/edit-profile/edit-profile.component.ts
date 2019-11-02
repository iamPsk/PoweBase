import { Component, OnInit } from '@angular/core';
import { auth } from "firebase"

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  client: firebase.User;

  constructor() {
    auth().onAuthStateChanged((user) => {
      this.client = user;
      console.log(user);
      
    })
   }

  ngOnInit() {
  }

}
