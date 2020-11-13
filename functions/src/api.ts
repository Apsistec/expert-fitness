
import * as cors from 'cors'
import * as express from 'express'
import * as functions from "firebase-functions";

import { createStripeCheckout } from "./checkout";
import { handleInvoice, payInvoice } from "./invoices";
import { createPaymentIntent } from "./payments";
import { handleStripeWebhook } from "./webhooks";
import { createSetupIntent, confirmSetupIntent } from './customers';

import { UserRecord } from 'firebase-functions/lib/providers/auth';

const app = express()
export const api = functions.https.onRequest(app)

export const stripe = new Stripe(STRIPE_SECRET, { apiVersion: '2020-08-27' })

app.use(cors({ origin: true }))
app.use(express.urlencoded({ extended: true }))

// Parse request body to raw for stripe webhook endpoint
app.use(express.json({
    verify: (req: any, res: any, buffer: any) =>
        req['rawBody'] = (req.path === 'hooks') ? buffer : undefined
}))

let user: UserRecord
let isAdmin: boolean
async function decodeJWT(req: any, res: any ,next: express.NextFunction) {

 // run this with desired uid to set custom claims
/*
  admin.auth().setCustomUserClaims(${UID}, {role: 'admin'}).then(claims => console.log(`CUSTOM CLAIMS ADDED: ${claims}`)).catch(err => console.error(err))
*/

  if (req.headers?.authorization?.startsWith('Bearer ')){
        const idToken = req.headers.authorization.split('Bearer ')[1]
        try {
            const { uid } = await auth.verifyIdToken(idToken)
            user = await auth.getUser(uid)
            isAdmin = user?.customClaims?.role === 'admin'
        } catch (error) {
            res.status(401).send({'Authorization Middleware': 401})
        }
    }else res.status(400).send({'No Bearer Authorization header found': 400})
    next()
}

app.use(decodeJWT)

// HealthCheck
app.get('/', async (req, res) => {
  isAdmin ?  res.status(200).json({ response: 'OK'}) : res.status(401).send('Unauthorized')})

function runAsync (callback: Function) {
    return (req: express.Request, res: express.Response , next?: express.NextFunction) => {
        callback(req, res, next).catch(next)
    }
}

// Returns Stripe.Checkout.Session
app.post('/checkouts',
    runAsync( async({ body }: express.Request, res: express.Response) => {
        res.send(
            await createStripeCheckout(body)
        )
    })
)

// Creates and returns Stripe.PaymentIntent
app.post('/payments',
    runAsync( async( {body} : express.Request, res: express.Response) => {
       res.send(await createPaymentIntent(body.amount, body.description, body.customer, body.receipt_email))
    })
)

app.post('/wallet',
    runAsync( async (req: any, res: express.Response) => {
        res.send(
            await createSetupIntent(user)
        )
    })
)
app.post('/wallet/confirm',
    runAsync( async (req: any, res: express.Response) => {
        res.send(
            await confirmSetupIntent(req.body)
        )
    })
)


/*app.get('/wallet',
    runAsync( async (req: express.Request, res: express.Response) => {
        res.send(
            await listPaymentMethods(user)
        )
    })
)
*/

app.post('/hooks', express.raw({type: 'application/json'}),
        runAsync( handleStripeWebhook )
)

app.post('/invoice',
    runAsync( async (req: express.Request, res: express.Response) => {
      console.log("EDW OXIIII??")
        res.send(
            await handleInvoice(req.body)
        )
    })
)
app.post('/invoice/pay',
    runAsync( async (req: any, res: express.Response) => {
      console.log("EDW OXIIII??sadasdasd",req.body.invoiceId)
        res.send(
            await payInvoice(req.body.invoiceId)
        )
    })
)
