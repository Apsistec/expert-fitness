import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsPage } from './admins.page';

const routes: Routes = [
  {
    path: '',
    component: AdminsPage,
    children: [
      {
        path: 'admin-dashboard',
        loadChildren: () =>
          import('./admin-dashboard/admin-dashboard.module').then(
            (m) => m.AdminDashboardPageModule
          )
      },
      {
        path: 'create-users',
        loadChildren: () =>
          import('./create-users/create-users.module').then(
            (m) => m.CreateUsersPageModule
          ),
      },
      {
        path: 'edit-users',
        loadChildren: () =>
          import('./edit-users/edit-users.module').then(
            (m) => m.EditUsersPageModule
          ),
      },
      {
        path: 'list-users',
        loadChildren: () =>
          import('./list-users/list-users.module').then(
            (m) => m.ListUsersPageModule
          ),
      },
      {
        path: 'detail-users',
        loadChildren: () =>
          import('./detail-users/detail-users.module').then(
            (m) => m.DetailUsersPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/admins/admin-dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
