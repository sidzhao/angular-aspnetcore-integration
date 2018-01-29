import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-profile',
  templateUrl: './profile.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
