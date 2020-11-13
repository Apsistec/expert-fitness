
import * as admin from "firebase-admin";

admin.initializeApp();

export { api } from './api'
export { welcomeEmail } from './mailService'
export { purchaseCompleted, googleLogin } from './analytics'
