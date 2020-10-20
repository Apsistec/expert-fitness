import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainersRoutingModule } from './trainers-routing.module';

import { TrainersPage } from './trainers.page';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainersRoutingModule,
    SharedModule
  ],
  declarations: [TrainersPage]
})
export class TrainersPageModule {}
