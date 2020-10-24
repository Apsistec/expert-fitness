import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { MessageService } from 'src/app/_services/message.service';
import { Testimonial, Testimonials } from '../../_models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: 'testimonials.page.html',
  styleUrls: ['testimonials.page.scss'],
})
export class TestimonialsPage {
  imgDescription = 'Submitted by RF$ PRO Members';
  testimonials: Testimonial[] = [ ];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      150: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 15
      }
    }
  };
  reviewForm;
  user: User;

  constructor(
    public modalController: ModalController,
    private afs: AngularFirestore,
    private authService: AuthService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.authService.user$.pipe(map((user) => (this.user = user)));

    this.reviewForm = this.fb.group({
      review: ['', [Validators.required]],
    });
  }

  // setTestimonial(review: string): Promise<any> {
  //   // return this.afs
  //   //   .doc(`testimonials/${this.testimonials.uid}`)
  //   //   .update({
  //   //     review,
  //   //   })
  //   //   .then(() => {
  //   //     this.messageService.generalToast(
  //   //       'Testimonial Created',
  //   //       'Your review/testimonial has been created.'
  //   //     );
  //   //   });
  // }

  // getTestimonial() {
  //   // this.afs
  //   //   .collection<Testimonial>('testimonials')
  //   //   .get()
  //   //   .pipe(
  //   //     map((testimonial) => {
  //   //       this.testimonials = testimonial;
  //   //     })
  //   //   );


  // }
}
