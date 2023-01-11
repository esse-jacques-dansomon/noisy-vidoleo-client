import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/AuthService";
import {Router} from "@angular/router";
import {NotiflixService} from "../../../core/services/notiflix.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup<{ email: FormControl<string | null> }>;
  isLoading: boolean = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,

    private _notiflix : NotiflixService
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    this.isLoading = true;
    this._authService.forgotPassword(this.forgotPasswordForm.value.email).subscribe(
      {
        next : (res) => {
          this.isLoading = false;
          this._notiflix.success("Un email de réinitialisation de mot de passe a été envoyé à votre adresse email");
          this._router.navigateByUrl('/auth/login');
        },
        error: (err) => {
          this.isLoading = false;
          this._notiflix.failure(err.error.message);
        }
      }
    );
  }

}
