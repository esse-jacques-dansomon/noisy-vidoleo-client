import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { CreatorDetailsComponent } from './creator-details/creator-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CategoryComponent,
    CreatorDetailsComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
