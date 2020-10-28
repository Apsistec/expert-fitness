// tslint:disable: max-line-length
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { GetStartedComponent } from '../../_home/get-started/get-started.component';
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
    speed: 400,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      150: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },
    },
  };

  benefits = Benefits;

  slideInRight;
  slideInLeft;

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
