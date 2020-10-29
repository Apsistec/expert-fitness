import { Employee } from './employees.model';
export interface User {
  uid: string;
  displayName: string;
  role: string;
  permissions: string[];
  email: string;
  photoURL?: string;
  phoneNumber?: number;
  locations?: string[];
  ratings?: string[];
  hashTags?: string[];
  about?: string;
  whereFrom?: string;
  friends?: User;
  trainers?: Employee;
  subStatus?: string;
  emailVerified?: boolean;
  plan?: string;
  subId?: string;
}
