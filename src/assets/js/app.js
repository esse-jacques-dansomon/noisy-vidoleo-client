window.onload = function() {
    /*=================SWIPER INITIALISE======================*/

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


    //
    // //select has-submenu
    // const hasSubmenu = document.querySelectorAll('.has-submenu');
    // //select submenu
    // hasSubmenu.forEach(function (item) {
    //     //select ul element of item
    //     const submenu = item.querySelector('ul');
    //     const icon = item.querySelector('.nav_link_icon > i');
    //     icon.addEventListener('click', function () {
    //         submenu.classList.toggle('show-submenu');
    //         //remplace icon
    //         if (icon.classList.contains('ri-arrow-right-s-line')) {
    //             icon.classList.remove('ri-arrow-right-s-line');
    //             icon.classList.add('ri-arrow-down-s-line');
    //         }else{
    //             icon.classList.add('ri-arrow-right-s-line');
    //             icon.classList.remove('ri-arrow-down-s-line');
    //         }
    //     });
    //
    // })



}
