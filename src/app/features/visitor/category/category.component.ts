import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  config: SwiperOptions  = {
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
        nextEl: '.button-next' ,
        prevEl: '.button-prev',
      },
      breakpoints: {
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
      },
    };

  creators = Array.from({length: 15}, (_, k) => k + 1).map(i => ({
    id: i,
    name: 'Createur ' + i,
    role: 'Actor - Harry Potter' + i,
    price: 'From $ '+ i*100,
  }));


  constructor() { }

  ngOnInit(): void {
  }

}
