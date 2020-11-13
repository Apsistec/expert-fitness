
export async function createPaymentIntent(amount: number ,description: string, customer: string, receipt_email:string) {
    return await stripe.paymentIntents.create({
        amount,
        description,
        currency: 'eur',
        customer,
        receipt_email
    }) as Stripe.PaymentIntent

}
