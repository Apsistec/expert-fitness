import { PaidCustomer } from './paid-customers.model';
import { Employee } from './employees.model';

export interface GymLocation{
  gymLocationId: string;
  locationName: string;
  locationAddress: {
    street: string;
    city: string;
    state: string;
  };
  locationPhone: string;
  locationEmail: string;
  managerId: Employee[];
  customerId: PaidCustomer[];
  employeeId: Employee[];
  locationPhotosURL?: string[];
}
