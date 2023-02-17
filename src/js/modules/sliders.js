import {
  Options,
} from './options.js';

const initSlider = ( selector, options ) => {
  if ( !document.querySelector( selector ) ) return;
  const slider = new Swiper( document.querySelector( selector ), options );
  return slider;
};

initSlider( '.hero', Options.Swiper.Hero );
initSlider( '.actions__slider', Options.Swiper.Actions );
initSlider( '.testimonials__slider', Options.Swiper.Testimonials );
initSlider( '.about__slider', Options.Swiper.About );
initSlider( '.product-slider', Options.Swiper.Product );
