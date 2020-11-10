import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesPage } from './employees.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import( '../_employees/dashboard/dashboard.module' ).then((m) => m.DashboardPageModule),
      },
      {
        path: '',
        redirectTo: '/employees/dashboard',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesPageRoutingModule {}
