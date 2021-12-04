import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentResponse } from 'src/app/models/appointment-response.model';
import { UserResponse } from 'src/app/models/user-response.model';
import { AppointmentDetailService } from 'src/app/services/appointment-detail.service';
import { AuthService } from 'src/app/services/auth.service';
import { PatientDetailService } from 'src/app/services/patient-detail.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css'],
})
export class ViewAppointmentsComponent implements OnInit {
  appointment: AppointmentResponse[] = [];
  userResponse: UserResponse;


  constructor(
    private appointmentService: AppointmentDetailService,
    private patientService: PatientDetailService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userResponse = this.authService.fetchFromSessionStorage();
    this.patientService.fetchPatient(this.userResponse.id).subscribe((response) => {
      this.appointmentService.fetchAllAppointments(response.id).subscribe((data: AppointmentResponse[]) => {
        this.appointment = data;
      });
    });
  }

  navigate(): void {
    this.router.navigate(['/dashboard/scheduleAppointment']);
  }
}
