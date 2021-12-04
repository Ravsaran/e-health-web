import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientComponent } from '../admin/add-patient/add-patient.component';
import { AddDoctorComponent } from '../admin/add-doctor/add-doctor.component';
import { ViewPatientsComponent } from '../admin/view-patients/view-patients.component';
import { ViewDoctorsComponent } from '../admin/view-doctors/view-doctors.component';
import { ViewProfileComponent } from '../profile/view-profile/view-profile.component';
import { DashboardComponent } from './dashboard.component';
import { ViewAppointmentsComponent } from '../patient-dashboard/view-appointments/view-appointments.component';
import { ScheduleAppointmentComponent } from '../patient-dashboard/schedule-appointment/schedule-appointment.component';
import { AddPrescriptionComponent } from '../doctor-dashboard/add-prescription/add-prescription.component';
import { ViewNotificationsComponent } from './notifications/view-notifications.component';
import { ViewDiagnosticsComponent } from '../patient-dashboard/view-diagnostics/view-diagnostics.component';
import { AddDiagnosticComponent } from '../doctor-dashboard/add-diagnostics/add-diagnostics.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'doctors',
        component: ViewDoctorsComponent,
      },
      {
        path: 'adddoctor',
        component: AddDoctorComponent,
      },
      { path: 'patients', component: ViewPatientsComponent },
      { path: 'addpatient', component: AddPatientComponent },
      { path: 'appointments', component: ViewAppointmentsComponent },
      { path: 'prescription', component: AddPrescriptionComponent },
      { path: 'scheduleAppointment', component: ScheduleAppointmentComponent },
      { path: 'viewprofile', component: ViewProfileComponent },
      {path:'notifications',component:ViewNotificationsComponent},
      {path:'diagnostics',component:ViewDiagnosticsComponent},
      {path:'addDiagnosticReport',component:AddDiagnosticComponent},
      { path: '', component: ViewProfileComponent },
      { path: '**', redirectTo: '/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
