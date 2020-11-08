import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { UserService } from '../../_services/user.service';
import { MessageService } from '../../_services/message.service';
import { GetStartedComponent } from '../../_shared/get-started/get-started.component';
import { PopoverComponent } from '../../_shared/popover/popover.component';
import { TermsComponent } from '../terms/terms.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { AboutAppComponent } from '../about-app/about-app.component';
import { User } from '../../_models/users.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  yearDate;
  user: User;

  constructor(
    private popoverController: PopoverController,
    private router: Router,
    public authService: AuthService,
    public userService: UserService,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getYear();
    // this.user = this.authService.user$;
    this.authService.user$.pipe(map((user) => (this.user = user)));

  }

  getYear(): void {
    this.yearDate = Date.now();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'popoverUser',
    });
    return popover.present();
  }

  gotoGetStarted() {
    this.router.navigateByUrl('/home/get-started');
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

  dismissModal() {
    this.modalController.dismiss();
  }
}
