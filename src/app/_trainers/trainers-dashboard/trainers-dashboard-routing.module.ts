import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainersDashboardPage } from './trainers-dashboard.page';

const routes: Routes = [
  {
    path: 'trainers',
    component: TrainersDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainersDashboardRoutingModule {}
