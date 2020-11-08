import {
  fadeInDown,
  flash,
  pulse,
  slideInLeft,
  slideInRight,
} from 'ng-animate';
import { map } from 'rxjs/operators';

import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AboutAppComponent } from '../../_home/about-app/about-app.component';
import { GetStartedComponent } from '../../_shared/get-started/get-started.component';
import { PrivacyComponent } from '../../_home/privacy/privacy.component';
import { TermsComponent } from '../../_home/terms/terms.component';
import { User } from '../../_models/users.model';
import { AuthService } from '../../_services/auth.service';
import { MessageService } from '../../_services/message.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home-page-one.component',
  templateUrl: './home-page-one.component.html',
  styleUrls: ['./home-page-one.component.scss'],
  animations: [
    trigger('fadeInDown', [
      transition(
        '* => *',
        useAnimation(fadeInDown, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
    trigger('slideInRight', [
      transition(
        '* => *',
        useAnimation(slideInRight, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
    trigger('slideInLeft', [
      transition(
        '* => *',
        useAnimation(slideInLeft, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
    trigger('pulse', [
      transition(
        '* => *',
        useAnimation(pulse, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 2, delay: 0.75 },
        })
      ),
    ]),
    trigger('flash', [
      transition(
        '* => *',
        useAnimation(flash, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 2, delay: 0.75 },
        })
      ),
    ]),
  ],
})
export class HomePageOneComponent implements OnInit {
  title = 'Home';
  user: User;
  fadeInDown;
  flash;
  slideInRight;
  slideInLeft;
  pulse;
  yearDate: number;

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.authService.user$.pipe(
      map( user => {
        this.user = user;
      })
    );

    this.getYear();
  }

  getYear(): void {
    this.yearDate = Date.now();
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalGetStarted() {
    const modal = await this.modalController.create({
      component: GetStartedComponent,
      cssClass: 'modal-css',
      showBackdrop: true,
      backdropDismiss: false,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalAbout() {
    const modal = await this.modalController.create({
      component: AboutAppComponent,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  // topFunction() {

  // }

}
