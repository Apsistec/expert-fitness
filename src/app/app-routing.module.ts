import { QuicklinkStrategy } from 'ngx-quicklink';

import { NgModule } from '@angular/core';
import {
  canActivate,
  emailVerified,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { PaidGuard } from './_guards/paid.guard';
import { RoleGuard } from './_guards/role.guard';
import { HomePage } from './_home/home.page';
const redirectLoggedInToDash = () =>
redirectLoggedInTo(['/customers/dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/home']);
const verifiedEmail = () => emailVerified;

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'faqs',
    loadChildren: () =>
      import('./_home/faq/faq.module').then((m) => m.FaqPageModule),
  },

  {
    path: 'testimonials',
    loadChildren: () =>
      import('./_home/testimonials/testimonials.module').then(
        (m) => m.TestimonialsPageModule
      )
  },
  {
    path: 'ratings',
    redirectTo: '/testimonials',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./_home/products/products.module').then(
        (m) => m.ProductsPageModule
      )
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./_home/contact/contact.module').then(
        (m) => m.ContactPageModule
      )
    },
    {
    path: 'unknown',
    loadChildren: () =>
    import('./_home/unknown/unknown.module').then((m) => m.UnknownPageModule),
    // ...canActivate(redirectLoggedInToDash)
  },
  {
    path: 'customers',
    loadChildren: () =>
    import('./_customers/customers.module').then(
      (m) => m.CustomersPageModule
      ),
      // ...canActivate(redirectUnauthorizedToLogin),
      // ...canActivate(verifiedEmail),
      // canActivate: [PaidGuard, RoleGuard]
    },
    {
      path: 'employees',
      loadChildren: () =>
      import('./_employees/employees.module').then((m) => m.EmployeesPageModule),
      // ...canActivate(redirectUnauthorizedToLogin),
      // ...canActivate(verifiedEmail),
      // canActivate: [PaidGuard, RoleGuard]
    },
    {
      path: 'admins',
      loadChildren: () =>
      import('./_admins/admins.module').then((m) => m.AdminsModule),
      // ...canActivate(redirectUnauthorizedToLogin),
      // ...canActivate(verifiedEmail),
      // canActivate: [PaidGuard, RoleGuard]
    },
    {
      path: 'verified-email',
      loadChildren: () =>
      import('./_home/verify-email/verify-email.module').then(
        (m) => m.VerifyEmailModule
        ),
      },
      {
        path: 'home',
        component: HomePage
        // ...canActivate(redirectLoggedInToDash)
      },
      {
        path: '**',
        redirectTo: '/unknown',
        pathMatch: 'full',
      }
    ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
