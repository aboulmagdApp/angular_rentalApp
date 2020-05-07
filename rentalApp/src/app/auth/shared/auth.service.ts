import { Injectable } from '@angular/core';
import { RegisterForm } from './register-form.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { extractApiError } from 'src/app/shared/helpers/functions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

  register(formData: RegisterForm): Observable<any>{
    return this.http
        .post('/api/v1/users/register', formData)
        .pipe(catchError((resError: HttpErrorResponse) =>
           throwError(extractApiError(resError))        )
      )
  }

  login(){

  }

}
