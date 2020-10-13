import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailUsersPage } from './detail-users.page';

const routes: Routes = [
  {
    path: '',
    component: DetailUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailUsersPageRoutingModule {}
