import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomersPage } from './customers.page';
import { FreeContentComponent } from './free-content/free-content.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PremiumContentComponent } from './premium-content/premium-content.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { VideosComponent } from './videos/videos.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage,
    children: [
      {
        path: 'workouts', component: WorkoutsComponent
      },
      {
        path: 'videos', component: VideosComponent
      },
      {
        path: 'newsfeed', component: NewsfeedComponent
      },
      {
        path: 'free-content', component: FreeContentComponent
      },
      {
        path: 'premium-content', component: PremiumContentComponent
      },
      {
        path: 'invoices', component: InvoicesComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'settings', component: SettingsComponent
      },
      {
        path: 'user-tickets', component: UserTicketsComponent
      },
      {
        path: 'nutrition', component: NutritionComponent
      },
      {
        path: 'workouts', component: WorkoutsComponent
      },
      {
        path: 'customer-dashboard', component: CustomerDashboardComponent
      },
      {
        path: '',
        redirectTo: '/customers/customer-dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
