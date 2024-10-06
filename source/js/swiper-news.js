// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import 'swiper/css/grid';
import { Pagination, Navigation, Grid } from 'swiper/modules';
import 'swiper/css';

// Слайдер для Блока Новости
document.addEventListener('DOMContentLoaded', () => {
  const newsSwiper = document.querySelector('.news__container');
  const newsSlider = new Swiper(newsSwiper, {
    modules: [Pagination, Navigation, Grid],
    speed: 500,
    effect: 'fade',
    watchOverflow: true,
    grabCursor: true,
    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        slidesPerGroup: 3,
        on: {
          init: function () {
            this.slides.each((index, slide) => {
              if ((index + 1) % 3 === 1) {
                slide.style.width = '604px';
              } else {
                slide.style.width = '286px';
              }
            });
          },
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        grid: {
          rows: 2,
          fill: 'row',
        },
        // on: {
        //   init: function () {
        //     this.slides.each((index, slide) => {
        //       if (index % 4 === 1 || index % 4 === 3) {
        //         slide.style.height = '240px';
        //       } else {
        //         slide.style.height = '330px';
        //       }
        //     });
        //   },
        // },
      },
    },
    navigation: {
      nextEl: '.swiper-buttons__next',
      prevEl: '.swiper-buttons__prev',
    },
    pagination: {
      el: '.news__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    }
  });

  function setSlideHeights() {
    const slides = document.querySelectorAll('.news-slider__slide');
    slides.forEach((slide, index) => {
      if (index % 4 === 1 || index % 4 === 3) {
        slide.style.height = '240px';
      } else {
        slide.style.height = '330px';
      }
    });
  }

  newsSlider.on('init', () => {
    setSlideHeights();
    window.dispatchEvent(new Event('resize'));
  });

  newsSlider.on('slideChange', () => {
    setSlideHeights();
  });

  // Функция для обновления пагинации
  function updatePagination() {
    const totalSlides = newsSlider.slides.length;
    const currentSlide = newsSlider.realIndex + 1;
    const paginationContainer = document.querySelector('.news__pagination');
    // paginationContainer.innerHTML = ''; // Очищаем текущую пагинацию

    let startIndex, endIndex;

    if (totalSlides <= 4) {
      // Если слайдов 4 или меньше, показываем все кнопки
      startIndex = 0;
      endIndex = totalSlides;
    } else {
      // Иначе, показываем 4 кнопки с учетом текущего слайда
      if (currentSlide <= 3) {
        startIndex = 0;
        endIndex = 4;
      } else if (currentSlide >= totalSlides - 2) {
        startIndex = totalSlides - 4;
        endIndex = totalSlides;
      } else {
        startIndex = currentSlide - 2;
        endIndex = currentSlide + 2;
      }
    }

    for (let i = startIndex; i < endIndex; i++) {
      const bullet = document.createElement('span');
      bullet.className = 'swiper-pagination-bullet';
      bullet.textContent = i + 1;
      bullet.addEventListener('click', () => {
        newsSlider.slideTo(i);
      });
      paginationContainer.appendChild(bullet);
    }

    // Обновляем активный элемент пагинации
    const bullets = paginationContainer.querySelectorAll('.swiper-pagination-bullet');
    bullets.forEach((bullet, index) => {
      if (index + startIndex === currentSlide - 1) {
        bullet.classList.add('swiper-pagination-bullet-active');
      } else {
        bullet.classList.remove('swiper-pagination-bullet-active');
      }
    });
  }

  // Инициализация пагинации
  updatePagination();

  newsSlider.update();
});
