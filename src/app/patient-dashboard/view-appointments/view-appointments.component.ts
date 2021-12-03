import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css'],
})
export class ViewAppointmentsComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(
    private doctorService: DoctorService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.doctorService.fetchAllDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
    });
  }

  navigate(): void {
    this.router.navigate(['/dashboard/scheduleAppointment']);
  }
}
