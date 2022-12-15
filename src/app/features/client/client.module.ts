import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    BookingComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
