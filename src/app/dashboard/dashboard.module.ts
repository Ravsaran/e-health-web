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

@NgModule({
  declarations: [
    ViewDoctorsComponent,
    AddDoctorComponent,
    AddPatientComponent,
    ViewPatientsComponent,
    ViewProfileComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
