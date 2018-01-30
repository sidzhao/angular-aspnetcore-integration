import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatListModule, MatTabsModule } from '@angular/material';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { ComponentsListComponent } from './components-list.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatListModule
  ],
  declarations: [ComponentsListComponent],
  exports: [ComponentsListComponent]
})
export class ComponentsListModule { }
