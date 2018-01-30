import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatTabsModule } from '@angular/material';

import { ComponentsMenuComponent } from './components-menu.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ComponentsMenuComponent],
  exports: [ComponentsMenuComponent]
})
export class ComponentsMenuModule { }
