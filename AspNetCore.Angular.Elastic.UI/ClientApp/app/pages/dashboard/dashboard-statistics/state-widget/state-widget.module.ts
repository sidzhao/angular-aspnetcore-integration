import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { StateWidgetComponent } from './state-widget.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    UtilsModule
  ],
  declarations: [StateWidgetComponent],
  exports: [StateWidgetComponent]
})
export class StateWidgetModule { }
