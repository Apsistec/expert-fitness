import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/_services/auth.service';
import { map, take } from 'rxjs/operators';
import { User } from '../../_models/users.model';
import { environment } from '../../../environments/environment';
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
  subscriptions;
  products: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore,
    private fun: AngularFireFunctions,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.user = this.authService.authState$.pipe( take ( 1 ) );
    if ( this.user && this.user !== null ) {
      this.signedIn = true;
      this.getSubscriptions();
    } else {
      this.signedIn = false;
    }
  }

  // Get all our products and render them to the page
  getProducts() {
    this.products = this.db.collection( 'products', ref => ref.where( 'active', '==', true ));
    this.products
      .get();
      // .forEach( async ( prod ) => {
      //   await this.db.collection('prices', ref => ref.orderBy('unit_amount'));
      // });
    return this.products;
    }

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
      this.getProducts();
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
