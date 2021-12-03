import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model.';
import { User } from 'src/app/models/user.model';
import { AppointmentDetailService } from 'src/app/services/appointment-detail.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css'],
})
export class ScheduleAppointmentComponent implements OnInit {
  appointment;
  patientId: string;
  doctorId: string;
  appointmentDate: string;

  constructor(
    private appointmentDetailService: AppointmentDetailService,
    //private productService: ProductService,
    private router: Router,
   // private distributorService: DistributorService
  ) {
    this.appointment = new Appointment();
  }

  ngOnInit() {
    // this.distributorService
    //   .fetchAllDistributors()
    //   .subscribe((response: Distributor[]) => {
    //     this.distributor = response;
    //     console.log(this.distributor);
    //   });
    // this.productService.fetchAllProducts().subscribe((response: Product[]) => {
    //   this.products = response;
    // });
  }

  createAppointment() {
    this.appointment.doctorId = this.doctorId;
    this.appointment.patientId = this.patientId;
    this.appointment.appointmentDate= this.appointmentDate;


    this.appointmentDetailService.createAppointment(this.appointment)
      .subscribe((x: any) => {
        //this.userdata.role = "patient";
       let k =x;
       console.log(k);
      });
    
  }
}