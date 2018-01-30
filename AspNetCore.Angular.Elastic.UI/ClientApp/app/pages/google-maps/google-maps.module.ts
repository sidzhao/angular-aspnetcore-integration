import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { GoogleMapsRoutingModule } from './google-maps.routing';
import { GoogleMapsComponent } from './google-maps.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    GoogleMapsRoutingModule
  ],
  declarations: [GoogleMapsComponent]
})
export class GoogleMapsModule { }
