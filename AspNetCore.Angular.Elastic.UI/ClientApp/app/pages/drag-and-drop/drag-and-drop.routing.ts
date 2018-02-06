import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: DragAndDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragAndDropRoutingModule { }
