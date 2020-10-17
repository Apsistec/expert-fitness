import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsPage } from './admins.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'admins',
    component: AdminsPage,
    children: [
      {
        path: '',
        redirectTo: '/admins/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./admin-dashboard/admin-dashboard.module').then(
            (m) => m.AdminDashboardPageModule
          ),
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
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AdminsPage,
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class AdminsModule {}
