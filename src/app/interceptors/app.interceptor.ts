import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const { apiUrl } = environment;
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {


  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials:true
    })
  }

  const router = inject(Router);

  return next(req).pipe(
    catchError((err)=>{
      if(err.status === 401){
        router.navigate(['/login']);
      }else {
        router.navigate(['/error']);
      }

      return [err];
    })
  )
};
