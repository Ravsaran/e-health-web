import { UserResponse } from "./user-response.model";

export class UserDetails {
  userId: string;
  professionId:string
  name: string;
  role: string;
  specialization: string;
  gender: string;
  emailId: string;
  phoneNo: string;
  address: string;
  user: UserResponse;
}
