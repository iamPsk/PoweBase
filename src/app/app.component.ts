import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PowerBase';
  constructor(
    private router: Router
  ) {
    console.log('app started');
    console.log(router.url);
    auth().onAuthStateChanged((user) => {   
      console.log('authenticating');
        
      if (router.url === "/" && user || router.url === "/login" && user ) {
        console.log(user.displayName + " is logged in ");
        this.router.navigate([`home/${user.displayName}`])
      }
    })
  }
}
