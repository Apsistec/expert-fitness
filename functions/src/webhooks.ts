import {stripe} from './api'
import {Stripe} from 'stripe'
import { STRIPE_WEBHOOK_SECRET } from "./firebase";



class StripeWebHook {

  private type: string
  constructor(type: string){
    this.type = type
  }

  async runHandler(data: any) {

    switch (this.type) {

      case 'customer.created':
        console.log(data)
        break

      case 'setup_intent.created':
        console.log(data)
        break

      case 'payment_intent.created':
        console.log(data)
        break

      case 'payment_intent.succeeded':
        console.log(data)
        break

      case 'setup_intent.succeeded':
        console.log(data)
        break

      case 'charge.succeeded':
        console.log(data)
        break

      case 'payment_method.attached':
        console.log(data)
        break

    }
    return
  }
}


export const handleStripeWebhook = async(req: any, res: any) => {
    const sig: string = req.headers['stripe-signature'] || ''
    const rawBody: Buffer = req['rawBody'] || ''
    const {type, data}: Stripe.Event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET)
    const webhook = new StripeWebHook(type)
    console.log('Webhook:',type ,'activated');
    try {
        await webhook.runHandler(data.object)
        res.status(200).send()
    } catch (error) { res.status(400).send('hmmmmm') }
}
