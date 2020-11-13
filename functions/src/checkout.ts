import Stripe from 'stripe';
//import Stripe from 'stripe'
import {stripe} from './api'

export async function createStripeCheckout(body: any) {
  console.log(body)
    const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(body)
    console.log(session)
    return session
}
