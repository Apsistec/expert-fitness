import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'faqs',
        loadChildren: () =>
          import('../_home/faq/faq.module').then((m) => m.FaqPageModule),
      },

      {
        path: 'testimonials',
        loadChildren: () =>
          import('../_home/testimonials/testimonials.module').then(
            (m) => m.TestimonialsPageModule
          ),
        // outlet: "homeOutlet",
      },
      {
        path: 'ratings', redirectTo: '/home/testimonials', pathMatch: 'full'
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../_home/products/products.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../_home/contact/contact.module').then(
            (m) => m.ContactPageModule
          ),
      },

      {
        path: '',
        component: HomePageOneComponent,
        // outlet: 'homeOutlet',
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
