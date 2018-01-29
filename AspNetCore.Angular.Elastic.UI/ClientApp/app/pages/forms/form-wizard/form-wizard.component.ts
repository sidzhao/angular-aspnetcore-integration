import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-form-wizard',
  templateUrl: './form-wizard.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class FormWizardComponent implements OnInit {

  selectedIndex = 0;
  lastIndex = 3;

  constructor() { }

  ngOnInit() {
  }

  previousPage() {
    this.selectedIndex -= 1;
  }

  nextPage() {
    this.selectedIndex += 1;
  }

}
