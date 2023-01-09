import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {CreatorService} from "../../../data/services/creator.service";
import {Observable} from "rxjs";
import {PaginationType} from "../../../core/data/PaginationType";
import {Creator} from "../../../data/models/creator";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private creatorService: CreatorService,
  ) { }

  ngOnInit(): void {
  }

  //get creators vedettes
  $featuredCreators : Observable<PaginationType<Creator>> =  this.creatorService.getOneByTypeAndUri$("featured") ;
  $acteurs : Observable<PaginationType<Creator>> =  this.creatorService.getOneByTypeAndUri$("category/tv") ;
  $artistes : Observable<PaginationType<Creator>> =  this.creatorService.getOneByTypeAndUri$("category/artistes") ;
  $creators : Observable<PaginationType<Creator>> =  this.creatorService.getOneByTypeAndUri$("category/createurs") ;
  $sportifs : Observable<PaginationType<Creator>> =  this.creatorService.getOneByTypeAndUri$("category/sportifs") ;
  //swiper config
  breakpoints = {
    200:  {
      slidesPerView: 1,
      spaceBetween: 5,

    },
    350:  {
      slidesPerView: 2,

    },
    500:  {
      slidesPerView: 2.5,
    },
    640: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 4.5,
      spaceBetween: 25,
    },
    1100: {
      slidesPerView: 5.1,
      spaceBetween: 25,
    },
    1124: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
  };
  getSwiperConfig(index: number): SwiperOptions  {
    return {
      slidesPerView: 2.5,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      },
      pagination: {
        clickable: false,
      },
      navigation:     {
        nextEl: '.button-next' + index,
        prevEl: '.button-prev' + index,
      },
      breakpoints: this.breakpoints,
    };
  }
  //generate 40 creators
  creators = Array.from({length: 15}, (_, k) => k + 1).map(i => ({
    id: i,
    name: 'Createur ' + i,
    role: 'Actor - Harry Potter' + i,
    price: 'From $ '+ i*100,
    image: "https://via.placeholder.com/468x468?text=Visit+Blogging.com+Now%20C/O%20https://placeholder.com/#How_To_Set_Custom_Text"+i,
  }));
  howItWorksSwiperConfig : SwiperOptions = {
    slidesPerView: 1.1,
    spaceBetween: 20,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    parallax: true,
    pagination: {
      clickable: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  };
  pressSwiperConfig : SwiperOptions = {
    slidesPerView: 1.1,
    spaceBetween: 20,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    pagination: {
      clickable: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 25,
      },
      948: {
        slidesPerView: 2.5,
        spaceBetween: 25,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  };

}
