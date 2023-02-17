import {
  // addLeadZero,
} from './utils.js';

export const Options = {
  Swiper: {
    Hero: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: '.hero__prev',
        nextEl: '.hero__next',
      },
      pagination: {
        el: '.hero__pagination',
        clickable: false,
      },
    },
    Actions: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.actions__pagination',
        clickable: false,
      },
      navigation: {
        prevEl: '.actions__prev',
        nextEl: '.actions__next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    },
    Testimonials: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.testimonials__pagination',
        clickable: false,
      },
      navigation: {
        prevEl: '.testimonials__prev',
        nextEl: '.testimonials__next',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    },
    About: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: '.about__prev',
        nextEl: '.about__next',
      },
      pagination: {
        el: '.about__pagination',
        clickable: false,
      },
    },
    Product: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: '.product-slider__prev',
        nextEl: '.product-slider__next',
      },
    },
  },
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  ValidationErrors: {
    errorFieldCssClass: 'invalid',
    errorLabelStyle: {
      color: '#E30613',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
  },
  Observer: {
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
    Map: {
      rootMargin: '0px',
      threshold: 0.15,
    },
  },
  RequestOptions: {
    HandlerURL: './local/scripts/order-form.php',
    MethodGet: 'GET',
    MethodPost: 'POST',
  },
  Map: {
    Main: {
      ID: 'contacts-map',
      center: [ 53.284081, 45.027695 ],
      zoom: 15,
      customIcon: true,
      customIconProperties: {
        iconImageHref: '../img/pin-map.svg',
        iconImageSize: [ 40, 44 ],
        iconImageOffset: [ -20, -40 ]
      },
    },
  },
  Tabs: {
    Product: {
      activeBtnClass: 'product-tabs__btn--active',
    },
  },
};
