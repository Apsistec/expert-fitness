import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SharedModule } from '../_shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PremiumContentComponent } from './premium-content/premium-content.component';
import { SettingsComponent } from './settings/settings.component';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { VideosComponent } from './videos/videos.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { FreeContentComponent } from './free-content/free-content.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    CancelSubscriptionComponent,
    InvoicesComponent,
    CustomerDashboardComponent,
    FreeContentComponent,
    NewsfeedComponent,
    NutritionComponent,
    PremiumContentComponent,
    ProfileComponent,
    SettingsComponent,
    UserTicketsComponent,
    VideosComponent,
    WorkoutsComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomersRoutingModule,
    SharedDirectivesModule
  ],
  exports: [

  ],
})
export class CustomersPageModule{}
