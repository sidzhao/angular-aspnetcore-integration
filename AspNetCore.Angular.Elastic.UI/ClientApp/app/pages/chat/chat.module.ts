import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRippleModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { PageHeaderModule, BreadcrumbsModule, UtilsModule, ScrollbarModule } from '@daybreaksoft/angular-elastic-ui';
import { ChatRoutingModule } from './chat.routing';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    UtilsModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
