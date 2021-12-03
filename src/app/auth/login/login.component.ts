/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-03 23:09:09
 * @modify date 2020-11-03 23:09:09
 * @desc Login Operation
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserResponse } from 'src/app/models/user-response.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  submitted = false;
  loginSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.initForm();
  }

  login() {
    this.loginSubscription = this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (response: UserResponse) => {
        //if(response.role.toLowerCase().includes('patient'))
          this.router.navigate(['/dashboard']);
      }
    );
  }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
