import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {AuthService} from "../../../core/services/AuthService";
import {ActivatedRoute, Router} from "@angular/router";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {NotiflixService} from "../../../core/services/notiflix.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _route : ActivatedRoute,
    private _notiflix: NotiflixService
  ) { }
  isLoading = false;
  registerForm : FormGroup ;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    })
  }

  registerFormSubmit() {
    this.isLoading = true;
    Loading.circle();
    this._authService.register(this.registerForm.value).subscribe(
      {
        next: (res) => {
          this.isLoading = false;
          Loading.remove();
          let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
          if (returnUrl) {
            this._router.navigateByUrl(returnUrl);
          }else{
            this._router.navigateByUrl('/client/demandes').then(
              () => {
                Notify.success('Registration Successful');
              }
            );
          }
        },
        error : (err) => {
          this.isLoading = false;
          Loading.remove();
          Notify.failure(err.error.message, {timeout: 5000});
        }
      });

  }

  validatePassword() {
    return this.registerForm.value.password == this.registerForm.value.confirmPassword;
  }
}
