import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPatientComponent } from '../admin/add-patient/add-patient.component';
import { AddDoctorComponent } from '../admin/add-doctor/add-doctor.component';
import { ViewPatientsComponent } from '../admin/view-patients/view-patients.component';
import { ViewDoctorsComponent } from '../admin/view-doctors/view-doctors.component';
import { ViewProfileComponent } from '../profile/view-profile/view-profile.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ScheduleAppointmentComponent } from '../patient-dashboard/schedule-appointment/schedule-appointment.component';
//import { NgxMatDatetimePickerModule, NgxMatTimepickerModule,NgxMatNativeDateModule } from 'ngx-mat-datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser'
import { ViewAppointmentsComponent } from '../patient-dashboard/view-appointments/view-appointments.component';
import { AddPrescriptionComponent } from '../doctor-dashboard/add-prescription/add-prescription.component';
import { ViewNotificationsComponent } from './notifications/view-notifications.component';
import { ViewDiagnosticsComponent } from '../patient-dashboard/view-diagnostics/view-diagnostics.component';
import { AddDiagnosticComponent } from '../doctor-dashboard/add-diagnostics/add-diagnostics.component';
@NgModule({
  declarations: [
    ViewDoctorsComponent,
    AddDoctorComponent,
    AddPatientComponent,
    ViewPatientsComponent,
    ViewProfileComponent,
    DashboardComponent,
    ScheduleAppointmentComponent,
    ViewAppointmentsComponent,
    AddPrescriptionComponent,
    ViewNotificationsComponent,
    ViewDiagnosticsComponent,
    AddDiagnosticComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    SharedModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
   // NgxMatDatetimePickerModule,
    MatDatepickerModule,
    BrowserModule
    //NgxMatTimepickerModule,
    //NgxMatNativeDateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
