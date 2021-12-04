import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDetailService {
  constructor(private http: HttpClient) {}

  fetchAllAppointments(patientId) {
    return this.http.get(`http://localhost:8080/appointment/${patientId}`);
  }

  createAppointment(appointment) {
    return this.http.post(`http://localhost:8080/appointment/schedule`, appointment);
  }
}
