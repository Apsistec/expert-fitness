import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-header></app-header>
    <ion-content
      fullscreen
      style="--background: right/cover no-repeat url('../../../assets/images/body.jpg')"
    >
      <ion-grid>
        <ion-row class="ion-margin">
          <ion-col size="auto">
            <ion-card color="light" class="ion-padding ion-text-center">
              <ion-card-header>
                <ion-card-title> Error 404 Not Found </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Oops, it looks like you have reached an <b>unknown</b> state of
                Zen!
              </ion-card-content>
              <ion-button class="ion-text-capitalize" (click)="goBack()"
                >Go Back</ion-button
              >
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
})
export class UnknownPage {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
}
