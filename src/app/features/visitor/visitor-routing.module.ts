import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {CreatorDetailsComponent} from "./creator-details/creator-details.component";
import {CategoryComponent} from "./category/category.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {CguComponent} from "./cgu/cgu.component";
import {FaqComponent} from "./faq/faq.component";
import {MentionLegalesComponent} from "./mention-legales/mention-legales.component";
import {RgpdComponent} from "./rgpd/rgpd.component";
import {TestimoneyComponent} from "./testimoney/testimoney.component";
import {BecameCreatorComponent} from "./became-creator/became-creator.component";
import {CreatorDetailsResolver} from "./visitor-resolvers.resolver";

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
    path: 'createurs/:slug',
    component: CreatorDetailsComponent,
    resolve: {
      creator: CreatorDetailsResolver
    }
  },
  {
    path: 'devenir-createur',
    component: BecameCreatorComponent
  },
  {
    path: 'categories/:slug',
    component: CategoryComponent
  },{
    path: 'comment-ca-marche',
    component: AboutUsComponent
  },
  {
    path: "cgu-et-confidentialite",
    component: CguComponent
  },
  {
    path: "faqs",
    component: FaqComponent
  },
  {
    path: "mentions-legales",
    component: MentionLegalesComponent
  },
  {
    path: "rgpd",
    component: RgpdComponent
  },
  {
    path: "avis",
    component: TestimoneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
