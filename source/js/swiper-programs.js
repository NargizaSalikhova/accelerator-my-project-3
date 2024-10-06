// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import 'swiper/css/grid';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';

// Слайдер для Блока Программы
const programsSwiper = document.querySelector('.programs__swiper');
const programsSlider = new Swiper(programsSwiper, {
  modules: [Scrollbar, Navigation],
  loop: true,
  speed: 500,
  effect: 'fade',
  watchOverflow: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 2.128,
      spaceBetween: 30,
      // on: {
      //   init: function () {
      //     console.log('Swiper initialized');
      //     console.log('Old dragSize:', this.params.dragSize);
      //     this.params.dragSize = 324; // Устанавливаем собственное значение как число
      //     console.log('New dragSize:', this.params.dragSize);
      //   }
      // }
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
    dragSize: '325px',
  },
});

programsSlider.update();
