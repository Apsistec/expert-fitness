import { QuicklinkStrategy } from 'ngx-quicklink';

import { NgModule } from '@angular/core';
import {
  canActivate,
  emailVerified,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

// const redirectLoggedInToDash = () => redirectLoggedInTo(['/members/dashboard']);
// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
// const verifiedEmail = () => emailVerified;

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./_home/home.module').then((m) => m.HomePageModule),
    // ...canActivate(redirectLoggedInToDash)
  },
  {
    path: 'unknown',
    loadChildren: () =>
      import('./_home/unknown/unknown.module').then((m) => m.UnknownPageModule),
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./_home/verify-email/verify-email.module').then(
        (m) => m.VerifyEmailPageModule
      ),
  },
  {
    path: 'members',
    loadChildren: () =>
      import('./_members/members.module').then((m) => m.MembersPageModule),
    // ...canActivate(redirectUnauthorizedToLogin),
    // ...canActivate(verifiedEmail)
  },
  {
    path: 'trainers',
    loadChildren: () =>
      import('./_trainers/trainers.module').then((m) => m.TrainersPageModule),
    // ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'admins',
    loadChildren: () =>
      import('./_admins/admins.module').then((m) => m.AdminsModule),
    // ...canActivate(redirectUnauthorizedToLogin)
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
      // enableTracing: true,
      // scrollPositionRestoration: 'enabled',
      // onSameUrlNavigation: 'reload',
      // anchorScrolling: 'enabled',
      // useHash: true,
      // relativeLinkResolution: "corrected",
      // urlUpdateStrategy: "eager",
      // scrollOffset: [100, 100],
      // paramsInheritanceStrategy: "always"
      // errorHandler: routingError;
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
