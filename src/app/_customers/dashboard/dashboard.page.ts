import { map } from 'rxjs/operators';
import { UserService } from 'src/app/_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../_models/users.model';
import { AuthService } from '../../_services/auth.service';
import { StorageService } from '../../_services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  title = 'Dashboard';
  user: User;
  defaultAnalytics;
  constructor(
    public storage: StorageService,
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public userService: UserService
    ) {}

  ngOnInit() {
    return this.authService.user$
     .pipe(
       map(
         (user) =>  (this.user = user)
       )
     );
  }

  ionViewDidEnter() {
  }
}
