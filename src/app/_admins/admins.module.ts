import { NgModule } from '@angular/core';
import { AdminsRoutingModule } from './admins-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminsPage } from './admins.page';



@NgModule({
  declarations: [
    AdminsPage,
  ],
  imports: [
    AdminsRoutingModule,
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [],
})
export class AdminsModule {}
