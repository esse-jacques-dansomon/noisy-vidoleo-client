import { Component, OnInit } from '@angular/core';
import {DemandService} from "../../../data/services/demand.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotiflixService} from "../../../core/services/notiflix.service";
import {CreatorService} from "../../../data/services/creator.service";
import {Creator} from "../../../data/models/creator";
import {CreatorOccasionType} from "../../../data/models/creator-occasion-type.interceptor";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  isForSome = false;
  creator_occasion_type_id : number;
  creator : Creator;
  selectedOccasion : CreatorOccasionType

  askDemandForm : FormGroup = new FormGroup({
    sender: new FormControl('moi', [Validators.required]),
    receiver: new FormControl('moi', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    delivery_email: new FormControl('moi', [Validators.required]),
    creator_occasion_type_id: new FormControl('', [Validators.required]),
    options: new FormControl([], []),
  });
  constructor(
    private _demandService : DemandService,
    private _creatorService : CreatorService,
    private _route : ActivatedRoute,
    private _router : Router,
    private _notiflix: NotiflixService

  ) { }

  ngOnInit(): void {

    this.creator_occasion_type_id = this._route.snapshot.params['id'];
    if (!this.creator_occasion_type_id){
      this._router.navigateByUrl('/');
    }
    //get the slug in the url
    this._creatorService.getOneByUri$('creator-occasion-type/' + this.creator_occasion_type_id).subscribe(
      {
        next: (data) => {
          this.creator = data;
           this.creator.occasionsTypes.filter(
            (occasion) => {
              if (occasion.id == this.creator_occasion_type_id){
                this.selectedOccasion = occasion;
              }
            }
          );
        },
        error: (err) => {
          this._router.navigateByUrl('/');
        }
      });

    this.askDemandForm.get('creator_occasion_type_id').setValue(this.creator_occasion_type_id);
    //listen sender
    this.askDemandForm.get('sender').valueChanges.subscribe(
      (value) => {
        if (value == 'moi'){
          this.askDemandForm.get('receiver').setValue('moi');
          this.isForSome = false;

        }else{
          this.isForSome = true;

        }
      }
    )

  }



  askForDemand(){
    this._demandService.askForDemand(this.askDemandForm.value).subscribe(
      {
        next: (data) => {
          this._notiflix.reportSuccess('Demande envoyée avec succès', 'Votre demande a été envoyée avec succès. Vous serez redirigé vers la page de paiement');
          window.open(data.url, '_blank');
          this._router.navigateByUrl('/client/demandes');
        },
        error: (err) => {
          this._notiflix.reportFailure('Error', err.error.message);
        }
      }
    );
  }

}
