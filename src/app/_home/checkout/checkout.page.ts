import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';
import { CartService } from '../../_services/cart.service';
import { ProductService } from '../../_services/product.service';

declare var Stripe;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss']
})
export class CheckoutPage implements OnInit {
  dataForm: FormGroup;
  cart = [];
  user: User;
  stripe;
  card;
  cardErrors;

  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;

  constructor(
    private loadingController: LoadingController,
    private fb: FormBuilder,
    private authService: AuthService,
    private productService: ProductService,
    private toastController: ToastController,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      this.cart = res;
    });

    this.dataForm = this.fb.group({
      name: ['Simon Grimm', Validators.required],
      zip: ['48165', Validators.required],
      street: ['Klinkkampweg 30', Validators.required],
      city: ['Muenster', Validators.required],
      country: ['DE', Validators.required]
    });

    this.stripe = Stripe(environment.stripe_key);
    const elements = this.stripe.elements();

    this.card = elements.create('card');
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
      console.log('error: ', error);
      this.cardErrors = error && error.message;
    });
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  async buyNow() {
    const stripeData = {
      payment_method_data: {
        billing_details: {
          name: this.dataForm.get('name').value,
          address: {
            line1: this.dataForm.get('street').value,
            city: this.dataForm.get('city').value,
            postal_code: this.dataForm.get('zip').value,
            country: this.dataForm.get('country').value
          },
          email: this.user.email
        }
      },
      receipt_email: this.user.email
    };

    const items = this.cart.map(item => {
      return { id: item.id, amount: item.amount };
    });

    const loading = await this.loadingController.create();
    await loading.present();

    (await this.productService
      .startPaymentIntent(this.getTotal() * 100, items))
      .subscribe(async paymentIntent => {
        console.log('my payment intent: ', paymentIntent);
        const secret = paymentIntent.client_secret;

        const { result, err } = await this.stripe.handleCardPayment(
          secret,
          this.card,
          stripeData
        );

        console.log('result: ', result);

        if (err) {
          await loading.dismiss();
          const toast = await this.toastController.create({
            message: `Couldn't process payment, please try again later`,
            duration: 3000
          });
          await toast.present();
        } else {
          await loading.dismiss();
          const toast = await this.toastController.create({
            message: 'Thanks for your order',
            duration: 3000
          });
          await toast.present();
          this.router.navigateByUrl('/members/ list');
        }
      }, async err => {
        await loading.dismiss();
        const toast = await this.toastController.create({
          message: `Couldn't process payment, please try again later`,
          duration: 3000
        });
        await toast.present();
      });
  }
}
