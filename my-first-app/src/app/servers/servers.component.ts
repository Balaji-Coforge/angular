import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  //template: '<h1>ahoy</h1>',
  //template: '<app-server></app-server>',
  template: `
  <h1>ahoy</h1>
  <h1><p *ngIf="displayHola; else displayHello">Hola</p></h1>
  <ng-template #displayHello>
    <h2><p>Hello</p></h2>
  </ng-template>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  displayHola = false;
  constructor() {
    setTimeout(() => {
      this.displayHola = true;
    }, 4000);
  }

  ngOnInit(): void {
  }

}
