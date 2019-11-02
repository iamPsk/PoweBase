import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  form: HTMLFormElement;
  search: boolean = false;

  constructor() { }


  ngOnInit() {
    this.form = document.forms[0];
  }

  open() {
    console.log('in');
    
    this.search = true;
    this.form.style.right = '16px';    
  }

  close() {
    this.search = false;
    this.form.style.right = '-189.281px';
  }

}
