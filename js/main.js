document.addEventListener('DOMContentLoaded', function () {

    /* Код для нумерации в карточках */
    const cardsNums = document.querySelectorAll('.main-item__num span');
    const slideNums = document.querySelectorAll('.main-slide-item__num span');

    function countNums(container) {
        container.forEach(function (num, index) {
            num.textContent = index + 1;
        });
    }

    countNums(cardsNums);
    countNums(slideNums);

    /* Попап */

    const popupBtn = document.querySelector('[data-btn="popup"]');
    const popupCloseBtn = document.querySelector('.popup-window__close');
    const popupOverlay = document.querySelector('.popup-overlay');
    const body = document.querySelector('body');

    popupBtn.addEventListener('click', function () {
        popupOverlay.classList.add('popup-overlay_active');
        body.classList.add('stop-scroll');
    });

    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay && popupOverlay.classList.contains('popup-overlay_active')) {
            popupOverlay.classList.remove('popup-overlay_active');
            body.classList.remove('stop-scroll');

        }
    });

    body.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && popupOverlay.classList.contains('popup-overlay_active')) {
            popupOverlay.classList.remove('popup-overlay_active');
            body.classList.remove('stop-scroll');

        }
    });


    popupCloseBtn.addEventListener('click', function () {
        if (popupOverlay.classList.contains('popup-overlay_active')) {
            popupOverlay.classList.remove('popup-overlay_active');
            body.classList.remove('stop-scroll');

        }
    });


    /* Бургер */

    const burger = document.querySelector('.main__burger');
    const burgerClose = document.querySelector('.main-mobile__close');
    const wrapperOverlay = document.querySelector('.wrapper-overlay');
    const mobileMenu = document.querySelector('.main-mobile');

    burger.addEventListener('click', function () {
        wrapperOverlay.classList.add('wrapper-overlay_active');
        mobileMenu.classList.add('main-mobile_active');
        body.classList.add('stop-scroll');
    });

    burgerClose.addEventListener('click', function () {
        wrapperOverlay.classList.remove('wrapper-overlay_active');
        mobileMenu.classList.remove('main-mobile_active');
        body.classList.remove('stop-scroll');
    });

    wrapperOverlay.addEventListener('click', function () {
        if (wrapperOverlay.classList.contains('wrapper-overlay_active')) {

            wrapperOverlay.classList.remove('wrapper-overlay_active');
            mobileMenu.classList.remove('main-mobile_active');
            body.classList.remove('stop-scroll');
        }
    });




    /* Слайдер */

    new Swiper('.main__slider', {
        loop: true,
        draggable: true,
            slidesPerView: 1,
        grabCursor: true,
        navigation: {
            nextEl: '.main__control .swiper-button-next',
            prevEl: '.main__control .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            976: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
    });
});

