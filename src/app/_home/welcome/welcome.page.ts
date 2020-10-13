import { fadeInLeft } from 'ng-animate';

import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlide, IonSlides, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
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
  title = "welcome";
  showSkip: boolean;
  bounce;
  isEnd;

  slideOpts = {
    centeredSlides: true,
    effect: "flip",
    allowSlidePrev: false,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  };

  @ViewChild("slides", { static: true }) slides: IonSlides;
  // @ViewChild('slide', { static: true }) slide: IonSlide;

  constructor(
    private storage: Storage,
    private menu: MenuController,
    private router: Router
  ) {}

  async startApp() {
    await this.storage.clear().then(() => {
      this.storage.set("ion_did_tutorial", true)
       .then((value: boolean) =>{
         if ( value ) {
           console.log('value: ', value)
           this.router.navigateByUrl("/home")
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
    this.storage.get("ion_did_tutorial").then((res) => {
      if (res === true) {
        this.router.navigateByUrl("/home", { replaceUrl: true });
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}


// import { fadeInLeft } from 'ng-animate';

// // import { Swiper, SwiperOptions } from 'swiper';
// import { transition, trigger, useAnimation } from '@angular/animations';
// import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { IonSlide, IonSlides, MenuController } from '@ionic/angular';
// import { Storage } from '@ionic/storage';

// @Component({
//   selector: "app-welcome",
//   templateUrl: "./welcome.page.html",
//   styleUrls: ["./welcome.page.scss"],
//   // animations: [
//   //   trigger("fadeInLeft", [
//   //     transition(
//   //       "* => *",
//   //       useAnimation(fadeInLeft, {
//   //         // Set the duration to 5seconds and delay to 2seconds
//   //         params: { timing: 4, delay: 1.5 },
//   //       })
//   //     ),
//   //   ]),

//   // ],
// })
// export class WelcomePage implements OnInit {
//   title = "welcome";
//   showSkip;
//   showFab;

//   bounce;

//   slideOpts = {
//     centeredSlides: true,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//     },
//   };

//   @ViewChild("slides", { static: true }) slides: IonSlides;
//   @Output() SlideChangeStart: EventEmitter<IonSlides> = new EventEmitter<
//     IonSlides
//   >();
//   @Output() ionSlideDidChange: EventEmitter<IonSlide> = new EventEmitter<
//     IonSlide
//   >();

//   constructor(
//     private storage: Storage,
//     private menu: MenuController,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.slides.getSwiper;
//   }


//   slideChanged() {
//     this.slides.slideNext();
//   }

//   // onSlideChangeStart(event) {
//   //   if (this.slides.isEnd) {
//   //     this.showSkip;
//   //     this.storage.set("ion_did_tutorial", true);
//   //   }
//   //   this.showFab;
//   // }

//   async startApp() {
//     this.router.navigateByUrl("/home");
//   }

//   ionViewWillEnter() {
//     this.menu.enable(false);
//   }

//   ionViewDidLeave() {
//     // enable the root left menu when leaving the tutorial page
//     this.menu.enable(true);
//   }
// }
