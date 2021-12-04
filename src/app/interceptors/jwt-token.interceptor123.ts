
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtTokenInterceptor  {
  constructor(private authService: AuthService) {}


  
}
