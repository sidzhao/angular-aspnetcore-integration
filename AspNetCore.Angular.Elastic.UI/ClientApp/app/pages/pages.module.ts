import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { ComponentsModule } from './components/components.module';
import { FormModule } from './forms/forms.module';
import { EditorModule } from './editor/editor.module';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { IconModule } from './icon/icon.module';
import { TablesModule } from './tables/tables.module';
import { ProfileModule } from './profile/profile.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectDetailsModule } from './project-details/project-details.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardCrmModule } from './dashboard/dashboard-crm/dashboard-crm.module';
import { DashboardStatisticsModule } from './dashboard/dashboard-statistics/dashboard-statistics.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    ChatModule,
    ComponentsModule,
    FormModule,
    EditorModule,
    DragAndDropModule,
    GoogleMapsModule,
    IconModule,
    TablesModule,
    ProfileModule,
    ProjectsModule,
    ProjectDetailsModule,
    DashboardModule,
    DashboardCrmModule,
    DashboardStatisticsModule
  ],
  declarations: []
})
export class PagesModule { }
