import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  template:`<app-client></app-client>
  <hr>
  <app-client></app-client>`,
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
