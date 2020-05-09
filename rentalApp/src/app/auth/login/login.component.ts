import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { forbiddenEmailValidator, sameAsValidator } from '../../shared/validators/functions';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  messageTimeout: number;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  message;
  errors: BwmApi.Error[] = [];

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService) { }

  ngOnDestroy() {
    this.messageTimeout && window.clearTimeout(this.messageTimeout);
  }

  ngOnInit() {
    this.initForm();
    this.checkLoginMessage();
  }

  checkLoginMessage() {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] ? params['message'] : null;
      this.messageTimeout = window.setTimeout(() => {
        this.router.navigate([], {
          replaceUrl: true,
          queryParams: { message: null },
          queryParamsHandling: 'merge'
        })
        this.message = '';
      }, 2000)
    })
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern(this.emailPattern),
        forbiddenEmailValidator('aboulmagd@live.com')
      ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // initForm(){
  //   this.loginForm = this.fb.group({
  //     email: ['', [
  //       Validators.required, 
  //       Validators.pattern(this.emailPattern), 
  //       forbiddenEmailValidator('aboulmagd@live.com')
  //     ]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   },
  //   {validators: [sameAsValidator(['password', 'email'])]});
  // }

  login() {
    if (this.loginForm.invalid) { return; }
    this.errors = [];
    return this.auth
      .login(this.loginForm.value)
      .subscribe((token: string) =>{
        this.router.navigate(['/rentals']);
        console.log(token);
      }, (errors: BwmApi.Error[]) =>{
        this.errors = errors;
      })
  }

  get email(): AbstractControl { return this.loginForm.get('email') }
  get password(): AbstractControl { return this.loginForm.get('password') }

}
