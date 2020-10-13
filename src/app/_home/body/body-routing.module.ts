import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyPage } from './body.page';

const routes: Routes = [
  {
    path: '',
    component: BodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyPageRoutingModule {}
