import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Testimonial } from '../../_models/testimonial.model';

@Component({
  selector: 'app-testimoniall-insert',
  templateUrl: './testimoniall-insert.component.html',
  styleUrls: ['./testimoniall-insert.component.scss'],
})
export class TestimoniallInsertComponent implements OnInit {
  @ViewChild('reviewSlider') slider: IonSlides;

  slideOpts = {
    speed: 400,
    loop: true,
    slidesPerView: 1,
  };
  testimonials: Testimonial;

  constructor() {}

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
