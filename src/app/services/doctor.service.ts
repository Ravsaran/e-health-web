import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  fetchAllDoctors() {
    return this.http.get('http://localhost:8080/doctor');
  }

  createUser(user) {
    return this.http.post(`http://localhost:8080/user`, user);
  }

  addDoctor(doctor) {
    return this.http.post('http://localhost:8080/doctor', doctor);
  }

  fetchDoctor(id : number): any {
    return this.http.get(`http://localhost:8080/doctorByUser/${id}`);
  }
}
