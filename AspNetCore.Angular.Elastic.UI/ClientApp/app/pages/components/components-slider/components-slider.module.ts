import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatSliderModule, MatTabsModule } from '@angular/material';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { ComponentsSliderComponent } from './components-slider.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatSliderModule
  ],
  declarations: [ComponentsSliderComponent],
  exports: [ComponentsSliderComponent]
})
export class ComponentsSliderModule { }
