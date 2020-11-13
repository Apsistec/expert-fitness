import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { GetStartedComponent } from '../../_modals/get-started/get-started.component';
import { MessageService } from '../../_services/message.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import * as animator from 'ng-animate';
import { Benefits } from '../../_models/training-benefits';
import { slideInRight, slideInLeft } from 'ng-animate';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home-page-two.component.html',
  styleUrls: ['./home-page-two.component.scss'],
  animations: [
    trigger('slideInRight', [
      transition(
        '* => *',
        useAnimation(animator.slideInRight, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
    trigger('slideInLeft', [
      transition(
        '* => *',
        useAnimation(animator.slideInLeft, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1.5, delay: 0.5 },
        })
      ),
    ]),
  ],
})
export class HomePageTwoComponent implements OnInit {
  @ViewChild('mySlider') slider: IonSlides;

  slideOpts = {
    initialSlide: 1,
    speed: 200,
    loop: true,

    breakpoints: {
      350: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  };

  benefits =  Benefits;

  slideInRight: any;
  slideInLeft: any;

  constructor(
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
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
}
