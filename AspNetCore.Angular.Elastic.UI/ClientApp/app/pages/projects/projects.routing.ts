import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
