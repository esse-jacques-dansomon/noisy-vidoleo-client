import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
