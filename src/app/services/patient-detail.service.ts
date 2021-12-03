import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientDetailService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.productOrderService}`;
  constructor(private http: HttpClient) {}

  fetchAllPatients() {
    return this.http.get(`http://localhost:8080/patients`);
  }

  fetchPatient(id : number): any {
    return this.http.get(`http://localhost:8080/patientByUser/${id}`);
  }

  createUser(user) {
    return this.http.post(`http://localhost:8080/user`, user);
  }

  createPatients(patient) {
    return this.http.post(`http://localhost:8080/patient`, patient);
  }
}
