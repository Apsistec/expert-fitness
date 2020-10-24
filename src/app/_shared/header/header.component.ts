import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';

import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

import { GetStartedComponent } from '../../_home/get-started/get-started.component';
import { AuthService } from '../../_services/auth.service';
import { MessageService } from '../../_services/message.service';
import { PopoverComponent } from '../popover/popover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User;
  currentRoute;
  hideBackButton = false;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController,
    private messageService: MessageService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.user$.pipe(map((user) => (this.user = user)));

    this.currentRoute = this.router.url;
    if (this.currentRoute === '/home') {
      this.hideBackButton = true;
    }
    {
      this.hideBackButton = false;
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'user-popover',
    });
    return popover.present().catch((err) => {
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
}
