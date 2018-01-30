import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSliderModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { ComponentsProgressComponent } from './components-progress.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSliderModule
  ],
  declarations: [ComponentsProgressComponent],
  exports: [ComponentsProgressComponent]
})
export class ComponentsProgressModule { }
