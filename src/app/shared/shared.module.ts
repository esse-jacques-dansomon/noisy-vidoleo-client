import {SniperLoaderComponent} from "./components/sniper-loader.component";
import {AlertMessageComponent} from "./components/alert-messaga.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactVendorComponent} from "./components/contact-vendor.component";
import {CreatorCard} from "../layout/common/creator-card";
import {RouterLink} from "@angular/router";
import {DemandClientCard} from "../layout/common/demand-client-card";


@NgModule({
  declarations: [
    SniperLoaderComponent,
    AlertMessageComponent,
    ContactVendorComponent,
    CreatorCard,
    DemandClientCard

  ],
  exports: [
    SniperLoaderComponent,
    AlertMessageComponent,
    CreatorCard,
    DemandClientCard
  ],
  imports: [
    CommonModule,
    RouterLink,
  ]
})
export class SharedModule { }
