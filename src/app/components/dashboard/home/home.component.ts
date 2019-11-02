import { Component, OnInit } from '@angular/core';
import { auth } from "firebase";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  curClient: string;
  constructor() {
    this.curClient =  auth().currentUser.displayName    
   }

  ngOnInit() {
  }

}
