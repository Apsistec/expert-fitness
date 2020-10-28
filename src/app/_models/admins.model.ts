import { User } from 'src/app/_models/users.model';
import { Employee } from './employees.model';
export interface Admin {
  id: string;
  permissions: string[];
  roles: string[];
  employeeId: Employee;
  uid: User;
  created: number;
}
