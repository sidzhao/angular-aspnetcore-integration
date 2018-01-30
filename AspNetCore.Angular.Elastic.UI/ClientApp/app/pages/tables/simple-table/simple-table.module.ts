import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule, BreadcrumbsModule } from '@daybreaksoft/angular-elastic-ui';

import { SimpleTableRoutingModule } from './simple-table-routing.module';
import { SimpleTableComponent } from './simple-table.component';

@NgModule({
  imports: [
    CommonModule,
    SimpleTableRoutingModule,
    FormsModule,
    FlexLayoutModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: [SimpleTableComponent]
})
export class SimpleTableModule { }
