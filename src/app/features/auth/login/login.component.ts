import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/AuthService";
import {Router} from "@angular/router";
import {NotiflixService} from "../../../core/services/notiflix.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string
  loginForm: FormGroup;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _notiflix : NotiflixService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/client/demandes']);
    }
  }

  login() {
    this.isLoading = true;
    this._notiflix.loading();
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.login(email, password).subscribe(
      {
        next: (data) => {
          this.isLoading = false;
          this._notiflix.success('Vous êtes connecté avec succès');
          this._notiflix.removeLoading();
          if (data.user.role.name == "client") {
            this.router.navigate(['/client/demandes']);
          } else if (data.user.role.name == "creator") {
            this.router.navigate(['/admin/dashboard']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this._notiflix.failure(err.error.message);
          this._notiflix.removeLoading();
        }
      });

  }
}
