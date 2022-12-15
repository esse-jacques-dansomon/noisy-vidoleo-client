import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {AppSwiperConfigs} from "../../../shared/swiperconfig/appSwiperConfigs";

@Component({
  selector: 'app-creator-details',
  templateUrl: './creator-details.component.html',
  styleUrls: ['./creator-details.component.css']
})
export class CreatorDetailsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1.6,
    spaceBetween: 25,
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
  creators = AppSwiperConfigs.createCreators(15);
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
  }
  constructor() { }

  ngOnInit(): void {
  }

}
