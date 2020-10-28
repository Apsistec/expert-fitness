import { Employee } from './employees.model';
export interface User {
  uid: string;
  name: string;
  role: string;
  permissions: string[];
  created: string;
  emailVerified: boolean;
  email: string;
  photoURL?: string;
  phoneNumber?: number;
  providerId?: string;
  lastLoginAt?: string;
  lastRefreshAt?: string;
  passwordHash?: string;
  passwordUpdatedAt?: string;
  locations?: string[];
  ratings?: string[];
  hashTags?: string[];
  about?: string;
  whereFrom?: string;
  friends: User;
  trainers: Employee;
}
