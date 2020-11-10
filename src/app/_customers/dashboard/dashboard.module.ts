import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../_shared/shared.module';
import { ProfilePage } from '../profile/profile.page';
import { SettingsPage } from '../settings/settings.page';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    DashboardPage,
    ProfilePage,
    SettingsPage
  ]
})
export class DashboardPageModule {}
