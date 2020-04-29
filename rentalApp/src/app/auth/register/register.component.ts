import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../shared/register-form.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerFormData: RegisterForm;

  constructor() { }

  ngOnInit() {
    this.registerFormData = new RegisterForm();
  }


  register(){
    alert(JSON.stringify(this.registerFormData));
  }

}
