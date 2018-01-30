import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@daybreaksoft/angular-elastic-ui';
import { authRoutes } from './pages/auth/auth.routing';

const routes: Routes = [
   {
     path: '',
     component: LayoutComponent,
     children: [
       //{
       //  path: '',
       //  loadChildren: 'app/pages/dashboard/dashboard-statistics/dashboard-statistics.module#DashboardStatisticsModule',
       //  pathMatch: 'full'
       //},
       //{
       //  path: 'dashboard/all-in-one',
       //  loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
       //},
       //{
       //  path: 'dashboard/crm',
       //  loadChildren: 'app/pages/dashboard/dashboard-crm/dashboard-crm.module#DashboardCrmModule'
       //},
       {
        path: 'apps/chat',
        loadChildren: './pages/chat/chat.module#ChatModule'
       },
       {
        path: 'components',
        loadChildren: './pages/components/components.module#ComponentsModule'
       },
       {
         path: 'forms',
         loadChildren: './pages/forms/forms.module#FormModule'
       },
       // {
       //   path: 'apps/inbox',
       //   loadChildren: 'app/pages/inbox/inbox.module#InboxModule'
       // },
       {
         path: 'pages/profile',
         loadChildren: './pages/profile/profile.module#ProfileModule'
       },
       {
        path: 'tables/simple-table',
        loadChildren: './pages/tables/simple-table/simple-table.module#SimpleTableModule'
       },
       {
        path: 'tables/table-pagination',
        loadChildren: './pages/tables/table-pagination/table-pagination.module#TablePaginationModule'
       },
       {
        path: 'tables/table-sorting',
        loadChildren: './pages/tables/table-sorting/table-sorting.module#TableSortingModule'
       },
       {
        path: 'tables/table-filtering',
        loadChildren: './pages/tables/table-filtering/table-filtering.module#TableFilteringModule'
       },
       {
        path: 'tables/datatable',
        loadChildren: './pages/tables/datatable/datatable.module#DatatableModule'
       },
       //{
       //  path: 'tables/all-in-one-table',
       //  loadChildren: 'app/pages/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule'
       //},
       //{
       //  path: 'maps/google-maps',
       //  loadChildren: 'app/pages/google-maps/google-maps.module#GoogleMapsModule'
       //},
       {
         path: 'pages/projects',
         loadChildren: './pages/projects/projects.module#ProjectsModule'
       },
       {
         path: 'pages/project-details',
         loadChildren: './pages/project-details/project-details.module#ProjectDetailsModule'
       },
       {
         path: 'material-icons',
         loadChildren: './pages/icon/icon.module#IconModule'
       },
       {
         path: 'editor',
         loadChildren: './pages/editor/editor.module#EditorModule'
       },
       {
         path: 'drag-and-drop',
         loadChildren: './pages/drag-and-drop/drag-and-drop.module#DragAndDropModule'
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
