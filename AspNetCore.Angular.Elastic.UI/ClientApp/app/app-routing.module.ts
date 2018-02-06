import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@daybreaksoft/angular-elastic-ui';

import { authRoutes } from './pages/auth/auth.routing';
import { routes as chatRoutes } from './pages/chat/chat.routing';
import { routes as componentsRoutes } from './pages/components/components.routing';
import { routes as formsRoutes } from './pages/forms/forms.routing';
import { routes as editorRoutes } from './pages/editor/editor.routing';
import { routes as draganddropRoutes } from './pages/drag-and-drop/drag-and-drop.routing';
import { routes as googlemapRoutes } from './pages/google-maps/google-maps.routing';
import { routes as iconRoutes } from './pages/icon/icon.routing';
import { routes as tablesRoutes } from './pages/tables/tables.routing';
import { routes as profileRoutes } from './pages/profile/profile.routing';
import { routes as projectsRoutes } from './pages/projects/projects.routing';
import { routes as projectdetailsRoutes } from './pages/project-details/project-details.routing';
import { routes as dashboardRoutes } from './pages/dashboard/dashboard.routing';
import { routes as dashboardcrmRoutes } from './pages/dashboard/dashboard-crm/dashboard-crm-routing.module';
import { routes as dashboardstatisticsRoutes } from './pages/dashboard/dashboard-statistics/dashboard-statistics-routing.module';

// Unknown issues caused by lazy load
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        children:[...dashboardstatisticsRoutes],
        //loadChildren: './pages/dashboard/dashboard-statistics/dashboard-statistics.module#DashboardStatisticsModule',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/all-in-one',
        children: [...dashboardRoutes]
        //loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'dashboard/crm',
        children: [...dashboardcrmRoutes]
        //loadChildren: './pages/dashboard/dashboard-crm/dashboard-crm.module#DashboardCrmModule'
      },
      {
        path: 'apps/chat',
        children: [...chatRoutes],
        // loadChildren: './pages/chat/chat.module#ChatModule'
      },
      {
        path: 'components',
        children: [...componentsRoutes]
        // loadChildren: './pages/components/components.module#ComponentsModule'
      },
      {
        path: 'forms',
        children: [...formsRoutes]
        // loadChildren: './pages/forms/forms.module#FormModule'
      },
      // {
      //   path: 'apps/inbox',
      //   loadChildren: 'app/pages/inbox/inbox.module#InboxModule'
      // },
      {
        path: 'pages/profile',
        children: [...profileRoutes]
        //loadChildren: './pages/profile/profile.module#ProfileModule'
      },
      {
        path: 'tables',
        children: [...tablesRoutes]
      },
      // {
      // path: 'tables/simple-table',
      // loadChildren: './pages/tables/simple-table/simple-table.module#SimpleTableModule'
      // },
      //{
      //path: 'tables/table-pagination',
      //loadChildren: './pages/tables/table-pagination/table-pagination.module#TablePaginationModule'
      //},
      //{
      //path: 'tables/table-sorting',
      //loadChildren: './pages/tables/table-sorting/table-sorting.module#TableSortingModule'
      //},
      //{
      //path: 'tables/table-filtering',
      //loadChildren: './pages/tables/table-filtering/table-filtering.module#TableFilteringModule'
      //},
      //{
      //path: 'tables/datatable',
      //loadChildren: './pages/tables/datatable/datatable.module#DatatableModule'
      //},
      //{
      //path: 'tables/all-in-one-table',
      //loadChildren: './pages/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule'
      //},
      {
        path: 'maps/google-maps',
        children: [...googlemapRoutes]
        // loadChildren: './pages/google-maps/google-maps.module#GoogleMapsModule'
      },
      {
        path: 'pages/projects',
        children: [...projectsRoutes]
        //loadChildren: './pages/projects/projects.module#ProjectsModule'
      },
      {
        path: 'pages/project-details',
        children: [...projectdetailsRoutes]
        //loadChildren: './pages/project-details/project-details.module#ProjectDetailsModule'
      },
      {
        path: 'material-icons',
        children: [...iconRoutes]
        // loadChildren: './pages/icon/icon.module#IconModule'
      },
      {
        path: 'editor',
        children: [...editorRoutes]
        // loadChildren: './pages/editor/editor.module#EditorModule'
      },
      {
        path: 'drag-and-drop',
        children: [...draganddropRoutes]
        // loadChildren: './pages/drag-and-drop/drag-and-drop.module#DragAndDropModule'
      }
    ]
  },
  {
    path: 'auth',
    children: [
      ...authRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
