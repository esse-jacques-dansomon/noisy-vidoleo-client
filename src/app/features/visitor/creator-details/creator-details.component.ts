import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {AppSwiperConfigs} from "../../../shared/swiperconfig/appSwiperConfigs";
import {ActivatedRoute} from "@angular/router";
import {Creator} from "../../../data/models/creator";
import {Observable} from "rxjs";
import {CreatorService} from "../../../data/services/creator.service";
import {PaginationType} from "../../../core/data/PaginationType";
import {Demande} from "../../../data/models/demande";

@Component({
  selector: 'app-creator-details',
  templateUrl: './creator-details.component.html',
  styleUrls: ['./creator-details.component.css']
})
export class CreatorDetailsComponent implements OnInit {
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
  creator : Creator ;
  creatorsInSameCategory$: Observable<PaginationType<Creator>>;
  creatorDemands$: Observable<PaginationType<Demande>>

  constructor(
    private route: ActivatedRoute,
    private _creatorService: CreatorService,

  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.creator = data['creator'];
      this.creatorsInSameCategory$ = this._creatorService.getOneByTypeAndUri$('category/' + this.creator.sub_category.category.slug);
      this.creatorDemands$ = this._creatorService.getOneByTypeAndUriAndPage$('avis/' + this.creator.id, 1, '5');
    });
  }

}
