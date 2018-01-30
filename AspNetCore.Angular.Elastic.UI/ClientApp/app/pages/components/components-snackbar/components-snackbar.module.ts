import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatSnackBarModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from '@daybreaksoft/angular-elastic-ui';

import { ComponentsSnackbarComponent } from './components-snackbar.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  declarations: [ComponentsSnackbarComponent],
  exports: [ComponentsSnackbarComponent]
})
export class ComponentsSnackbarModule { }
