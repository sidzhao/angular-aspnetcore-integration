import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { ComponentsCardComponent } from './components-card.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [ComponentsCardComponent],
  exports: [ComponentsCardComponent]
})
export class ComponentsCardModule { }
