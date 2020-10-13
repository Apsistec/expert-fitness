import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    private alert: AlertController
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data.role;

    return this.auth.user$.pipe(
      take(1),
      map((user) => {
        console.log('role guard launched: ', user);
        if (!user) {
          this.router.navigateByUrl('/home');
          return false;
        } else {
          const role = user['role'];
          if (expectedRole === role) {
            return true;
          } else {
            this.auth.SignOut().then(async () => {
              const alert = await this.alert.create({
                header: 'Unauthorized Access',
                message:
                  'You do not have the correct role assigned to your account. Try signing in with another valid account to access this page.',
              });
              alert.present();
            });
            return false;
          }
        }
      })
    );
  }
}
