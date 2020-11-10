import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPage } from './customers.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage,
    children: [
      {
        path: 'workouts',
        loadChildren: () =>
          import('./workouts/workouts.module').then(
            (m) => m.WorkoutsPageModule
          )
      },
      {
        path: 'videos',
        loadChildren: () =>
          import('./videos/videos.module').then((m) => m.VideosPageModule)
      },
      {
        path: 'newsfeed',
        loadChildren: () =>
          import('./newsfeed/newsfeed.module').then(
            (m) => m.NewsfeedPageModule
          )
      },
      {
        path: 'nutrition',
        loadChildren: () =>
          import('./nutrition/nutrition.module').then(
            (m) => m.NutritionPageModule
          )
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          )
      },
      {
        path: '',
        redirectTo: '/customers/dashboard',
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
