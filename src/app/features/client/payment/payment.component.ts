import { Component, OnInit } from '@angular/core';
import {DemandService} from "../../../data/services/demand.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private _demandService : DemandService
  ) { }

  ngOnInit(): void {
  }

}
