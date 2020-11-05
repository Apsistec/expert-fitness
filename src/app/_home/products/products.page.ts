import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/_services/auth.service';
import { map, take } from 'rxjs/operators';
import { User } from '../../_models/users.model';
import { environment } from '../../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessageService } from 'src/app/_services/message.service';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit {

  user: User;
  role;
  signedIn;
  products;
  subscriptions;

  constructor(
    private db: AngularFirestore,
    private fun: AngularFireFunctions,
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.user = this.authService.authState$.pipe( take ( 1 ) );
    if ( this.user && this.user !== null ) {
      this.signedIn = true;
      this.startDataListeners();
    } else {
      this.signedIn = false;
    }
  }

  startDataListeners() {
    //   // Get all our products and render them to the page
    //   const products = document.querySelector('.products');
    //   const template = document.querySelector('#product');
    // this.db.collection<products>
    //   .where('active', '==', true)
    //   .get()
    //   .then(function (querySnapshot) {
    //     querySnapshot.forEach(async function (doc) {
    //       const priceSnap = await doc.ref
    //         .collection('prices')
    //         .orderBy('unit_amount')
    //         .get();
    //       if (!'content' in document.createElement('template')) {
    //         console.error('Your browser doesn’t support HTML template elements.');
    //         return;
    //       }
    this.products = this.db.collection<any>( 'products', ref => ref.where( 'active', '==', true ) )
      .get();
        // if (!'content' in document.createElement('template')) {
        //   console.error('Your browser doesn’t support HTML template elements.');
        //   return;
  }

    //         const product = doc.data();
    //         const container = template.content.cloneNode(true);
    //         container.querySelector('h2').innerText = product.name.toUpperCase();
    //         container.querySelector('.description').innerText =
    //           product.description.toUpperCase() || '';
    //         // Prices dropdown
    //         priceSnap.docs.forEach((doc) => {
    //           const priceId = doc.id;
    //           const priceData = doc.data();
    //           const content = document.createTextNode(
    //             `${new Intl.NumberFormat('en-US', {
    //               style: 'currency',
    //               currency: priceData.currency,
    //             }).format((priceData.unit_amount / 100).toFixed(2))} per ${
    //               priceData.interval
    //             }`
    //           );
    //           const option = document.createElement('option');
    //           option.value = priceId;
    //           option.appendChild(content);
    //           container.querySelector('#price').appendChild(option);
    //         });
    //         if (product.images.length) {
    //           const img = container.querySelector('img');
    //           img.src = product.images[0];
    //           img.alt = product.name;
    //         }
    //         const form = container.querySelector('form');
    //         form.addEventListener('submit', subscribe);
    //         products.appendChild(container);
    //       });
    //     });

  // Get all subscriptions for the customer
  getSubscriptions() {
    const snapshot = this.db.collection( 'customers' )
      .doc( this.user.uid )
        .collection(
          'subscriptions', ref => ref.where(
            'status', 'in', ['trialing', 'active']
          )
        );
    if ( snapshot == null ) {
      // Show products
      this.products = true;
    } else {
      // In this implementation we only expect one Subscription to exist
      this.subscriptions = snapshot.doc[0].data();
      const priceData = this.subscriptions.price.get().data();
      return;
    }
  }


  // Checkout handler
  async subscribe( event ) {
    event.preventDefault();
    const formData = new FormData( event.target );

    const docRef = await this.db
      .collection( 'customers' )
      .doc( this.user.uid )
      .collection( 'checkout_sessions' )
      .add({
        price: formData.get( 'price' ),
        allow_promotion_codes: true,
        tax_rates: environment.taxRates,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        metadata: {
          tax_rate: '10% sales tax exclusive',
        },
      });
    // Wait for the CheckoutSession to get attached by the extension
    docRef.onSnapshot( async ( snap ) => {
      const { error, sessionId } = snap.data();
      // Show an error to your customer and then inspect your function logs.
      if ( error ) {
        this.messageService.errorAlert( error );
      }
      // We have a session, let's redirect to Checkout
      // Init Stripe
      if ( sessionId ) {
        const stripe = await loadStripe( environment.stripePubKey );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  }

  // Billing portal handler
  async openBillingPortal() {

    // Call billing portal function
    const functionRef = this.fun.httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
    const url = await functionRef({ returnUrl: window.location.origin });
    return url;
  }

  // Get custom claim role helper
  get customerRole() {
    this.authService.user$.pipe(
      map( user => {
        const customerRole = user.role;
      })
    );
    return this.customerRole;
  }

}
