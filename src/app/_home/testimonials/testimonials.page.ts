import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormBuilder, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { User } from "src/app/_models/user";
import { AuthService } from "src/app/_services/auth.service";
import { MessageService } from "src/app/_services/message.service";
import { Testimonial } from "../../_models/testimonial.model";

@Component({
  selector: "app-testimonials",
  templateUrl: "testimonials.page.html",
  styleUrls: ["testimonials.page.scss"],
})
export class TestimonialsPage {
  title = "Credibility";
  testimonials: any;
  imgDescription = "Submitted by RF$ PRO Members";
  slideOpts = {
    zoom: true,
    mousewheel: true,
    keyboard: true,
    spaceBetween: 10,
    width: 500,
    loop: true,
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
      review: ["", [Validators.required]],
    });
  }

  setTestimonial(review: string): Promise<any> {
    return this.afs
      .doc(`testimonials/${this.testimonials.uid}`)
      .update({
        review,
      })
      .then(() => {
        this.messageService.generalToast(
          "Testimonial Created",
          "Your review/testimonial has been created."
        );
      });
  }

  getTestimonial() {
    this.afs
      .collection<Testimonial>("testimonials")
      .get()
      .pipe(
        map((testimonial) => {
          this.testimonials = testimonial;
        })
      );
  }
}
