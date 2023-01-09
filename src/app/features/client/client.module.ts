import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { DemandVideoComponent } from './demand-video/demand-video.component';


@NgModule({
  declarations: [
    BookingComponent,
    PaymentComponent,
    DemandVideoComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
