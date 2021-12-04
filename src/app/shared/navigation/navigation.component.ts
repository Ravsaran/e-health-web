import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  public user: User = null;
  paths = [
    {
      route: '/dashboard/patients',
      class: 'fas fa-user',
      label: 'Patients',
      role: 'admin',
    },
    {
      route: '/dashboard/doctors',
      class: 'fas fa-user-md',
      label: 'Doctors',
      role: 'admin',
    },
    {
      route: '/dashboard/appointments',
      class: 'fas fa-stethoscope',
      label: 'Appointments',
      role: 'patient',
    },
    {
      route: '/dashboard/diagnostics',
      class: 'fas fa-medkit',
      label: 'Diagnostic Reports',
      role: 'patient',
    },
    {
      route: '/dashboard/appointments',
      class: 'fas fa-stethoscope',
      label: 'Prescription',
      role: 'patient',
    }
    ,
    {
      route: '/dashboard/prescription',
      class: 'fas fa-file-image-o',
      label: 'Prescription',
      role: 'doctor',
    },
    {
      route: '/dashboard/notifications',
      class: 'fas fa-bell',
      label: 'Notification',
      role: 'patient',
    },
    {
      route: '/dashboard/addDiagnosticReport',
      class: 'fas fa-medkit',
      label: 'Add Diagnostic Report',
      role: 'doctor',
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  if (this.authService.fetchFromSessionStorage() !== null)
     this.user = this.authService.fetchFromSessionStorage();
   else this.router.navigateByUrl('/login');
  if (this.user.role.toLowerCase().includes('patient'))
     this.paths = this.paths.filter((path) => path.role === 'patient');
  if (this.user.role.toLowerCase().includes('admin'))
      this.paths = this.paths.filter((path) => path.role === 'admin');
  if (this.user.role.toLowerCase().includes('doctor'))
     this.paths = this.paths.filter((path) => path.role === 'doctor');
  } 
 

  signOut() {
    this.authService.logout();
  }
}
