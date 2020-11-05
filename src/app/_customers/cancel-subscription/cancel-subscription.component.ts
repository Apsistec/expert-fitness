import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from '../../_services/auth.service';
import { StripeService } from '../../_services/stripe.service';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.scss']
})
export class CancelSubscriptionComponent implements OnInit {
  // confirmation;

  constructor(
    public functions: AngularFireFunctions,
    public load: LoadingController,
    public modalController: ModalController,
    public auth: AuthService,
    public stripeService: StripeService
  ) {}
  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
