import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { User } from 'src/app/models/user.model';
import { PatientDetailService } from 'src/app/services/patient-detail.service';

@Component({
  selector: 'app-patient-order',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  patient;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  address: string;
  mobileNumber: string;
  user : User;

  constructor(
    private patientDetailService: PatientDetailService,
    private router: Router,
  ) {
    this.patient = new Patient();
  }

  ngOnInit() {
  }

  placeOrder() {
    this.patient.firstName = this.firstName;
    this.patient.lastName= this.lastName;
    this.patient.gender= this.gender;
    this.patient.email = this.email;
    this.patient.address = this.address;
    this.patient.mobileNumber = this.mobileNumber;
    
    let userdata = new User();
    userdata.role = "patient";
    userdata.email = this.email;
    userdata.password = "patient";

    this.patientDetailService.createUser(userdata)
      .subscribe((x: any) => {
        this.patient.user = x;
        this.patientDetailService.createPatients(this.patient).subscribe((x) => {
        this.router.navigate(['/dashboard/patients']);
      });
      });
    
  }
}