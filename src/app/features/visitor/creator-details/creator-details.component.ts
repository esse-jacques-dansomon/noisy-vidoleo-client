import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {AppSwiperConfigs} from "../../../shared/swiperconfig/appSwiperConfigs";
import {ActivatedRoute} from "@angular/router";
import {Creator} from "../../../data/models/creator";
import {Observable} from "rxjs";
import {CreatorService} from "../../../data/services/creator.service";
import {PaginationType} from "../../../core/data/PaginationType";
import {Demande} from "../../../data/models/demande";
import { environment } from 'src/environments/environment';
import {VisitorStoreService} from "../store/visitor-store.service";

@Component({
  selector: 'app-creator-details',
  templateUrl: './creator-details.component.html',
  styleUrls: ['./creator-details.component.css']
})
export class CreatorDetailsComponent {
  config: SwiperOptions = {
    slidesPerView: 1.6,
    spaceBetween: 25,
    height: 500,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    pagination: {
      clickable: true,
    }
  };
  otherAuthorCon: SwiperOptions = AppSwiperConfigs.getSwiperConfig('')
  howItWorksCelebrity: SwiperOptions =   {
    slidesPerView: 1.3,
    spaceBetween: 25,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      460:{
        slidesPerView: 1.4,
      } ,
      640:{
        slidesPerView: 2.1,
      },
      850: {
        slidesPerView: 2.5,
      },
      950:{
        slidesPerView:3.1,
      }     ,
      1150:{
        slidesPerView:4,
      }
    }
  };
  celebrityRequestContentSteps: SwiperOptions = {
    slidesPerView: 1.3,
    spaceBetween: 25,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      460:{
        slidesPerView: 1.4,
      } ,
      640:{
        slidesPerView: 2.1,
      },
      850: {
        slidesPerView: 2.5,
      },
      950:{
        slidesPerView:3,
      }     ,
      1150:{
        slidesPerView:3,
      }
    }
  };
  creator$ : Observable<Creator>  = this._visitorStoreService.selectedCreator();
  creatorsInSameCategory$: Observable<PaginationType<Creator>> = this._visitorStoreService.selectedCreatorFeaturedCreators();
  creatorDemands$: Observable<PaginationType<Demande>> = this._visitorStoreService.selectedCreatorDemands();
  pictureUrl:string = environment.pictureUrl;
  constructor(
    private _visitorStoreService: VisitorStoreService
  ) {}


}
