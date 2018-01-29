import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatChipsModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';

import { PageHeaderModule, BreadcrumbsModule } from '@daybreaksoft/angular-elastic-ui';

import { ProjectDetailsRoutingModule } from './project-details.routing';
import { ProjectDetailsComponent } from './project-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    FlexLayoutModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule
  ],
  declarations: [ProjectDetailsComponent]
})
export class ProjectDetailsModule { }
