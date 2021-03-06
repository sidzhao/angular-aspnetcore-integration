import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { ComponentsButtonComponent } from './components-button.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  declarations: [ComponentsButtonComponent],
  exports: [ComponentsButtonComponent]
})
export class ComponentsButtonModule { }
