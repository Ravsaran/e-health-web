/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-04 09:27:13
 * @modify date 2020-11-04 09:27:13
 * @desc Global Interceptors
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { HttpErrorInterceptor } from './http-error.interceptor123';

export const httpInterceptors = [
  {
    provide: ErrorHandler,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
  // Breaks Code for now 
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: CorsInterceptor,
  //   multi: true,
  // },
];
