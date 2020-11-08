import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { MessageService } from '../_services/message.service';

@Injectable({
  providedIn: 'root',
})
export class PaidGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastController,
    private messageService: MessageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map((user) => {
        if (!user) {
          this.router.navigateByUrl('/home');
          return false;
        } else if (user && user.subStatus === 'active' || 'trialing') {
          this.router.navigateByUrl('/customers/dashboard').then(async () => {
            this.messageService.welcomeBackToast();
            return true;
          });
        } else if (user && user.subStatus  === 'past_due') {
          this.router.navigateByUrl('/home/payment').then(async () => {
            this.messageService.pastDueAlert();
            return false;
            });
        } else if (user && user.subStatus  === 'cancelled') {
          this.router.navigateByUrl('/home/payment').then(async () => {
            this.messageService.cancelledAlert();
            return false;
          });
        } else if (user && user.subStatus  === 'unpaid') {
          this.router.navigateByUrl('/home/payment').then(async () => {
            this.messageService.needPaymentAlert();
            return false;
          });
        }
      })
    );
  }
}
