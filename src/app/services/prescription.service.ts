import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  constructor(private http: HttpClient) {}

  fetchAllPrescription(patientId) {
    return this.http.get(`http://localhost:8080/prescription/${patientId}`);
  }

  createPrescription(prescription) {
    return this.http.post(`http://localhost:8080/prescription`, prescription);
  }
}
