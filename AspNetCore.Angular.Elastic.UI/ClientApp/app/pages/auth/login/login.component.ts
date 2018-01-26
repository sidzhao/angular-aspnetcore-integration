import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TRANSITION } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-login',
  templateUrl: './login.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/']);
  }

}
