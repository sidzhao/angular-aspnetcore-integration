import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from './icon.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: IconComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconRoutingModule { }
