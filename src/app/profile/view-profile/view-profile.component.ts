import { Component, OnInit } from '@angular/core';
import { AdminDetails } from 'src/app/models/admin-details.model';
import { DoctorDetails } from 'src/app/models/doctor-details.model';
import { PatientDetail } from 'src/app/models/patient-detail.model copy';
import { UserDetails } from 'src/app/models/user-details.model';
import { UserResponse } from 'src/app/models/user-response.model';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientDetailService } from 'src/app/services/patient-detail.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  user: UserDetails;
  userResponse;

  constructor(
    private patientService: PatientDetailService,
    private doctorService: DoctorService,
    private authService: AuthService,
    private adminService: AdminService
  ) {
    this.fetchUser();
    this.userResponse = new UserResponse();
    this.user = new UserDetails();
  }

  fetchUser() {
    this.userResponse = this.authService.fetchFromSessionStorage();
    if(this.userResponse?.role.toLowerCase().includes('patient')){
      this.patientService.fetchPatient(this.userResponse.id).subscribe((response: PatientDetail) => {
        this.createUser(response.id,
          response.firstName +" " + response.lastName,
          'Patient',
          'Patient',
          response.gender,
          response.email,
          response.mobileNumber,
          response.address,
          this.userResponse);
          //this.saveUserDetailsSessionStorage(response);
          this.saveUserDetailsSessionStorage(this.user);
      });
      
    }
    if(this.userResponse?.role.toLowerCase().includes('doctor')){
      this.doctorService.fetchDoctor(this.userResponse.id).subscribe((response: DoctorDetails) => {
        this.createUser(response.id,
          response.doctor_name,
          'Doctor',
          response.specialization,
          response.gender,
          response.email_id,
          response.mobile_number,
          response.address,
          this.userResponse);
         this.saveUserDetailsSessionStorage(this.user);
      });
    }
    if(this.userResponse?.role.toLowerCase().includes('admin')){
      this.adminService.fetchAdmin(this.userResponse.id).subscribe((response: AdminDetails) => {
        this.createUser(response.id,
          response.admin_name,
          'Admin',
          'Admin',
          response.gender,
          response.email_id,
          response.mobile_number,
          response.address,
          this.userResponse);
          this.saveUserDetailsSessionStorage(this.user);
     });
  }
  
  }
  saveUserDetailsSessionStorage(user: UserDetails) {
    sessionStorage.setItem('loggeduser', JSON.stringify(user));
  }

  fetchFromSessionStorage(): UserDetails {
    return JSON.parse(sessionStorage.getItem('loggeduser'));
  }


  createUser(id: string,
    name: string,
    role: string,
    specialization: string,
    gender: string,
    emailId: string,
    phoneNo: string,
    address: string,
    user: UserResponse): void{
    this.user.name = name;
    this.user.role = role;
    this.user.specialization = specialization;
    this.user.gender = gender;
    this.user.emailId = emailId;
    this.user.phoneNo = phoneNo;
    this.user.address = address;
    this.user.professionId=id;
   // this.user.userId= user.id.toString();
    //this.user.user = user;
  }

  ngOnInit(): void {}
}
