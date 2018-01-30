import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { ComponentsTooltipComponent } from './components-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ComponentsTooltipComponent],
  exports: [ComponentsTooltipComponent]
})
export class ComponentsTooltipModule { }
