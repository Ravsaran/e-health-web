import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDetailService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.productOrderService}`;
  constructor(private http: HttpClient) {}

  fetchAllAppointments(patientId: string) {
    return this.http.get(`http://localhost:8080/appointment/patient/${patientId}`);
  }


  

  createAppointment(appointment) {
    return this.http.post(`http://localhost:8080/appointment/schedule`, appointment);
  }
}
