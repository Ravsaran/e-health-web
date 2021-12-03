import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details.model';
import { UserResponse } from 'src/app/models/user-response.model';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { ManageUserService } from 'src/app/services/manage-user.service';
import { PatientDetailService } from 'src/app/services/patient-detail.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  user: UserDetails;
  userResponse: UserResponse;

  constructor(
    private patientService: PatientDetailService,
    private doctorService: DoctorService,
    private authService: AuthService
  ) {
    this.fetchUser();
  }

  fetchUser() {
    this.userResponse = this.authService.fetchFromSessionStorage();
    if(this.user.role.toLowerCase().includes('patient')){

    }
    if(this.user.role.toLowerCase().includes('doctor')){

    }
    if(this.user.role.toLowerCase().includes('admin')){

    }
  }

  ngOnInit(): void {}
}
