import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  //template: '<h1>ahoy</h1>',
  //template: '<app-server></app-server>',
  template: `
  <h1>ahoy</h1>
  <p>Hola</p>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
