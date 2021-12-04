import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentDetailService } from 'src/app/services/appointment-detail.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css'],
  providers: [DatePipe]

})
export class ScheduleAppointmentComponent implements OnInit {
 // @ViewChild('picker') picker:ElementRef;
  //@ViewChild('picker1') picker1:ElementRef;
  appointment;
 // matDatepicker;
  patientId: string;
  doctorId: string;
  appointmentDate: any;
  appointmentTime: string;

  constructor(public datepipe: DatePipe,
    private appointmentDetailService: AppointmentDetailService,
    //private productService: ProductService,
    private router: Router,
   // private distributorService: DistributorService
  ) {
    this.appointment = new Appointment();
  }

  ngOnInit() {
   
  }

  ngAfterViewInit(){
   // this.date = this.picker.nativeElement;
    //this.time = this.picker1.nativeElement;
  }
  createAppointment() {
   // console.log(this.matDatepicker);
    //this.date = this.picker.nativeElement;
    //this.time = this.picker1.nativeElement;
    this.appointment.doctorId = this.doctorId;
    this.appointment.patientId = this.patientId;
    this.appointment.appointmentDate= this.datepipe.transform(this.appointmentDate, 'yyyy-MM-dd');
    this.appointment.appointmentTime= this.appointmentTime;


    this.appointmentDetailService.createAppointment(this.appointment)
      .subscribe((x: any) => {
       this.router.navigate(['/dashboard/appointments']);
      });
    
  }
}