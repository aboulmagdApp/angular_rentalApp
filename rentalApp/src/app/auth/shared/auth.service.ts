import { Injectable } from '@angular/core';
import { RegisterForm } from './register-form.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

  register(formData: RegisterForm): Observable<any>{
    return this.http
        .post('/api/v1/users/register', formData)
        .pipe(catchError((resError: HttpErrorResponse) =>{
          let errors = [{title: '', detail: ''}];
          if(resError && resError.error && resError.error.errors){
            errors = resError.error.errors;
          }
          return throwError(errors);
        })
      )
  }

  login(){

  }

}
