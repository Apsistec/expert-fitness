// export interface User1 {
//     uid: string ;
//     email: string ;
//     displayName: string ;
//     photoURL: string ;
//     emailVerified: boolean ;
//     roles: string[] ;
//     permissions: string[] ;
//     subStatus: string ;
//     created: string ;
//     gold?: boolean ;
//     silver?: boolean ;
//     bronze?: boolean ;
// }
export interface User {
  displayName: string;
  uid: string;
  photoURL: string;
  role: string;
  permissions: string[];
  phoneNumber?: number;
  email: string;
  created: string;
  emailVerified: boolean ;
  providerId: string;
  lastLoginAt?: string;
  stripeId?: string;
  stripeLink?: string;
  plan?: string;
  subStatus?: string;
  subId?: string;
  gold?: boolean;
  silver?: boolean;
  bronze?: boolean;
  lastRefreshAt?: string ;
  passwordHash?: string ;
  validSince?: string ;
  passwordUpdatedAt?: string ;
}
