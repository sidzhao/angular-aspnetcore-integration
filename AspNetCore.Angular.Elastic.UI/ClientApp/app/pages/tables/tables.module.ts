import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllInOneTableModule } from './all-in-one-table/all-in-one-table.module';
import { DatatableModule } from './datatable/datatable.module';
import { SimpleTableModule } from './simple-table/simple-table.module';
import { TableFilteringModule } from './table-filtering/table-filtering.module';
import { TablePaginationModule } from './table-pagination/table-pagination.module';
import { TableSortingModule } from './table-sorting/table-sorting.module';

@NgModule({
  imports: [
    CommonModule,
    AllInOneTableModule,
    DatatableModule,
    SimpleTableModule,
    TableFilteringModule,
    TablePaginationModule,
    TableSortingModule
  ]
})
export class TablesModule { }
