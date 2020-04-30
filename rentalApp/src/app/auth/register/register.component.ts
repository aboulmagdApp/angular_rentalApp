import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../shared/register-form.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerFormData: RegisterForm;
 emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  constructor() { }

  ngOnInit() {
    this.registerFormData = new RegisterForm();
  }


  register(){
    alert(JSON.stringify(this.registerFormData));
  }

}
