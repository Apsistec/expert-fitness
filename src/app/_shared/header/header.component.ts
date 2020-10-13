import { map } from "rxjs/operators";
import { User } from "src/app/_models/user";

import { Component, OnInit } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";

import { GetStartedComponent } from "../../_home/get-started/get-started.component";
import { AuthService } from "../../_services/auth.service";
import { MessageService } from "../../_services/message.service";
import { PopoverComponent } from "../popover/popover.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController,
    private messageService: MessageService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user$.pipe(map((user) => (this.user = user)));
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: "popoverUser",
    });
    return popover.present();
  }

  async showModalGetStarted() {
    const modal = await this.modalController.create({
      component: GetStartedComponent,
      cssClass: "modal-css",
      showBackdrop: true,
      backdropDismiss: false,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }
}
