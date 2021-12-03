import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserResponse } from '../models/user-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(userid: string, pwd: string) {
    return this.http
    .get(`http://localhost:8080/user/${userid}/${pwd}`)
    .pipe(tap((user: UserResponse) => {
      this.saveToSessionStorage(user);
    }));
  }

  saveToSessionStorage(user: UserResponse) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  fetchFromSessionStorage(): UserResponse {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }



}
