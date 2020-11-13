import * as sgMail from "@sendgrid/mail";
//import { config } from "dotenv";
import { SG_API_KEY, WELCOME_EMAIL } from "./firebase";
import * as functions from "firebase-functions";


sgMail.setApiKey(SG_API_KEY)

export const welcomeEmail = functions.auth.user().onCreate( user => {
    console.log(SG_API_KEY)
    const msg = {
        to: user.email,
        from: "medschooljourney1@gmail.com",
        templateId: WELCOME_EMAIL,
        dynamic_template_data: {
            name: user.displayName,
            subject: 'Welcome to MedSchoolJourney'
        }
    }

    console.log('Mail here');

    return sgMail.send(msg)
})
