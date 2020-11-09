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
      path: 'trainers',
      loadChildren: () =>
      import('./_trainers/trainers.module').then((m) => m.TrainersPageModule),
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
        loadChildren: () =>
          import('./_home/home.module').then((m) => m.HomePageModule),
        // ...canActivate(redirectLoggedInToDash)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/unknown',
        pathMatch: 'full',
      },
    ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
