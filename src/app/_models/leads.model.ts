export interface Lead {
  id: string;
  employeeId: string;
  name: string;
  phone?: string;
  email?: string;
  uid?: string;
  referalUserId?: string;
  campaigns?: string[];
  message?: string;
}
