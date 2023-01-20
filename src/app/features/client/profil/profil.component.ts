import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/AuthService";
import {Router} from "@angular/router";
import {Client} from "../../../data/models/client";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) { }

  client : Client

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        id: new FormControl('', [Validators.required]),
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl( '', [Validators.required, Validators.minLength(10)]),
      }
    )
    this.authService.verifyInfos().subscribe(
      {
        next: (res) => {
          this.client = res;
          this.registerForm.patchValue(res);
        },
        error : (err) => {
          this.router.navigateByUrl('/auth/login');
        }
      }
    )
  }

  registerForm : FormGroup ;
  isLoading: false;

  registerFormSubmit() {
    this.authService.updateClient(this.registerForm.value, this.client.id).subscribe(
      {
        next: (res) => {
          this.authService.getUserConnectedInfo();
        }
      }
    )
  }
}
