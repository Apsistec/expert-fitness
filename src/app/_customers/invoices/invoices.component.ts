import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StripeService } from '../../_services/stripe.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public stripeService: StripeService
  ) {}

  ngOnInit() {
    // this.auth.checkInvoices();
  }



  async dismissModal() {
    this.modalCtrl.dismiss();
  }
}
