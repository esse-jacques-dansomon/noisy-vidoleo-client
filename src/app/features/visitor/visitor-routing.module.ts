import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {CreatorDetailsComponent} from "./creator-details/creator-details.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recherche',
    component: SearchComponent
  },
  {
    path: 'createurs',
    component: CreatorDetailsComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
