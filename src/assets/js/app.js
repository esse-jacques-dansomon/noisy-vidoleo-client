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


    //
    //
    // //activate toggle menu
    // const toggleMenu = document.querySelector('#nav__toggle-icon');
    // //close button
    // const closeButton = document.querySelector('#close-icon');
    // //add or remove class active
    // toggleMenu.addEventListener('click', function () {
    //     document.querySelector('.nav__list').classList.toggle('show-menu');
    // });
    // closeButton.addEventListener('click', function () {
    //     document.querySelector('.nav__list').classList.toggle('show-menu');
    // });


}
