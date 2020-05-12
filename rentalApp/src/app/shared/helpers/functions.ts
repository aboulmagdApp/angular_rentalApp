import { HttpErrorResponse } from '@angular/common/http';


export const extractApiError = (resError: HttpErrorResponse): BwmApi.Error[] =>{
    let errors = [{title: 'error', detail: 'some thing wrong!'}];
    if(resError && resError.error && resError.error.errors){
      errors = resError.error.errors;
    }
    return errors;
  }