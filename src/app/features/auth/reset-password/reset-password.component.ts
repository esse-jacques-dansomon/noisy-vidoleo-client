import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/AuthService";
import {NotiflixService} from "../../../core/services/notiflix.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  changePasswordForm: any;
  isLoading: boolean = false;

  constructor(private authService : AuthService, private notifliService : NotiflixService) { }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  submit() {
    this.isLoading = true;
    this.authService.resetPassword(this.changePasswordForm.value).subscribe(
      {
        next: (res) => {
          this.isLoading = false;
          this.notifliService.success('Mot de passe changé avec succès');
        },
        error: (err) => {
          this.isLoading = false;
          this.notifliService.failure('Une erreur est survenue');
        }
      }
    )

  }

}
