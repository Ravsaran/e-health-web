import { UserResponse } from "./user-response.model";

export class DoctorDetails {
    doctor_name: string;
    specialization: string;
    gender: string;
    email_id: string;
    address: string;
    mobile_number: string;
    user: UserResponse;
  }