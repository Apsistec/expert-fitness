import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainersPage } from './trainers.page';

const routes: Routes = [
  {
    path: '',
    component: TrainersPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/trainers/dashboard',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainersRoutingModule {}
