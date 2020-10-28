export interface Location{
  locationId: string;
  locationAddress: {
    street: string;
    city: string;
    state: string;
  };
  locationPhone: string;
  locationEmail: string;
  locationManagers: string[];
  locationMemberIds: string[];
  locationEmployeeIds: string[];
  locationPhotoURL?: string;
}
