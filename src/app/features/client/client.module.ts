import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { DemandVideoComponent } from './demand-video/demand-video.component';
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    BookingComponent,
    PaymentComponent,
    DemandVideoComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class ClientModule { }
