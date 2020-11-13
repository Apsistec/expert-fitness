import { stripe } from "./api"

export async function handleInvoice({customer, price}: any){
   await stripe.invoiceItems.create({customer, price})

  return await stripe.invoices.create({customer})

}

export async function payInvoice(invoiceId: string){
   return await stripe.invoices.pay(invoiceId)


}
