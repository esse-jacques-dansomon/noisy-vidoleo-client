import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { DemandVideoComponent } from './demand-video/demand-video.component';
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    BookingComponent,
    PaymentComponent,
    DemandVideoComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
