import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../shared/register-form.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormData: RegisterForm;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  errors: BwmApi.Error[] = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerFormData = new RegisterForm();
  }

  register(form: NgForm) {
    this.validateInputs(form);
    if (form.invalid) {
      return
    }
    this.errors = [];
    this.auth
      .register(this.registerFormData)
      .subscribe(_ => {
        this.router.navigate(['/login'], {
          queryParams: { message: 'You have een succesfuly registered!'}
        });
    }, (errors: BwmApi.Error[]) => this.errors = errors);
  }

  validateInputs(form: NgForm) {
    debugger
    Object.keys(form.controls).forEach(controlName =>{
      form.controls[controlName].markAsDirty()
    })
  }
}