import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AllInOneTableComponent } from './all-in-one-table/all-in-one-table.component';
import { DatatableComponent } from './datatable/datatable.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { TableFilteringComponent } from './table-filtering/table-filtering.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableSortingComponent } from './table-sorting/table-sorting.component';


export const routes: Routes = [
  {
    path: 'all-in-one-table',
    component: AllInOneTableComponent
  },
 {
    path: 'datatable',
    component: DatatableComponent
  },
 {
    path: 'simple-table',
    component: SimpleTableComponent
  },
 {
    path: 'table-filtering',
    component: TableFilteringComponent
  },
 {
    path: 'table-pagination',
    component: TablePaginationComponent
  },
 {
    path: 'table-sorting',
    component: TableSortingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconRoutingModule { }
