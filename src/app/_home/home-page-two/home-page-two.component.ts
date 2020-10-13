import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { GetStartedComponent } from "../../_home/get-started/get-started.component";
import { MessageService } from "../../_services/message.service";
import { slideInRight, slideInLeft } from "ng-animate";
import { trigger, transition, useAnimation } from "@angular/animations";
import * as animator from "ng-animate";
import { BodyPage } from "../../_home/body/body.page";
import { MindPage } from "../../_home/mind/mind.page";
import { SoulPage } from "../../_home/soul/soul.page";

@Component({
  selector: "app-home-page-two",
  templateUrl: "./home-page-two.component.html",
  styleUrls: ["./home-page-two.component.scss"],
  animations: [
    trigger("slideInRight", [
      transition(
        "* => *",
        useAnimation(animator.slideInRight, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
    trigger("slideInLeft", [
      transition(
        "* => *",
        useAnimation(animator.slideInLeft, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
  ],
})
export class HomePageTwoComponent implements OnInit {
  slideInRight;
  slideInLeft;
  constructor(
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  async showModalGetStarted() {
    const modal = await this.modalController.create({
      component: GetStartedComponent,
      cssClass: "modal-css",
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalBody() {
    const modal = await this.modalController.create({
      component: BodyPage,
      cssClass: "modal-css",
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalMind() {
    const modal = await this.modalController.create({
      component: MindPage,
      cssClass: "modal-css",
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }

  async showModalSoul() {
    const modal = await this.modalController.create({
      component: SoulPage,
      cssClass: "modal-css",
      showBackdrop: true,
    });
    return modal.present().catch((err) => {
      return this.messageService.errorAlert(err);
    });
  }
}
