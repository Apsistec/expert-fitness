import { User } from './users.model';

export interface PaidCustomer {
  paidCustomerId: string;
  uid: User;
  stripeId: string;
  stripeLink?: string;
  plan: string;
  subStatus: string;
  createdAt?: string;
  lastUpdatedAt?: string;
  endedAt?: string;
}
