import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule } from '@angular/material';

import { PageHeaderModule, BreadcrumbsModule } from '@daybreaksoft/angular-elastic-ui';

import { ProfileRoutingModule } from './profile.routing';
import { ProfileComponent } from './profile.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FlexLayoutModule,
    PageHeaderModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    BreadcrumbsModule
  ],
  declarations: [ProfileComponent, ProfileOverviewComponent]
})
export class ProfileModule { }
