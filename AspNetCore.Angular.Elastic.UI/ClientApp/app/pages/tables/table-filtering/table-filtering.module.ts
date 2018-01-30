import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { PageHeaderModule, BreadcrumbsModule, ScrollbarModule } from '@daybreaksoft/angular-elastic-ui';

import { TableFilteringRoutingModule } from './table-filtering-routing.module';
import { TableFilteringComponent } from './table-filtering.component';

@NgModule({
  imports: [
    CommonModule,
    TableFilteringRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule
  ],
  declarations: [TableFilteringComponent]
})
export class TableFilteringModule { }
