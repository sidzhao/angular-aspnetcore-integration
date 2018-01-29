import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from '@agm/core';
import { RouteHandlerModule, CoreModule, DefaultLayoutService } from '@daybreaksoft/angular-elastic-ui';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { reducers } from './app.reducers';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AppLayoutService } from './app.layout.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        AgmCoreModule.forRoot({
            apiKey: environment.googleMapsApiKey
        }),
        AppRoutingModule,
        PagesModule,
        CoreModule,
        RouteHandlerModule
    ],
providers: [
        {provide: DefaultLayoutService, useClass: AppLayoutService }
      ],
})
export class AppModuleShared {
}