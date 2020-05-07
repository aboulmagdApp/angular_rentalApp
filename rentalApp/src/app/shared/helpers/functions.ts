import { HttpErrorResponse } from '@angular/common/http';


export const extractApiError = (resError: HttpErrorResponse): BwmApi.Error[] =>{
    let errors = [{title: '', detail: ''}];
    if(resError && resError.error && resError.error.errors){
      errors = resError.error.errors;
    }
    return errors;
  }