import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule, MatSortModule, MatTableModule } from '@angular/material';
import { PageHeaderModule, BreadcrumbsModule, ScrollbarModule } from '@daybreaksoft/angular-elastic-ui';

import { TableSortingRoutingModule } from './table-sorting-routing.module';
import { TableSortingComponent } from './table-sorting.component';

@NgModule({
  imports: [
    CommonModule,
    TableSortingRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatCheckboxModule
  ],
  declarations: [TableSortingComponent]
})
export class TableSortingModule { }
