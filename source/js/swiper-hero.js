// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import 'swiper/css/grid';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

// Слайдер для Блока Промо
document.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = document.querySelector('.hero__swiper-wrap');
  const pagination = document.querySelector('.hero__pagination');

  const heroSlider = new Swiper(heroSwiper, {
    modules: [Pagination],
    loop: true,
    speed: 500,
    effect: 'fade',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function updatePaginationPosition() {
    const currentSlide = heroSlider.slides[heroSlider.activeIndex];
    const heroContentRect = currentSlide.querySelector('.hero-content').getBoundingClientRect();
    const swiperContainerRect = heroSwiper.getBoundingClientRect();

    // Рассчитываем позицию пагинации относительно блока .hero-content текущего слайда
    const topPosition = heroContentRect.top - swiperContainerRect.top - pagination.offsetHeight;

    // Устанавливаем новую позицию пагинации
    pagination.style.top = `${topPosition}px`;
  }

  // Обновляем позицию пагинации при загрузке страницы, при изменении размера окна и при изменении слайда
  window.addEventListener('resize', updatePaginationPosition);
  heroSlider.on('slideChangeTransitionEnd', updatePaginationPosition);
  updatePaginationPosition();
});
