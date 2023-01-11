import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingComponent} from "./booking/booking.component";
import {PaymentComponent} from "./payment/payment.component";
import {DemandVideoComponent} from "./demand-video/demand-video.component";
import {ProfilComponent} from "./profil/profil.component";

const routes: Routes = [
  {
    path: 'booking/:id',
    component: BookingComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  } ,
  {
    path: 'demandes',
    component: DemandVideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
