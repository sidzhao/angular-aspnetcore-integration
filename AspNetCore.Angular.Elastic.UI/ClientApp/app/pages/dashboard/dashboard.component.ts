import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class DashboardComponent implements OnInit {

  width = {
    single: (100) + '%',
    double: (100 / 2) + '%',
    triple: (100 / 3) + '%',
  };

  constructor() { }

  ngOnInit() {
  }

}
