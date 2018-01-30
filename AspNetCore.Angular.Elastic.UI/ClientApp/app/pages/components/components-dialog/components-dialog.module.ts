import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { ComponentsDialogComponent, ComponentsDialogDemoDialogComponent } from './components-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ComponentsDialogDemoDialogComponent],
  declarations: [ComponentsDialogComponent, ComponentsDialogDemoDialogComponent],
  exports: [ComponentsDialogComponent]
})
export class ComponentsDialogModule { }

