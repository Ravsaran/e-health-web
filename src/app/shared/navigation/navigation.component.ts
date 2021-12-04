import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  public user: User = null;
  paths = [
    /*{
      route: '/dashboard/viewprofile',
      class: 'fas fa-user',
      label: 'Profile', 
      role: 'User',
    },*/
    {
      route: '/dashboard/patients',
      class: 'fas fa-user',
      label: 'Patients',
      role: 'admin',
    },
    {
      route: '/dashboard/doctors',
      class: 'fas fa-boxes',
      label: 'Doctors',
      role: 'admin',
    },
    {
      route: '/dashboard/appointments',
      class: 'fas fa-truck-moving',
      label: 'Appointments',
      role: 'patient',
    },
    {
      route: '/dashboard/appointments',
      class: 'fas fa-boxes',
      label: 'Diagnostic Reports',
      role: 'patient',
    },
    {
      route: '/dashboard/appointments',
      class: 'fas fa-people-carry',
      label: 'Prescription',
      role: 'patient',
    }
    ,
    {
      route: '/dashboard/prescription',
      class: 'fas fa-people-carry',
      label: 'Prescription',
      role: 'doctor',
    },
    {
      route: '/dashboard/notifications',
      class: 'fas fa-people-carry',
      label: 'Notification',
      role: 'patient',
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
