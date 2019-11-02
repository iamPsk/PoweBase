import { Component, OnInit } from '@angular/core';
import { auth } from "firebase";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { NavigationStart, Router } from "@angular/router";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navStart: Observable<NavigationStart>;
  homeLink: string;
  collapse: HTMLElement;
  client: firebase.User;

  constructor(
    private router: Router
  ) { 
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.client = user
        this.homeLink = `home/:${this.client.displayName}`
      }else{
        this.homeLink = "/login"
        delete this.client
      }
    })

    // this.navStart = router.events.pipe(
    //   filter(e => e instanceof NavigationStart)
    // ) as Observable<NavigationStart>

  }

  ngOnInit() {
    this.collapse = document.getElementById('collapse');

    // this.navStart.subscribe((e) => {
    //   ;
    //   console.log('naving');
    //   this.client ? console.log(this.client.displayName) : "no name"
      
    //   if (this.client) {
    //   } else {
    //   } 

    //   console.log(this.homeLink);
      
    // })
  }

  toggleNav() {
    this.collapse.style.display =
      this.collapse.style.display === '' ? 'flex' : ''
  };

  logout() {
    auth().signOut().then(() => {
      this.router.navigate(['login',{logout:true}])
    }).catch((err) => {
      console.log(`logout errr`);
    })
  };

}
