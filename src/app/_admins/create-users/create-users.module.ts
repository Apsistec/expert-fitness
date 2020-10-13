import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUsersRoutingModule } from './create-users-routing.module';

import { CreateUsersPage } from './create-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUsersRoutingModule
  ],
  declarations: [CreateUsersPage]
})
export class CreateUsersPageModule {}
