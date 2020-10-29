export interface Lead {
  id: string;
  employeeId: string;
  displayName: string;
  phone?: string;
  email?: string;
  uid?: string;
  referalUserId?: string;
  campaigns?: string[];
  message?: string;
}
