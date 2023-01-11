import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {AuthService} from "../../../core/services/AuthService";
import {Router} from "@angular/router";
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

    private _notiflix: NotiflixService
  ) { }
  isLoading = false;
  registerForm : FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  ngOnInit(): void {
  }

  registerFormSubmit() {
    this.isLoading = true;
    Loading.circle();
    this._authService.register(this.registerForm.value).subscribe(
      {
        next: (res) => {
            this.isLoading = false;
            Loading.remove();
            this._notiflix.reportSuccess('Success', 'Registration Successful');
            this._router.navigateByUrl('/client/demandes');
        },
        error : (err) => {
          this.isLoading = false;
          Loading.remove();
          Notify.failure(err.error.message, {timeout: 5000});
        }
      });

  }
}
