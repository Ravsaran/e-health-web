import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrescriptionDetails } from '../models/prescriptionDetails.model';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionDetailsService {
  constructor(private http: HttpClient) {}
 
  createPrescriptionDetails(prescriptionDetails: PrescriptionDetails[]) {
    return this.http.post(`http://localhost:8080/prescriptionDetails`, prescriptionDetails);
  }
}
