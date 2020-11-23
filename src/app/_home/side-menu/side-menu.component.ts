import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { AboutAppComponent } from '../../_shared/about-app/about-app.component';
import { AboutUsComponent } from '../../_shared/about-us/about-us.component';
import { GetStartedComponent } from '../../_shared/get-started/get-started.component';
import { PrivacyComponent } from '../../_shared/privacy/privacy.component';
import { TermsComponent } from '../../_shared/terms/terms.component';
import { User } from '../../_models/users.model';
import { AuthService } from '../../_services/auth.service';
import { MessageService } from '../../_services/message.service';
import { UserService } from '../../_services/user.service';
import { ContactPage } from '../contact/contact.page';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  yearDate: any;
  user: User;

  constructor(
    private router: Router,
    public authService: AuthService,
    public userService: UserService,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getYear();
    // this.user = this.authService.user$;
    // this.authService.user$.pipe(map((user) => (this.user = user)));

  }

  getYear(): void {
    this.yearDate = Date.now();
  }


  gotoGetStarted() {
    this.router.navigateByUrl('/get-started');
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
  async showModalContact() {
    const modal = await this.modalController.create({
      component: ContactPage,
      cssClass: 'modal-css',
      backdropDismiss: true,
      swipeToClose: true,
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }
  async showModalAboutUs() {
    const modal = await this.modalController.create({
      component: AboutUsComponent,
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
