import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { RoleGuard } from '../_guards/role.guard';
import { CustomersPage } from './customers.page';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { ExcelSheetJsComponent } from './excel-sheet-js/excel-sheet-js.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersPage,

    children: [
      {
        path: 'workouts',
        loadChildren: () =>
          import('./workouts/workouts.module').then(
            (m) => m.WorkoutsPageModule
          ),
        // outlet: "home",
      },
      {
        path: 'videos',
        loadChildren: () =>
          import('./videos/videos.module').then((m) => m.VideosPageModule),
        // outlet: "home",
      },
      {
        path: 'newsfeed',
        loadChildren: () =>
          import('./newsfeed/newsfeed.module').then(
            (m) => m.NewsfeedPageModule
          ),
        // outlet: "home",
      },
      {
        path: 'nutrition',
        loadChildren: () =>
          import('./nutrition/nutrition.module').then(
            (m) => m.NutritionPageModule
          ),
        // outlet: "home",
      },
      {
        path: 'user-tickets',
        loadChildren: () =>
          import('./user-tickets/user-tickets.module').then(
            (m) => m.UserTicketsPageModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          )
      },
      {
        path: 'dragndrop',
        component: DragndropComponent,
      },
      {
        path: 'ticket',
        component: TicketComponent,
      },
      {
        path: 'upload-excel',
        component: UploadExcelComponent,
      },
      {
        path: 'excel-sheet-js',
        component: ExcelSheetJsComponent,
      },
      {
        path: '',
        redirectTo: '/customers/dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
