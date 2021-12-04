import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDetails } from 'src/app/models/doctor-details.model';
import { UserResponse } from 'src/app/models/user-response.model';
import { User } from 'src/app/models/user.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent implements OnInit {
  doctor: DoctorDetails;

  doctor_name: string;
  specialization: string;
  gender: string;
  email_id: string;
  address: string;
  mobile_number: string;
  user: UserResponse;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {
    this.doctor = new DoctorDetails();
  }

  ngOnInit(): void {
  }

  saveDoctor() {
    this.doctor.doctor_name = this.doctor_name;
    this.doctor.specialization= this.specialization;
    this.doctor.gender= this.gender;
    this.doctor.email_id = this.email_id;
    this.doctor.address = this.address;
    this.doctor.mobile_number = this.mobile_number;
    
    let userdata = new User();
    userdata.role = "doctor";
    userdata.email = this.email_id;
    userdata.password = "doctor";

    

    this.doctorService.createUser(userdata)
      .subscribe((x: any) => {
        this.doctor.user = x;
        this.doctorService.addDoctor(this.doctor).subscribe((x) => {
        this.router.navigate(['/dashboard/doctors']);
      });
      });
    
  }
  }

