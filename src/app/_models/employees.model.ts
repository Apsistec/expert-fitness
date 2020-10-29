import { User } from 'src/app/_models/users.model';
export interface Employee {
  displayName: string;
  Id: string;
  status: string;
  hireDate: number;
  revenue?: number;
  positions?: string[];
  appointments?: string[];
  clients?: string[];
  payRate?: number;
  locations?: string[];
  userId: User;
  startDate: number;
}
