import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingComponent} from "./booking/booking.component";
import {PaymentComponent} from "./payment/payment.component";

const routes: Routes = [
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
