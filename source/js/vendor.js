// Swiper 7.4.1

import './vendor/swiper';
import './vendor/focus-visible-polyfill';

// слайдер отзывов
export const reviewsSlider = () => {
  return new Swiper('[data-reviews-slider]', { // eslint-disable-line
    autoHeight: true,
    navigation: {
      nextEl: '[data-reviews-slider-next-btn]',
      prevEl: '[data-reviews-slider-prev-btn]',
    },
    mousewheel: false,
    keyboard: true,
    loop: true,
  });
};
