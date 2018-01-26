import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TRANSITION } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-forgot-password',
  templateUrl: './forgot-password.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  send() {
    this.router.navigate(['/']);
  }

}
