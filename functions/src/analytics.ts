
import * as functions from "firebase-functions";

export const purchaseCompleted = functions.analytics.event('purchase').onLog((e:any) => {
  console.log(e)
})

export const googleLogin = functions.analytics.event('login').onLog((e:any)=> {
  console.log(e)
})
