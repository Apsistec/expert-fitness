import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PaidGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastController,
    private alert: AlertController
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map((user) => {
        console.log('paid guard launched: ', user);
        if (!user) {
          this.router.navigateByUrl('/get-started');
          return false;
        } else if (user) {
          const paidUserStatus = user.subStatus;
          if (!paidUserStatus) {
            this.router.navigateByUrl('/home/payment').then(async () => {
              const alert = await this.alert.create({
                subHeader: 'Subscription Required',
                message:
                  'In order to access services, you will need to purchase a subscription.',
                translucent: true,
                header: 'Account Error'
              });
              alert.present();
              return false;
            });
          } else
          if (paidUserStatus === 'active' || 'trialing') {
            this.router.navigateByUrl('/member').then(async () => {
              const toast = await this.toast.create({
                header: 'Welcome Back',
                message: 'Login Successful, your account is currently active.',
                duration: 2000,
                color: 'successT',
                cssClass: 'paid-user',
                position: 'middle',
              });
              toast.present();
              return true;
            });
          } else if (paidUserStatus === 'past_due') {
            this.router.navigateByUrl('/home/payment').then(async () => {
              const alert = await this.alert.create({
                message:
                  'Currently, your account is ' +
                  paidUserStatus +
                  '. You need to make a payment to restore access',
                cssClass: 'unpaid-user',
                translucent: true,
                subHeader: 'Payment Past-due'
              });
              alert.present();
              return false;
            });
          } else if (paidUserStatus === 'cancelled') {
            this.router.navigateByUrl('/home/payment').then(async () => {
              const alert = await this.alert.create({
                translucent: true,
                subHeader: 'Account Cancelled',
                message:
                'Currently, your account is ' +
                paidUserStatus +
                '. You need to reopen your account to restore access',
                cssClass: 'unpaid-user',
              });
              alert.present();
              return false;
            });
          } else if (paidUserStatus === 'unpaid') {
            this.router.navigateByUrl('/home/payment').then(async () => {
              const alert = await this.alert.create({
                translucent: true,
                header: 'Account Currently Unpaid',
                message:
                  'Currently, your account is ' +
                  paidUserStatus +
                  '. You need to use a valid card on your account to restore access',
                cssClass: 'unpaid-user',
              });
              alert.present();
              return false;
            });
          }
        }
      })
    );
  }
}
