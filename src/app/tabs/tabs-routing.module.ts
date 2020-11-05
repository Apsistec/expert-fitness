import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../_customers/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'workouts',
        loadChildren: () => import('../_customers/workouts/workouts.module').then(m => m.WorkoutsPageModule)
      },
      {
        path: 'nutrition',
        loadChildren: () => import('../_customers/nutrition/nutrition.module').then(m => m.NutritionPageModule)
      },
      {
        path: 'videos/:playlistId',
        loadChildren: () => import('../_customers/videos/videos.module').then(m => m.VideosPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
