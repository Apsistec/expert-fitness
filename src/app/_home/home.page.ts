import { flash, pulse, bounceOutUp, jello } from 'ng-animate';
import { map, take } from 'rxjs/operators';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutAppComponent } from '../_shared/about-app/about-app.component';
import { GetStartedComponent } from '../_shared/get-started/get-started.component';
import { PrivacyComponent } from '../_shared/privacy/privacy.component';
import { TermsComponent } from '../_shared/terms/terms.component';
import { User } from '../_models/users.model';
import { AuthService } from '../_services/auth.service';
import { MessageService } from '../_services/message.service';
import { UserService } from '../_services/user.service';
import { PopoverService } from '../_services/popover.service';
import { Router } from '@angular/router';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    animations: [
        trigger('bounceOutUp', [
            transition(
                '* => *',
                useAnimation(bounceOutUp, {
                    params: { timing: 1.75, delay: 2.4 },
                })
            ),
        ]),
        trigger('jello', [
            transition(
                '* => *',
                useAnimation(jello, {
                    params: { timing: 5, delay: 1 },
                })
            ),
        ]),
        trigger('pulse', [
            transition(
                '* => *',
                useAnimation(pulse, {
                    params: { timing: 1.75, delay: 1.2 },
                })
            ),
        ]),
        trigger('flash', [
            transition(
                '* => *',
                useAnimation(flash, {
                    params: { timing: 0.66, delay: 3.95 },
                })
            ),
        ]),
    ],
})
export class HomePage implements OnInit {
    title = 'Home';
    fadeInDown: any;
    flash: any;
    slideInRight: any;
    slideInLeft: any;
    pulse: any;
    jello: any;
    bounceOutUp: any;
    yearDate: number;
    showBackButton = false;
    currentURL: string;
    userCollection: AngularFirestoreCollection<User>;
    user;

  constructor(
      public authService: AuthService,
      public userService: UserService,
      private modalController: ModalController,
      private messageService: MessageService,
      public popoverService: PopoverService,
      private router: Router,
      private afAuth: AngularFireAuth
  ) {
      this.afAuth.credential.pipe(map(user => this.user = user));
    // this.user = this.authService.currentBehaviorUser;
    // this.afAuth.authState.pipe(map(user => this.user = user));
    // this.user = this.afAuth.currentUser;
    // this.authService.authState$.pipe(map(user => this.user = user));
    // this.authService.user$.pipe(map(user => this.user = user));
      console.log('user: ', this.user);
  }


  ngOnInit() {
    this.currentURL =  this.router.url;
    this.yearDate = Date.now();
    if (this.currentURL === 'home') {
      this.showBackButton = false;
    } else {
      this.showBackButton = true;
    }
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

}
