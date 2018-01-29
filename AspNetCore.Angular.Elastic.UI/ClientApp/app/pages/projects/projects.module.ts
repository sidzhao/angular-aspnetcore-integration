import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatTooltipModule } from '@angular/material';

import { PageHeaderModule, BreadcrumbsModule } from '@daybreaksoft/angular-elastic-ui';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects.routing';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    RouterModule,
    PageHeaderModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
