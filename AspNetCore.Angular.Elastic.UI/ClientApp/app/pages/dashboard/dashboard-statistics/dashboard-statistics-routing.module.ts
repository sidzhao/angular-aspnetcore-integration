import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardStatisticsComponent } from './dashboard-statistics.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardStatisticsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardStatisticsRoutingModule { }

