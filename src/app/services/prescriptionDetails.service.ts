import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrescriptionDetails } from '../models/prescriptionDetails.model';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionDetailsService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.productOrderService}`;
  constructor(private http: HttpClient) {}

 

  createPrescriptionDetails(prescriptionDetails: PrescriptionDetails[]) {
    return this.http.post(`http://localhost:8080/prescriptionDetails`, prescriptionDetails);
  }
}
