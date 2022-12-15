import {SwiperOptions} from "swiper";

export class AppSwiperConfigs {

  private static  breakpoints = {
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
  public static getSwiperConfig(index: any): SwiperOptions  {
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
  public static createCreators(total: number){
    return  Array.from({length: total}, (_, k) => k + 1).map(i => ({
      id: i,
      name: 'Createur ' + i,
      role: 'Actor - Harry Potter' + i,
      price: 'From $ '+ i*100,
    }));
  }
  public static howItWorksSwiperConfig : SwiperOptions = {
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
  public static  pressSwiperConfig : SwiperOptions = {
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
