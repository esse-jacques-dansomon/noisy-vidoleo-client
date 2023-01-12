import { Component, OnInit } from '@angular/core';
import {DemandService} from "../../../data/services/demand.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Demande} from "../../../data/models/demande";

@Component({
  selector: 'app-booking-detilas',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  code : string = this._route.snapshot.params['slug'];
  demand : Demande ;
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
