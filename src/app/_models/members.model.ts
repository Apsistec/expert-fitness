export interface Customer {
  id: string;
  stripeId: string;
  stripeLink?: string;
  plan: string;
  subStatus: string;
  subId: string;
  joinDate?: string;
  uid: string;
}
