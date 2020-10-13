import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CreateUsersPage } from './create-users.page';

const routes: Routes = [

  {path: 'create-users', component: CreateUsersPage}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CreateUsersRoutingModule { }
