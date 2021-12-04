import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  fetchAllNotifications(prescriptionId) {
    return this.http.get(`http://localhost:8080/prescriptionDetails/${prescriptionId}`);
  }

  
}
