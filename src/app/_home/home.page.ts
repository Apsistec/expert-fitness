import { flash, pulse, bounceOutUp, jello } from 'ng-animate';
import { map } from 'rxjs/operators';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutAppComponent } from '../_modals/about-app/about-app.component';
import { GetStartedComponent } from '../_modals/get-started/get-started.component';
import { PrivacyComponent } from '../_modals/privacy/privacy.component';
import { TermsComponent } from '../_modals/terms/terms.component';
import { User } from '../_models/users.model';
import { AuthService } from '../_services/auth.service';
import { MessageService } from '../_services/message.service';
import { UserService } from '../_services/user.service';

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
  user: User;
  fadeInDown: any;
  flash: any;
  slideInRight: any;
  slideInLeft: any;
  pulse: any;
  jello: any;
  bounceOutUp: any;
  yearDate: number;

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.authService.user$.pipe(
      map((user) => {
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

}
