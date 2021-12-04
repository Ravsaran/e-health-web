import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Diagnsotic } from '../models/diagnostic.model';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticDetailService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.productOrderService}`;
  constructor(private http: HttpClient) {}

  getDiagnostics(patientId) {
    return this.http.get(`http://localhost:8080/diagnostics/patient/${patientId}`);
  }

  createDiagnostics(diagnostic) {
    return this.http.post(`http://localhost:8080/diagnostics/create`, diagnostic);
  }
}
