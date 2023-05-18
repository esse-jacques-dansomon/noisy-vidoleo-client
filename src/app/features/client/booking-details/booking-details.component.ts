import { Component, OnInit } from '@angular/core';
import {DemandService} from "../../../data/services/demand.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Demande} from "../../../data/models/demande";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-booking-detilas',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  code : string = this._route.snapshot.params['slug'];
  demand : Demande ;
  videoVisible: boolean = false;
  baseUrl:string = environment.videoUrl;
  constructor(
    private _demandService : DemandService,
    private _route: ActivatedRoute,
    private _router : Router,

  ) { }

  ngOnInit(): void {
    this._demandService.getDemandeByClientAndCode$(this.code).subscribe(
      {
        next: (data) => {
          this.demand = data;
          if(this.demand.demand_media){
            this.videoVisible = true;
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
}
