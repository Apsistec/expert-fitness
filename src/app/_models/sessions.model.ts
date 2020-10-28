import { User } from 'src/app/_models/users.model';
import { Employee } from './employees.model';

export interface Session {
  id: string;
  dateTime: number;
  employeeId?: Employee;
  userId?: User;
  location: string;
  status: string;
  paid: boolean;
}
