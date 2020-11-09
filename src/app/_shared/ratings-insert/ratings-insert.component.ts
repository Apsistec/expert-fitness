import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Rating } from '../../_models/ratings.model';

@Component({
  selector: 'app-ratings-insert',
  templateUrl: './ratings-insert.component.html',
  styleUrls: ['./ratings-insert.component.scss'],
})
export class RatingsInsertComponent implements OnInit {
  @ViewChild('ratingsSlider') slider: IonSlides;

  slideOpts = {
    speed: 400,
    loop: true,
    slidesPerView: 3,
  };
  ratings: Rating;

  constructor() {}

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
