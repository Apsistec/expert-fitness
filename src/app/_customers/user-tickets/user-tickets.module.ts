import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../_shared/shared.module';
import { UserTicketsPageRoutingModule } from './user-tickets-routing.module';
import { UserTicketsPage } from './user-tickets.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UserTicketsPageRoutingModule
  ],
  declarations: [UserTicketsPage]
})
export class UserTicketsPageModule {}
