import { Component, OnInit } from '@angular/core';

@Component({
  // selector: app-servers,
  // selector: '[app-servers]', 
  // selector: '.app-servers',
  template: `<app-server></app-server>
  <hr>
  <p>Nesting Components without using templateUrl Property - INLINE TEMPLATES</p>
  <hr>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
