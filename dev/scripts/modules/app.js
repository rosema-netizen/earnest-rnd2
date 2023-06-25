import 'popper.js';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/popover';
// import 'bootstrap-select';


class global {
    constructor() {
        this.myModal = document.getElementById('exampleModal')
        this.stickyHeader();
        this.megamenuPopup();
        this.toggleContent();
        this.readMore();
    }

    stickyHeader() {
        var elemBody = $('body');
        var pageHeader = $('.theme-header');
        if ($(elemBody).hasClass('home')) {
            $(pageHeader).addClass('theme-header--dark');
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.theme-header').addClass('sticky');
            } else {
                $('.theme-header').removeClass('sticky');
            }
        });
    }

    megamenuPopup() {
        var toggleBar = $('.navbar-toggle');
        var popupMenu = $('.megamenu-popup');
        var closePopup = $('.close-menu');
        $(toggleBar).click(function () {
            $(popupMenu).addClass('active');
        });
        $(closePopup).click(function () {
            $(popupMenu).removeClass('active');
        });
    }

    toggleContent() {
        var toggleContent = $('.toggle-text');
        var viewBtn = $('.toggleRead');
        $(viewBtn).click(function () {
            $(this).toggleClass('active');
            $(toggleContent).toggleClass('active');
        });
    }

    readMore() {
        $('.readmore').click(function () {
            $('.collapse-text').addClass('expand');
            $(this).hide();
        });
    }

}

export default global;
new global();

var swiper = new Swiper(".insightsSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
  });
