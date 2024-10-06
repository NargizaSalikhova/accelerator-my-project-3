// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import 'swiper/css/grid';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';

// Слайдер для Блока Отзывы
const reviewsSwiper = document.querySelector('.reviews__swiper');
const reviewsSlider = new Swiper(reviewsSwiper, {
  modules: [Scrollbar, Navigation],
  speed: 500,
  effect: 'fade',
  watchOverflow: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 1.276,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.swiper-buttons__next',
    prevEl: '.swiper-buttons__prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
    dragSize: '326px',
  },
});

reviewsSlider.update();
