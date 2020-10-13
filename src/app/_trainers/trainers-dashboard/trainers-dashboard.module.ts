import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainersDashboardRoutingModule } from './trainers-dashboard-routing.module';

import { TrainersDashboardPage } from './trainers-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainersDashboardRoutingModule
  ],
  declarations: [TrainersDashboardPage]
})
export class TrainersDashboardModule {}
