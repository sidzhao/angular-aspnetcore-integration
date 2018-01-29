import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule, MatTabsModule,
  MatTooltipModule
} from '@angular/material';

import { PageHeaderModule, BreadcrumbsModule, UtilsModule } from '@daybreaksoft/angular-elastic-ui';
import { FormsRoutingModule } from './forms.routing';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormElementsComponent } from './form-elements/form-elements.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    BreadcrumbsModule,
    UtilsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    PageHeaderModule
  ],
  declarations: [
    FormElementsComponent,
    FormWizardComponent
  ]
})
export class FormModule { }
