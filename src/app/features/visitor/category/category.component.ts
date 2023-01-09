import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {CreatorService} from "../../../data/services/creator.service";
import {ActivatedRoute} from "@angular/router";
import {PaginationType} from "../../../core/data/PaginationType";
import {Creator} from "../../../data/models/creator";
import {Observable} from "rxjs";

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


  slug: string = this._route.snapshot.paramMap.get('slug') || '';
  categoryCreators$ : Observable<PaginationType<Creator>>;


  constructor(
    private _creatorService: CreatorService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //evry time the slug change we get the new data
    this._route.params.subscribe(params => {
      this.slug = params['slug'];
      this.categoryCreators$ = this._creatorService.getOneByTypeAndUri$('category/'+this.slug);
    });
  }
  pageChange(number: number) {
   this.categoryCreators$  = this._creatorService.getOneByTypeAndUriAndPage$('category/'+this.slug, number);
   window.scrollTo(0, 0);
  }
}


