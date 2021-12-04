
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

];
