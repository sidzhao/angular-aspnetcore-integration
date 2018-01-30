import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ROUTE_TRANSITION } from '@daybreaksoft/angular-elastic-ui';

@Component({
  selector: 'vr-google-maps',
  templateUrl: './google-maps.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class GoogleMapsComponent implements OnInit {

  lat = 40.7143528;
  lng = -74.0059731;
  zoom = 10;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
