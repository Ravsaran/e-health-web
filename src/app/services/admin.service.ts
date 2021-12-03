import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}


  fetchAdmin(id : number): any {
    return this.http.get(`http://localhost:8080/adminByUser/${id}`);
  }
}
