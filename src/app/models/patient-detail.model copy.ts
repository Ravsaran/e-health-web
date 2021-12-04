import { UserResponse } from "./user-response.model";

export class PatientDetail {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    address: string;
    mobileNumber: string;
    user: UserResponse;
  }