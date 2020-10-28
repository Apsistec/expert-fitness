import { Logging } from '@google-cloud/logging';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import Stripe from 'stripe';
admin.initializeApp();
const webhookSecret = functions.config().stripe.signing;
const secret = functions.config().stripe.secret;
const stripe = new Stripe(secret, {
  apiVersion: '2020-03-02',
  typescript: true,
});
const logging = new Logging({
  projectId: process.env.GCLOUD_PROJECT,
});

export const createStripeCustomer = functions.auth
  .user()
  .onCreate(async (snap: any, context: any) => {
    console.log('snap', snap);
    const customer = await stripe.customers.create({
      email: snap.email,
      name: snap.name,
    });

    const batch = admin.firestore().batch();

    const userRef = admin.firestore().collection('users').doc(snap.uid);
    const cusRef = admin.firestore().collection('customers').doc(customer.id);

    batch.update(userRef, { customerId: customer.id });
    batch.set(cusRef, { user: snap.uid });

    return batch.commit();
  });

/**
 * Data listeners
 */
function startDataListeners() {
  // Get all our products and render them to the page
  const products = document.querySelector('.products');
  const template = document.querySelector('#product');
  db.collection('products')
    .where('active', '==', true)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(async function (doc) {
        const priceSnap = await doc.ref
          .collection('prices')
          .orderBy('unit_amount')
          .get();
        if (!'content' in document.createElement('template')) {
          console.error('Your browser doesn’t support HTML template elements.');
          return;
        }

        const product = doc.data();
        const container = template.content.cloneNode(true);

        container.querySelector('h2').innerText = product.name.toUpperCase();
        container.querySelector('.description').innerText =
          product.description.toUpperCase() || '';
        // Prices dropdown
        priceSnap.docs.forEach((doc) => {
          const priceId = doc.id;
          const priceData = doc.data();
          const content = document.createTextNode(
            `${new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: priceData.currency,
            }).format((priceData.unit_amount / 100).toFixed(2))} per ${
              priceData.interval
            }`
          );
          const option = document.createElement('option');
          option.value = priceId;
          option.appendChild(content);
          container.querySelector('#price').appendChild(option);
        });

        if (product.images.length) {
          const img = container.querySelector('img');
          img.src = product.images[0];
          img.alt = product.name;
        }

        const form = container.querySelector('form');
        form.addEventListener('submit', subscribe);

        products.appendChild(container);
      });
    });
  // Get all subscriptions for the customer
  db.collection('customers')
    .doc(currentUser)
    .collection('subscriptions')
    .where('status', 'in', ['trialing', 'active'])
    .onSnapshot(async (snapshot) => {
      if (snapshot.empty) {
        // Show products
        document.querySelector('#subscribe').style.display = 'block';
        return;
      }
      document.querySelector('.subscribe').style.display = 'none';
      document.querySelector('.my-subscription').style.display = 'block';
      // In this implementation we only expect one Subscription to exist
      const subscription = snapshot.docs[0].data();
      const priceData = (await subscription.price.get()).data();
      document.querySelector(
        '.my-subscription'
      ).textContent = `You are paying ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: priceData.currency,
      }).format((priceData.unit_amount / 100).toFixed(2))} per ${
        priceData.interval
      }, giving you the role: ${await getCustomClaimRole()}. 🥳`;
    });
}

/**
 * Event listeners
 */

// Signout button
// document
//   .getElementById('signout')
//   .addEventListener('click', () => firebase.auth().signOut());

// Checkout handler
async function subscribe(event) {
  event.preventDefault();
  document.querySelectorAll('button').forEach((b) => (b.disabled = true));
  const formData = new FormData(event.target);

  const docRef = await db
    .collection('customers')
    .doc(currentUser)
    .collection('checkout_sessions')
    .add({
      price: formData.get('price'),
      allow_promotion_codes: true,
      tax_rates: taxRates,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
      metadata: {
        tax_rate: '10% sales tax exclusive',
      },
    });
  // Wait for the CheckoutSession to get attached by the extension
  docRef.onSnapshot((snap) => {
    const { error, sessionId } = snap.data();
    if (error) {
      // Show an error to your customer and then inspect your function logs.
      alert(`An error occured: ${error.message}`);
      document.querySelectorAll('button').forEach((b) => (b.disabled = false));
    }
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
      stripe.redirectToCheckout({ sessionId });
    }
  });
}

// Billing portal handler
document
  .querySelector('#billing-portal-button')
  .addEventListener('click', async (event) => {
    document.querySelectorAll('button').forEach((b) => (b.disabled = true));

    // Call billing portal function
    const functionRef = firebase
      .app()
      .functions(functionLocation)
      .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
    const { data } = await functionRef({ returnUrl: window.location.origin });
    window.location.assign(data.url);
  });

// Get custom claim role helper
// async function getCustomClaimRole() {
//   await firebase.auth().currentUser.getIdToken(true);
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
//   return decodedToken.claims.stripeRole;
// }

exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  const customer = await stripe.customers.create({
    email: user.email,
    name: user.name,
  });
  const intent = await stripe.setupIntents.create({
    customer: customer.id,
  });
  await admin.firestore().collection('stripe_customers').doc(user.uid).set({
    customer_id: customer.id,
    setup_secret: intent.client_secret,
  });
  return;
});

/**
 * When adding the payment method ID on the client,
 * this function is triggered to retrieve the payment method details.
 */
exports.addPaymentMethodDetails = functions.firestore
  .document('/stripe_customers/{userId}/payment_methods/{pushId}')
  .onCreate(async (snap, context) => {
    try {
      const paymentMethodId = snap.data().id;
      const paymentMethod = await stripe.paymentMethods.retrieve(
        paymentMethodId
      );
      await snap.ref.set(paymentMethod);
      // Create a new SetupIntent so the customer can add a new method next time.
      const intent = await stripe.setupIntents.create({
        customer: paymentMethod.customer,
      });
      await snap.ref.parent.parent.set(
        {
          setup_secret: intent.client_secret,
        },
        { merge: true }
      );
      return;
    } catch (error) {
      await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
      await reportError(error, { user: context.params.userId });
    }
  });

/**
 * When a payment document is written on the client,
 * this function is triggered to create the payment in Stripe.
 *
 * @see https://stripe.com/docs/payments/save-and-reuse#web-create-payment-intent-off-session
 */

// [START chargecustomer]

exports.createStripePayment = functions.firestore
  .document('stripe_customers/{userId}/payments/{pushId}')
  .onCreate(async (snap, context) => {
    const { amount, currency, payment_method } = snap.data();
    try {
      // Look up the Stripe customer id.
      const customer = (await snap.ref.parent.parent.get()).data().customer_id;
      // Create a charge using the pushId as the idempotency key
      // to protect against double charges.
      const idempotencyKey = context.params.pushId;
      const payment = await stripe.paymentIntents.create(
        {
          amount,
          currency,
          customer,
          payment_method,
          off_session: false,
          confirm: true,
          confirmation_method: 'manual',
        },
        { idempotencyKey }
      );
      // If the result is successful, write it back to the database.
      await snap.ref.set(payment);
    } catch (error) {
      // We want to capture errors and render them in a user-friendly way, while
      // still logging an exception with StackDriver
      console.log(error);
      await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
      await reportError(error, { user: context.params.userId });
    }
  });

// [END chargecustomer]

/**
 * When 3D Secure is performed, we need to reconfirm the payment
 * after authentication has been performed.
 *
 * @see https://stripe.com/docs/payments/accept-a-payment-synchronously#web-confirm-payment
 */
exports.confirmStripePayment = functions.firestore
  .document('stripe_customers/{userId}/payments/{pushId}')
  .onUpdate(async (change, context) => {
    if (change.after.data().status === 'requires_confirmation') {
      const payment = await stripe.paymentIntents.confirm(
        change.after.data().id
      );
      change.after.ref.set(payment);
    }
  });

/**
 * When a user deletes their account, clean up after them
 */
exports.cleanupUser = functions.auth.user().onDelete(async (user) => {
  const dbRef = admin.firestore().collection('stripe_customers');
  const customer = (await dbRef.doc(user.uid).get()).data();
  await stripe.customers.del(customer.customer_id);
  // Delete the customers payments & payment methods in firestore.
  const snapshot = await dbRef
    .doc(user.uid)
    .collection('payment_methods')
    .get();
  snapshot.forEach((snap) => snap.ref.delete());
  await dbRef.doc(user.uid).delete();
  return;
});

/**
 * To keep on top of errors, we should raise a verbose error report with Stackdriver rather
 * than simply relying on console.error. This will calculate users affected + send you email
 * alerts, if you've opted into receiving them.
 */

// [START reporterror]

function reportError(err, context = {}) {
  // This is the name of the StackDriver log stream that will receive the log
  // entry. This name can be any valid log stream name, but must contain "err"
  // in order for the error to be picked up by StackDriver Error Reporting.
  const logName = 'errors';
  const log = logging.log(logName);

  // https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/MonitoredResource
  const metadata = {
    resource: {
      type: 'cloud_function',
      labels: { function_name: process.env.FUNCTION_NAME },
    },
  };

  // https://cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorEvent
  const errorEvent = {
    message: err.stack,
    serviceContext: {
      service: process.env.FUNCTION_NAME,
      resourceType: 'cloud_function',
    },
    context: context,
  };

  // Write the error log entry
  return new Promise((resolve, reject) => {
    log.write(log.entry(metadata, errorEvent), (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
}

// [END reporterror]

/**
 * Sanitize the error message for the user.
 */
function userFacingMessage(error) {
  return error.type
    ? error.message
    : 'An error occurred, developers have been alerted';
}

// export const startPaymentIntent = functions.https.onCall(
//   async (data: { userId: any; amount: number; items: any }, context: any) => {
//     console.log('called: ', data);
//     const user = await admin
//       .firestore()
//       .collection('users')
//       .doc(data.userId)
//       .get();
//     const userData = user.data();
//     console.log('the user: ', userData);

//     if (userData) {
//       const intent = await stripe.paymentIntents.create({
//         amount: data.amount,
//         currency: 'USD',
//         customer: userData.customerId,
//       });

//       await admin
//         .firestore()
//         .collection('orders')
//         .doc(intent.id)
//         .set({
//           items: data.items,
//           status: 'Waiting for payment',
//           amount: data.amount / 100,
//           customerId: userData.customerId,
//           userId: data.userId,
//         });

//       return intent;
//     } else {
//       return false;
//     }
//   }
// );

// export const getCustomerOrders = functions.https.onCall(
//   async (data: { userId: any }, context: any) => {
//     const user = await admin
//       .firestore()
//       .collection(`users`)
//       .doc(data.userId)
//       .get();
//     const userData = user.data();
//     if (userData) {
//       return stripe.paymentIntents.list({ customer: userData.customerId });
//     } else {
//       return null;
//     }
//   }
// );
// Replace with your publishable key
// https://dashboard.stripe.com/apikeys
const STRIPE_PUBLISHABLE_KEY = 'pk_test_Rm4QbcP0thjADBses4DnzU5600K3q0XqMA';

// Replace with your tax ids
// https://dashboard.stripe.com/tax-rates
const taxRates = ['txr_1HhCwNKgDdcItEX8LGL2IceP'];

// Replace with your Firebase project config.
// const firebaseConfig = {
//   apiKey: "AIzaSyAfbc1ikd1qYtWKXXmpkqD33paprzrLq2U",
//   authDomain: "signature-color-film.firebaseapp.com",
//   databaseURL: "https://signature-color-film.firebaseio.com",
//   projectId: "signature-color-film",
//   storageBucket: "signature-color-film.appspot.com",
//   messagingSenderId: "395940070310",
//   appId: "1:395940070310:web:8632fe80aadcecec970567",
//   measurementId: "G-RXL5L60ZRD"
// };

// Replace with your cloud functions location
// const functionLocation = 'us-central';

// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

/**
 * Firebase Authentication configuration
 */
// const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
// const firebaseUiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: () => {
//       document.querySelector('#loader').style.display = 'none';
//     },
//   },
//   signInFlow: 'popup',
//   signInSuccessUrl: '/',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   credentialHelper: firebaseui.auth.CredentialHelper.NONE,
//   // Your terms of service url.
//   tosUrl: 'https://example.com/terms',
//   // Your privacy policy url.
//   privacyPolicyUrl: 'https://example.com/privacy',
// };
// firebase.auth().onAuthStateChanged((firebaseUser) => {
//   if (firebaseUser) {
//     document.querySelector('#loader').style.display = 'none';
//     document.querySelector('main').style.display = 'block';
//     currentUser = firebaseUser.uid;
//     startDataListeners();
//   } else {
//     document.querySelector('main').style.display = 'none';
//     firebaseUI.start('#firebaseui-auth-container', firebaseUiConfig);
//   }
// });
