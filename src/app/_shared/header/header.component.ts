import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/users.model';

import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

import { GetStartedComponent } from '../../_modals/get-started/get-started.component';
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
  showBackButton = false;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController,
    private messageService: MessageService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.user$.pipe(map((user) => (this.user = user)));

    if (this.router.url === '/home') {
      this.showBackButton = false;
    } else {
      this.showBackButton = true;
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
