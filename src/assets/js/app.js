window.onload = function() {
    /*=================SWIPER INITIALISE======================*/
    // const  breakpoints = {
    //     200:  {
    //         slidesPerView: 1,
    //         spaceBetween: 5,
    //
    //     },
    //     350:  {
    //         slidesPerView: 2,
    //
    //     },
    //     500:  {
    //         slidesPerView: 2.5,
    //     },
    //     640: {
    //         slidesPerView: 3.2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 3.5,
    //         spaceBetween: 20,
    //     },
    //     900: {
    //         slidesPerView: 4.5,
    //         spaceBetween: 25,
    //     },
    //     1100: {
    //         slidesPerView: 5.1,
    //         spaceBetween: 25,
    //     },
    //     1124: {
    //         slidesPerView: 5.5,
    //         spaceBetween: 20,
    //     },
    // };
    // const news= new Swiper(".mySwiper", {
    //     slidesPerView: 2.5,
    //     spaceBetween: 20,
    //     mousewheel: {
    //         forceToAxis: true,
    //         sensitivity: 1,
    //         releaseOnEdges: true,
    //     },
    //     pagination: {
    //         clickable: false,
    //     },
    //     navigation: {
    //         nextEl: '.button-next ',
    //         prevEl: '.button-prev',
    //     },
    //     breakpoints: breakpoints,
    // });
    // const tendances = new Swiper(".mySwiper2", {
    //     slidesPerView: 2.5,
    //     spaceBetween: 20,
    //     mousewheelControl: true,
    //     mousewheel: {
    //         forceToAxis: true,
    //         sensitivity: 1,
    //         releaseOnEdges: true,
    //     },
    //     pagination: {
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.button-next2',
    //         prevEl: '.button-prev2',
    //     },
    //     breakpoints: breakpoints,
    // });
    // const  actors = new Swiper(".mySwiper3", {
    //     slidesPerView: 2.5,
    //     spaceBetween: 20,
    //     mousewheel: {
    //         forceToAxis: true,
    //         sensitivity: 1,
    //         releaseOnEdges: true,
    //     },
    //     parallax: true,
    //     pagination: {
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.button-next3',
    //         prevEl: '.button-prev3',
    //     },
    //     breakpoints: breakpoints,
    // });
    // const  how_it_works = new Swiper(".how_it_works", {
    //     slidesPerView: 1.1,
    //     spaceBetween: 20,
    //     mousewheel: {
    //         forceToAxis: true,
    //         sensitivity: 1,
    //         releaseOnEdges: true,
    //     },
    //     parallax: true,
    //     pagination: {
    //         clickable: false,
    //     },
    //
    //     breakpoints: {
    //         640: {
    //             slidesPerView: 2.5,
    //             spaceBetween: 30,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 25,
    //         },
    //     },
    // });
    // const  presentations = new Swiper(".presentations ", {
    //     slidesPerView: 1.1,
    //     spaceBetween: 20,
    //     mousewheel: {
    //         forceToAxis: true,
    //         sensitivity: 1,
    //         releaseOnEdges: true,
    //     },
    //     pagination: {
    //         clickable: false,
    //     },
    //
    //     breakpoints: {
    //         640: {
    //             slidesPerView: 1.5,
    //             spaceBetween: 30,
    //         },
    //         768: {
    //             slidesPerView: 2.1,
    //             spaceBetween: 25,
    //         },
    //         948: {
    //             slidesPerView: 2.5,
    //             spaceBetween: 25,
    //         },
    //         1100: {
    //             slidesPerView: 3,
    //             spaceBetween: 25,
    //         },
    //     },
    // });
    // const  celebrityVideos = new Swiper(".celebrity-videos",
  // {
  //       slidesPerView: 1.6,
  //       spaceBetween: 25,
  //       mousewheel: {
  //           forceToAxis: true,
  //           sensitivity: 1,
  //           releaseOnEdges: true,
  //       },
  //       pagination: {
  //           clickable: true,
  //       },
    // });
    // const  celebrityHowItWorksSwiper = new Swiper(".celebrity-how-it-works-swiper",
  // {
  //       slidesPerView: 1.3,
  //       spaceBetween: 25,
  //       mousewheel: {
  //           forceToAxis: true,
  //           sensitivity: 1,
  //           releaseOnEdges: true,
  //       },
  //       pagination: {
  //           clickable: true,
  //       },
  //       breakpoints: {
  //           460:{
  //               slidesPerView: 1.4,
  //           } ,
  //           640:{
  //               slidesPerView: 2.1,
  //           },
  //           850: {
  //               slidesPerView: 2.5,
  //           },
  //           950:{
  //               slidesPerView:3.1,
  //           }     ,
  //           1150:{
  //               slidesPerView:4,
  //           }
  //       }
  //   }
  // );
    // const  celebrityRequestContentSteps = new Swiper(".celebrity-request-content", {
    //     slidesPerView: 1.3,
    //     spaceBetween: 25,
    //     mousewheel: {
    //         forceToAxis: true,
    //         sensitivity: 1,
    //         releaseOnEdges: true,
    //     },
    //     pagination: {
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         460:{
    //             slidesPerView: 1.4,
    //         } ,
    //         640:{
    //             slidesPerView: 2.1,
    //         },
    //         850: {
    //             slidesPerView: 2.5,
    //         },
    //         950:{
    //             slidesPerView:3,
    //         }     ,
    //         1150:{
    //             slidesPerView:3,
    //         }
    //     }
    // });

    //show and hie function
    function showAndHide(opeEelementClass, hideElementCass, show) {
        const showE = document.querySelector(opeEelementClass);
        const hideE = document.querySelector(hideElementCass);
        const addInElement = document.querySelector(show);
        if(showE && hideE && addInElement){
            showE.addEventListener("click", function () {
                addInElement.classList.toggle("hide");
            });
            hideE.addEventListener("click", function () {
                addInElement.classList.toggle("hide");
            });
        }

    }




    //activate toggle menu
    const toggleMenu = document.querySelector('#nav__toggle-icon');
    //close button
    const closeButton = document.querySelector('#close-icon');
    //add or remove class active
    toggleMenu.addEventListener('click', function () {
        document.querySelector('.nav__list').classList.toggle('show-menu');
    });
    closeButton.addEventListener('click', function () {
        document.querySelector('.nav__list').classList.toggle('show-menu');
    });



    //select has-submenu
    const hasSubmenu = document.querySelectorAll('.has-submenu');
    //select submenu
    hasSubmenu.forEach(function (item) {
        //select ul element of item
        const submenu = item.querySelector('ul');
        const icon = item.querySelector('.nav_link_icon > i');
        icon.addEventListener('click', function () {
            submenu.classList.toggle('show-submenu');
            //remplace icon
            if (icon.classList.contains('ri-arrow-right-s-line')) {
                icon.classList.remove('ri-arrow-right-s-line');
                icon.classList.add('ri-arrow-down-s-line');
            }else{
                icon.classList.add('ri-arrow-right-s-line');
                icon.classList.remove('ri-arrow-down-s-line');
            }
        });

    })



}
