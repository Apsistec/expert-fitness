export interface Member {
  id: string;
  stripeId: string;
  stripeLink?: string;
  plan: string;
  subStatus: string;
  subId: string;
  joinDate?: string;
  uid: string;
}
