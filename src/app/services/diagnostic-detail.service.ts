import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticDetailService {
  constructor(private http: HttpClient) {}

  getDiagnostics(patientId) {
    return this.http.get(`http://localhost:8080/diagnostics/patient/${patientId}`);
  }

  createDiagnostics(diagnostic) {
    return this.http.post(`http://localhost:8080/diagnostics/create`, diagnostic);
  }
}
