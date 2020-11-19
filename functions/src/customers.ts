import { UserRecord } from 'firebase-functions/lib/providers/auth';
import * as Stripe from '@stripe/stripe-js';
import { stripe } from './api';
import { db } from './firebase';

export async function getOrCreateCustomer(uid: string, source?: any) {
  console.log('userid?', uid);
  const userSnap shot = await db.doc(`users/${uid}`).get();
  const user = userSnapshot.data();
  console.log(user);
  // StripeCustomer ! exists
  if (!user?.cus_id) {
    const customer = await stripe.customers.create({
      name: user?.displayName,
      email: user?.email,
      metadata: {
        firebaseUID: uid,
      },
    });

    await userSnapshot.ref.update({ cus_id: customer.id });
    console.log('Customer created');

    return customer;
  } else {
    console.log('Customer exists');

    return (await stripe.customers.retrieve(user?.cus_id)) as StripeCustomer;
  }
}

export async function createSetupIntent(user: UserRecord) {
  const customer = await getOrCreateCustomer(user.uid);

  return stripe.setupIntents.create({
    customer: customer.id,
    usage: 'on_session',
  });
}

export async function confirmSetupIntent(body: any) {
  return await stripe.setupIntents.confirm(body.si_id, {
    payment_method: body.payment_method,
  });
}

export async function listPaymentMethods(user: UserRecord) {
  const { id } = await getOrCreateCustomer(user.uid);
  const { data } = await stripe.paymentMethods.list({
    customer: id,
    type: 'card',
  });
  return data as Stripe.PaymentMethod[];
}
