import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/users.model';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
 user: User;
  constructor(
    public authService: AuthService
    ) { }

  ngOnInit() {
    // this.authService.user$.pipe(
    //   map((user) =>
    //   this.user = user)
    // );
  }

}
