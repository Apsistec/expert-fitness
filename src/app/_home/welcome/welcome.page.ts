import { fadeInLeft } from 'ng-animate';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  // animations: [
  //   trigger("fadeInLeft", [
  //     transition(
  //       "* => *",
  //       useAnimation(fadeInLeft, {
  //         // Set the duration to 5seconds and delay to 2seconds
  //         params: { timing: 4, delay: 1.5 },
  //       })
  //     ),
  //   ]),

  // ],
})
export class WelcomePage {
  title = 'welcome';
  showSkip: boolean;
  bounce;
  isEnd;

  slideOpts = {
    centeredSlides: true,
    effect: 'flip',
    allowSlidePrev: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  };

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    private storage: Storage,
    private menu: MenuController,
    private router: Router
  ) {}

  async startApp() {
    await this.storage.clear().then(() => {
      this.storage.set('ion_did_tutorial', true)
       .then((value: boolean) => {
         if ( value ) {
           console.log('value: ', value);
           this.router.navigateByUrl('/home');
         }
       });
    });
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then((isEnd: boolean) => {
      this.showSkip = !isEnd;
      this.isEnd = isEnd;
    });
  }
  onSlideSwipeOrFabTap() {
    this.slides.slideNext();
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then((res) => {
      if (res === true) {
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
