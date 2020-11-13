
import * as admin from 'firebase-admin'
import * as functions from "firebase-functions";

const fc = functions.config()
const
    STRIPE_SECRET = fc.stripe.sk_test,
    SG_API_KEY = fc.sendgrid.key,
    WELCOME_EMAIL = fc.sendgrid.welcome_email,
    WEBAPP_URL = fc.app.url,
    STRIPE_WEBHOOK_SECRET = fc.stripe.wh_secret,
    db = admin.firestore(),
    auth = admin.auth()

export {
  db, auth,
  STRIPE_SECRET, STRIPE_WEBHOOK_SECRET,
  SG_API_KEY, WELCOME_EMAIL,
  WEBAPP_URL
}
