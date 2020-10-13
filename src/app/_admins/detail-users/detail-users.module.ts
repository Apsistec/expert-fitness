import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailUsersPageRoutingModule } from './detail-users-routing.module';

import { DetailUsersPage } from './detail-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailUsersPageRoutingModule
  ],
  declarations: [DetailUsersPage]
})
export class DetailUsersPageModule {}
