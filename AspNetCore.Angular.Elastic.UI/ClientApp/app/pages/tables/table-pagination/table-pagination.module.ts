import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { PageHeaderModule, BreadcrumbsModule, ScrollbarModule } from '@daybreaksoft/angular-elastic-ui';

import { TablePaginationRoutingModule } from './table-pagination-routing.module';
import { TablePaginationComponent } from './table-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    TablePaginationRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule
  ],
  declarations: [TablePaginationComponent]
})
export class TablePaginationModule { }
