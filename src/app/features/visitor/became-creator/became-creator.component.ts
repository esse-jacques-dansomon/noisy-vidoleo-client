import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotiflixService } from 'src/app/core/services/notiflix.service';
import { BecameCreator } from 'src/app/data/models/became-creator';
import { BecomeCreatorService } from 'src/app/data/services/become-creator.service';

@Component({
  selector: 'app-became-creator',
  templateUrl: './became-creator.component.html',
  styleUrls: ['./became-creator.component.css']
})
export class BecameCreatorComponent implements OnInit {

  becomeCreatorForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    principal_social_network: new FormControl('', [Validators.required]),
    pseudo_social_network: new FormControl('', [Validators.required]),
    followers: new FormControl('', [Validators.required])
  });
  becomeCreator:BecameCreator={
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    principal_social_network: "",
    pseudo_social_network: "",
    followers: "",
    status: "pending",
  };
  constructor(
    private _becomeCreator$: BecomeCreatorService,
    private _notiflixService: NotiflixService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.becomeCreator.first_name = this.becomeCreatorForm.value.first_name;
    this.becomeCreator.last_name = this.becomeCreatorForm.value.last_name;
    this.becomeCreator.email = this.becomeCreatorForm.value.email;
    this.becomeCreator.phone = this.becomeCreatorForm.value.phone;
    this.becomeCreator.principal_social_network = this.becomeCreatorForm.value.principal_social_network;
    this.becomeCreator.pseudo_social_network = this.becomeCreatorForm.value.pseudo_social_network;
    this.becomeCreator.followers = this.becomeCreatorForm.value.followers;
    this._becomeCreator$.create$(this.becomeCreator).subscribe(
      (res) => {
        this._notiflixService.success('Votre demande a été envoyée avec succès');
      }
    );
  }

}
