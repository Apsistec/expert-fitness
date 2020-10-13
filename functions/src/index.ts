import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import Stripe from 'stripe';

admin.initializeApp();
const endpointSecret = functions.config().stripe.signing;

const secret = functions.config().stripe.secret;
const stripe = new Stripe(secret, {
  apiVersion: '2020-03-02',
  typescript: true
});

export const createStripeCustomer = functions.auth.user().onCreate(async (snap, context: any) => {
  console.log('snap: ', snap);
  const customer = await stripe.customers.create({
    email: snap.email
  });

  const batch = admin.firestore().batch();

  const userRef = admin.firestore().collection('users').doc(snap.uid);
  const cusRef = admin.firestore().collection('customers').doc(customer.id);

  batch.update(userRef, { customerId: customer.id });
  batch.set(cusRef, { user: snap.uid });

  return batch.commit();
});

export const startPaymentIntent = functions.https.onCall(
  async(data: { userId: any; amount: number; items: any; }, context: any) => {
    console.log('called: ', data);
    const user = await admin.firestore().collection('users').doc(data.userId).get();
    const userData = user.data();
    console.log('the user: ', userData);

    if (userData) {
      const intent = await stripe.paymentIntents.create({
        amount: data.amount,
        currency: 'USD',
        customer: userData.customerId
      });

      await admin.firestore().collection('orders').doc(intent.id).set({
        items: data.items,
        status: 'Waiting for payment',
        amount: data.amount / 100,
        customerId: userData.customerId,
        userId: data.userId
      });

      return intent;
    } else {
      return false;
    }
  }
);

export const webhook = functions.https.onRequest(async (req: { headers: { [x: string]: string; }; rawBody: any; }, res: { status: (arg0: number) => { (): any; new(): any; end: { (): void; new(): any; }; }; sendStatus: (arg0: number) => void; }) => {
  const sig = req.headers['stripe-signature'] || '';

  let event = null;

  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      endpointSecret
    );
  } catch (err) {
    // invalid signature
    res.status(400).end();
    return;
  }

  let intent: any = null;
  let status = 'Succeeded';

  switch (event['type']) {
    case 'payment_intent.succeeded':
      intent = event.data.object;
      status = 'Payment Succeded';
      break;
    case 'payment_intent.payment_failed':
      intent = event.data.object;
      status = 'Payment failed';
      break;
  }

  if (intent) {
    try {
      const invoiceUrl = intent.charges.data[0].receipt_url;
      console.log('invoice: ', invoiceUrl);
      await admin
        .firestore()
        .collection('orders')
        .doc(intent.id)
        .update({
          status,
          invoice: invoiceUrl
        });
    } catch (e) {
      console.log('Error while getting invoice: ', e);
    }
  }

  res.sendStatus(200);
});

export const getCustomerOrders = functions.https.onCall(
  async (data: { userId: any; }, context: any) => {
    const user = await admin
      .firestore()
      .collection(`users`)
      .doc(data.userId)
      .get();
    const userData = user.data();
    if (userData) {
      return stripe.paymentIntents.list({ customer: userData.customerId });
    } else {
      return null;
    }
  }
);
