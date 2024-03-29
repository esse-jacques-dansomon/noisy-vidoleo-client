import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { CreatorDetailsComponent } from './creator-details/creator-details.component';
import { TestimoneyComponent } from './testimoney/testimoney.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { CguComponent } from './cgu/cgu.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { MentionLegalesComponent } from './mention-legales/mention-legales.component';
import { BecameCreatorComponent } from './became-creator/became-creator.component';
import {SharedModule} from "../../shared/shared.module";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import {CoreModule} from "../../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ForCompagniesComponent } from './for-compagnies/for-compagnies.component';
import { CreatorCommentsComponent } from './creator-comments/creator-comments.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CategoryComponent,
    CreatorDetailsComponent,
    TestimoneyComponent,
    AboutUsComponent,
    FaqComponent,
    CguComponent,
    RgpdComponent,
    MentionLegalesComponent,
    BecameCreatorComponent,
    ForCompagniesComponent,
    CreatorCommentsComponent
  ],
    imports: [
        CommonModule,
        VisitorRoutingModule,
        SharedModule,
        NgxUsefulSwiperModule,
        CoreModule,
        ReactiveFormsModule
    ]
})
export class VisitorModule { }
