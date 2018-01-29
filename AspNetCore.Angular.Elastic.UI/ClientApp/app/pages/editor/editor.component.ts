import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-editor',
  templateUrl: './editor.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
