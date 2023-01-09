import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
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
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.login(email, password).subscribe(
      {
        next: (data) => {
          if (data.user.role.name == "client") {
            this.router.navigate(['/client/demandes']);
          } else if (data.user.role.name == "creator") {
            this.router.navigate(['/admin/dashboard']);
          }
        },
        error: (err) => {
          alert(err.error.message);
        }
      });

  }
}
