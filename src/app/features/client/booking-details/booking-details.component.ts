import { Component, OnInit } from '@angular/core';
import {DemandService} from "../../../data/services/demand.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Demande} from "../../../data/models/demande";
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotiflixService } from 'src/app/core/services/notiflix.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  stars=[1,2,3,4,5];
  rating=0;
  code : string = this._route.snapshot.params['slug'];
  demand : Demande ;
  videoVisible: boolean = false;
  baseUrl:string = environment.videoUrl;
  commentForm:FormGroup;
  constructor(
    private _demandService : DemandService,
    private _route: ActivatedRoute,
    private _router : Router,
    private formBuilder: FormBuilder,
    private _notiflixService : NotiflixService
  ) { 
    this.commentForm = this.formBuilder.group({
      body: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this._demandService.getDemandeByClientAndCode$(this.code).subscribe(
      {
        next: (data) => {
          this.demand = data;
          if(this.demand.demand_media){
            if(this.demand.status == 'completed'){
              this.videoVisible = true;
            }
            if(this.demand.comment){
              this.rating = this.demand.comment.stars;
            }
            this.baseUrl = this.baseUrl + this.demand.demand_media.name;
          }
        },
        error: (err) => {
          this._router.navigateByUrl('/');
        }
      }
    );
  }


  makePayment() {
    window.open(this.demand.payment.link, '_blank');
  }

  updateRating(star: number) {
    this.rating = star;
  }

  onFormSubmit() {
    if(this.rating == 0){
      this._notiflixService.warning('Veuillez donner une note');
    }else{
      this._demandService.commmentDemande$(this.demand.id, this.commentForm.value.body, this.rating).subscribe(
        data=>{
          console.log(data);
          this.demand= data;
          this._notiflixService.success('Commentaire ajouté avec succès');
          //location.reload();
        }
      );
    }
  }

}
