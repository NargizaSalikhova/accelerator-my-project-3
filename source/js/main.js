import './swiper-hero.js';
import './swiper-programs.js';
import './swiper-news.js';
import './swiper-reviews.js';
import './navigation.js';
import './tabs.js';
import './form.js';
// import './modal.js';
import './validation.js';


// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper';
// import 'swiper/css/grid';
// import {Navigation, Pagination, Scrollbar, Grid} from 'swiper/modules';
// import 'swiper/css';

// Слайдер для Блока Промо

// document.addEventListener('DOMContentLoaded', () => {
//   const heroSwiper = document.querySelector('.hero__swiper-wrap');
//   const pagination = document.querySelector('.hero__pagination');

//   const heroSlider = new Swiper(heroSwiper, {
//     modules: [Pagination],
//     loop: true,
//     speed: 500,
//     effect: 'fade',
//     grabCursor: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

//   function updatePaginationPosition() {
//     const currentSlide = heroSlider.slides[heroSlider.activeIndex];
//     const heroContentRect = currentSlide.querySelector('.hero-content').getBoundingClientRect();
//     const swiperContainerRect = heroSwiper.getBoundingClientRect();

//     // Рассчитываем позицию пагинации относительно блока .hero-content текущего слайда
//     const topPosition = heroContentRect.top - swiperContainerRect.top - pagination.offsetHeight;

//     // Устанавливаем новую позицию пагинации
//     pagination.style.top = `${topPosition}px`;
//   }

//   // Обновляем позицию пагинации при загрузке страницы, при изменении размера окна и при изменении слайда
//   window.addEventListener('resize', updatePaginationPosition);
//   heroSlider.on('slideChangeTransitionEnd', updatePaginationPosition);
//   updatePaginationPosition();
// });

// Меню

// const navButton = document.querySelector('.nav__button');
// const navList = document.querySelector('.site-list');
// const overlay = document.querySelector('.overlay');
// const subgroupItem = document.querySelector('.subgroup__content-item');

// // Открытие/закрытие навигации при клике на кнопку
// navButton.addEventListener('click', function() {
//   this.classList.toggle('active');
//   navList.classList.toggle('open');
//   subgroupItem.classList.remove('active');
//   overlay.classList.toggle('open');
// });

// // Закрытие навигации при клике за её пределами
// document.addEventListener('click', (evt) => {
//   const isClickInside = navButton.contains(evt.target) || navList.contains(evt.target);

//   if (!isClickInside) {
//     navButton.classList.remove('active');
//     navList.classList.remove('open');
//     subgroupItem.classList.remove('active');
//     overlay.classList.remove('open');
//   }
// });

// // Меню -> подкатегории

// document.addEventListener('DOMContentLoaded', () => {
//   const subgroupItems = document.querySelectorAll('.subgroup');

//   subgroupItems.forEach((item) => {
//     item.addEventListener('click', function(evt) {
//       evt.preventDefault();

//       const tabId = this.getAttribute('data-tab');
//       const subgroupContent = document.getElementById(tabId);
//       const subgroupLink = this.querySelector('.subgroup__title');

//       const isSubgroupItemClick = evt.target.closest('.subgroup__content-item');

//       if (!isSubgroupItemClick) {
//         subgroupContent.classList.toggle('active');
//         subgroupLink.classList.toggle('active');
//       }
//     });
//   });
// });


// Слайдер для Блока Программы

// const programsSwiper = document.querySelector('.programs__swiper');
// const programsSlider = new Swiper(programsSwiper, {

//   modules: [Scrollbar, Navigation],

//   loop: true,
//   speed: 500,
//   effect: 'fade',
//   watchOverflow: true,
//   grabCursor: true,

//   breakpoints: {
//     1440: {
//       slidesPerView: 3,
//       spaceBetween: 32,
//       allowTouchMove: false,
//     },

//     768: {
//       slidesPerView: 2.14,
//       spaceBetween: 30,
//     },

//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//   },

//   navigation: {
//     nextEl: '.swiper-buttons__next',
//     prevEl: '.swiper-buttons__prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//     hide: false,
//     draggable: true,
//   },
// });

// programsSlider.update();


// Блок Новости

// Реализация таба в разделе Новости
// const tabsTitle = document.querySelectorAll('.news__tab-title');
// const tabsContent = document.querySelectorAll('.news__tab-content');

// tabsTitle.forEach((item) => item.addEventListener('click', (evt) => {
//   const tabsTitleTarget = evt.target.getAttribute('data-tab');

//   tabsTitle.forEach((element) => element.classList.remove('active'));
//   tabsContent.forEach((element) => element.classList.remove('active'));

//   item.classList.add('active');

//   document.getElementById(tabsTitleTarget).classList.add('active');
// }));

// document.querySelector('[data-tab="news-tab-1"]').classList.add('active');
// document.querySelector('#news-tab-1').classList.add('active');

// //Слайдер для Блока Новости
// document.addEventListener('DOMContentLoaded', () => {
//   const newsSwiper = document.querySelector('.news__container');
//   const newsSlider = new Swiper(newsSwiper, {
//     modules: [Pagination, Navigation, Grid],
//     speed: 500,
//     effect: 'fade',
//     watchOverflow: true,
//     grabCursor: true,

//     breakpoints: {
//       1440: {
//         slidesPerView: 'auto',
//         spaceBetween: 32,
//         slidesPerGroup: 3,

//         on: {
//           init: function () {
//             this.slides.each((index, slide) => {
//               if ((index + 1) % 3 === 1) {
//                 slide.style.width = '604px';
//               } else {
//                 slide.style.width = '286px';
//               }
//             });
//           },
//         },
//       },

//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//         slidesPerGroup: 2,
//         grid: {
//           rows: 2,
//           fill: 'row',
//         },
//       },

//       320: {
//         slidesPerView: 1, // кол-во слайдов на стр
//         spaceBetween: 0,
//         slidesPerGroup: 1, // по ск-ко слайдов листает
//         // slidesPerColumn: 2,
//         // autoHeight: false,
//         grid: {
//           rows: 2,
//           fill: 'row',
//         },
//         // on: {
//         //   init: function () {
//         //     this.slides.each((index, slide) => {
//         //       if (index % 4 === 1 || index % 4 === 3) {
//         //         slide.style.height = '240px';
//         //       } else {
//         //         slide.style.height = '330px';
//         //       }
//         //     });
//         //   },
//         // },
//       },
//     },

//     navigation: {
//       nextEl: '.swiper-buttons__next',
//       prevEl: '.swiper-buttons__prev',
//     },

//     pagination: {
//       el: '.news__pagination',
//       clickable: true,
//       // dynamicBullets: true,
//       // dynamicMainBullets: 4,
//       renderBullet: function(index, className) {
//         return `<span class="${className}">${index + 1}</span>`;
//       },
//     },
//   });

//   // Функция для установки высоты слайдов
//   function setSlideHeights() {
//     const slides = document.querySelectorAll('.news-slider__slide');

//     slides.forEach((slide, index) => {
//       if (index % 4 === 1 || index % 4 === 3) {
//         slide.style.height = '240px'; // Высота для четных слайдов
//         // slide.style.margin = '0px 20px 0px 0px';
//       } else {
//         slide.style.height = '330px'; // Высота для нечетных слайдов
//       }
//     });
//   }

//   // Устанавливаем высоту слайдов после инициализации Swiper
//   newsSlider.on('afterInit', () => {
//     setSlideHeights();
//     window.dispatchEvent(new Event('resize'));
//   });

//   // // Устанавливаем высоту слайдов при смене слайда
//   newsSlider.on('slideChange', () => {
//     setSlideHeights();
//   });

  // Проверяем ширину экрана и вызываем функцию setSlideHeights только для мобильной версии
  // function checkScreenWidth() {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth <= 768) { // Мобильная версия
  //     setSlideHeights();
  //     newsSlider.on('slideChange', () => {
  //       setSlideHeights();
  //     });
  //   } else {
  //     newsSlider.off('slideChange', setSlideHeights);
  //   }
  // }

  // // Вызываем функцию при инициализации Swiper
  // newsSlider.on('afterInit', () => {
  //   checkScreenWidth();
  // });

  // // Вызываем функцию при изменении размера окна
  // window.addEventListener('resize', () => {
  //   checkScreenWidth();
  // });

  // // Вызываем функцию setSlideHeights после загрузки страницы
  // window.addEventListener('load', () => {
  //   checkScreenWidth();
  // });

  // updatePagination();
//   newsSlider.update();
// });

// Аккордеон Блок FAQ

// document.addEventListener('DOMContentLoaded', () => {
//   const titles = document.querySelectorAll('.faq__button');

//   titles.forEach((item) => item.addEventListener('click', () => {
//     const activeContent = document.querySelector(`#${item.dataset.tab}`);

//     if (item.classList.contains('active')) {
//       item.classList.remove('active');
//       item.closest('.faq__tab-item').classList.remove('active');
//       activeContent.style.maxHeight = 0;
//     } else {
//       item.classList.add('active');
//       item.closest('.faq__tab-item').classList.add('active');
//       activeContent.style.maxHeight = `${activeContent.scrollHeight}px`;
//     }
//   }));

//   const defaultButton = document.querySelector('[data-tab=faq-tab-3]');
//   const defaultContent = document.querySelector('#faq-tab-3');

//   defaultButton.classList.add('active');
//   defaultButton.closest('.faq__tab-item').classList.add('active');
//   defaultContent.style.maxHeight = `${defaultContent.scrollHeight}px`;
// });

// Слайдер для Блока Отзывы

// const reviewsSwiper = document.querySelector('.reviews__swiper');
// const reviewsSlider = new Swiper(reviewsSwiper, {

//   modules: [Scrollbar, Navigation],

//   speed: 500,
//   effect: 'fade',
//   watchOverflow: true,
//   grabCursor: true,

//   breakpoints: {
//     1440: {
//       slidesPerView: 2,
//       spaceBetween: 32,
//       allowTouchMove: false,
//     },

//     768: {
//       slidesPerView: 1.271,
//       spaceBetween: 30,
//     },

//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//   },

//   navigation: {
//     nextEl: '.swiper-buttons__next',
//     prevEl: '.swiper-buttons__prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//     hide: false,
//     draggable: true,
//   },
// });

// reviewsSlider.update();

// Блок Форма

// Реализация Выпадающего списка
// document.querySelectorAll('.form').forEach((form) => {
//   const selectBtn = form.querySelector('.select__button');
//   const selectList = form.querySelector('.select__list');
//   const selectItems = form.querySelectorAll('.select__item');
//   const selectInput = form.querySelector('.select__input-hidden');

//   selectBtn.addEventListener('click', function() {
//     selectList.classList.toggle('select__list--visible');
//     this.classList.add('select__button--active');
//     this.classList.toggle('select__button--open');
//   });

//   selectItems.forEach((selectItem) => {
//     selectItem.addEventListener('click', function(evt) {
//       evt.stopPropagation();
//       selectBtn.innerText = this.innerText;
//       selectBtn.focus();
//       selectInput.value = this.dataset.value;
//       selectList.classList.remove('select__list--visible');
//       selectBtn.classList.remove('select__button--open');
//     });
//   });

//   form.addEventListener('click', (evt) => {
//     if (evt.target !== selectBtn) {
//       selectBtn.classList.remove('select__button--active');
//       selectBtn.classList.remove('select__button--open');
//       selectList.classList.remove('select__list--visible');
//       selectInput.value = '';
//     }
//   });

//   form.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Tab' || evt.key === 'Escape') {
//       selectBtn.classList.remove('select__button--active');
//       selectBtn.classList.remove('select__button--open');
//       selectList.classList.remove('select__list--visible');
//       selectInput.value = '';
//     }
//   });
// });

// Модальное окно
// const modalContoll = ({modal, btnOpen, btnClose}) => {
//   const modalElement = document.querySelector(modal);
//   const modalOpenBtn = document.querySelector(btnOpen);
//   const modalCloseBtn = document.querySelector(btnClose);

//   modalElement.style.cssText = `
//     display: block;
//     visibility: hidden;
//     opacity: 0;
//     transition: opacity 0.3s ease-in-out;
//     `;

//   const clearFormInputs = () => {
//     const inputs = modalElement.querySelectorAll('input');
//     const selectButton = modalElement.querySelector('.select__button');

//     inputs.forEach((input) => {
//       if (input.type === 'checkbox') {
//         input.checked = false;
//       } else {
//         input.value = '';
//       }
//     });

//     if (selectButton) {
//       selectButton.innerText = '';
//     }
//   };

//   const closeModal = (evt) => {
//     const target = evt.target;

//     if (target === modalElement || target === modalCloseBtn || evt.code === 'Escape') {
//       // modalElement.style.display = 'none';
//       modalElement.style.opacity = '0';

//       setTimeout(() => {
//         modalElement.style.visibility = 'hidden';
//         window.removeEventListener('keydown', closeModal);
//         clearFormInputs();
//       }, 300);
//     }
//   };

//   const openModal = () => {
//     // modalElement.style.display = 'block';
//     modalElement.style.visibility = 'visible';
//     modalElement.style.opacity = '1';
//     window.addEventListener('keydown', closeModal);
//   };

//   modalOpenBtn.addEventListener('click', openModal);
//   modalElement.addEventListener('click', closeModal);
// };

// modalContoll({
//   modal: '.modal',
//   btnOpen: '.about__button',
//   btnClose: '.modal__close',
// });

// Валидация и отправка формы
// document.addEventListener('DOMContentLoaded', () => {
//   const forms = document.querySelectorAll('.form, .form--modal');

//   const PATTERNS = {
//     name: /^[A-Za-zА-Яа-я\s]+$/,
//     phone: /^((\+7|7|8)+([0-9]){10})$/
//   };

//   function addErrorClass(element, errorClass) {
//     element.classList.add(errorClass);
//   }

//   function removeErrorClass(element, errorClass) {
//     element.classList.remove(errorClass);
//   }

//   function validateInput(input, pattern, errorClass) {
//     if (input.value.trim() === '') {
//       addErrorClass(input, errorClass);
//       return false;
//     }
//     if (pattern && !pattern.test(input.value)) {
//       addErrorClass(input, errorClass);
//       return false;
//     }
//     removeErrorClass(input, errorClass);
//     return true;
//   }

//   function validateCheckbox(checkbox, errorClass) {
//     if (!checkbox.checked) {
//       addErrorClass(checkbox, errorClass);
//       return false;
//     }
//     removeErrorClass(checkbox, errorClass);
//     return true;
//   }

//   function onInputChange(input, pattern, errorClass) {
//     validateInput(input, pattern, errorClass);
//   }

//   function onCheckboxChange(checkbox, errorClass) {
//     validateCheckbox(checkbox, errorClass);
//   }

//   function onValidateForm(form, evt) {
//     const errorClasses = ['form__input--error', 'checkbox__input--error', 'select__button--error'];

//     errorClasses.forEach((errorClass) => {
//       form.querySelectorAll(`.${errorClass}`).forEach((element) => {
//         removeErrorClass(element, errorClass);
//       });
//     });

//     let isValid = true;

//     const nameInput = form.querySelector('.form__input--name');
//     const phoneInput = form.querySelector('.form__input--phone');
//     const textInput = form.querySelector('.form__input--feedback');
//     const checkboxInput = form.querySelector('.checkbox__input');
//     // const selectInputHidden = form.querySelector('.select__input-hidden');
//     // const selectButton = form.querySelector('.select__button');

//     isValid = validateInput(nameInput, PATTERNS.name, 'form__input--error') && isValid;
//     isValid = validateInput(phoneInput, PATTERNS.phone, 'form__input--error') && isValid;
//     isValid = validateCheckbox(checkboxInput, 'checkbox__input--error') && isValid;

//     if (textInput && textInput.value.trim() === '') {
//       addErrorClass(textInput, 'form__input--error');
//       isValid = false;
//     }

//     // if (selectInputHidden.value === '') {
//     //   addErrorClass(selectButton, 'select__button--error');
//     //   isValid = false;
//     // } else {
//     //   removeErrorClass(selectButton, 'select__button--error');
//     // }

//     if (!isValid) {
//       evt.preventDefault();
//     }

//     return isValid;
//   }

//   function clearForm(form) {
//     const inputs = form.querySelectorAll('input, textarea');
//     inputs.forEach((input) => {
//       if (input.type === 'checkbox') {
//         input.checked = false;
//       } else {
//         input.value = '';
//       }
//     });

//     const selectButton = form.querySelector('.select__button');
//     if (selectButton) {
//       selectButton.innerText = '';
//     }
//   }

//   forms.forEach((form) => {
//     const nameInput = form.querySelector('.form__input--name');
//     const phoneInput = form.querySelector('.form__input--phone');
//     const checkboxInput = form.querySelector('.checkbox__input');
//     const textInput = form.querySelector('.form__input--feedback');

//     if (form.contains(textInput)) {
//       textInput.addEventListener('click', function() {
//         this.setSelectionRange(0, 0);
//       });
//     }

//     nameInput.addEventListener('input', () => onInputChange(nameInput, PATTERNS.name, 'form__input--error'));
//     phoneInput.addEventListener('input', () => onInputChange(phoneInput, PATTERNS.phone, 'form__input--error'));
//     checkboxInput.addEventListener('change', () => onCheckboxChange(checkboxInput, 'checkbox__input--error'));

//     form.addEventListener('submit', (evt) => {
//       evt.preventDefault();

//       if (onValidateForm(form, evt)) {
//         const formData = new FormData(form);

//         fetch(form.action, {
//           method: form.method,
//           body: formData
//         })
//           .then((response) => response.text())
//           .then((data) => {
//             console.log('Успешная отправка:', data);
//             clearForm(form);

//             if (form.closest('.form--modal')) {
//               // closeModal(form.closest('.form--modal'));
//             }
//           })
//           .catch((error) => {
//             console.error('Ошибка при отправке:', error);
//           });
//       }
//     });
//   });
// });

// const phoneInputs = document.querySelectorAll('.form__input--phone');

// phoneInput.addEventListener('input', function () {
//   // Убираем все, кроме цифр
//   let input = this.value.replace(/\D/g, '');

//   // Проверяем, начинается ли с '7'
//   if (input.length === 0 || input.charAt(0) !== '7') {
//     input = `7${input}`; // Добавляем 7, если пользователь не вводит её
//   }

//   // Обрезаем до 11 цифр
//   input = input.substring(0, 11);

//   // Формируем новый ввод
//   let formattedInput = '+7 ';
//   if (input.length > 1) {
//     formattedInput += `(${input.substring(1, 4)}`; // Код региона
//     if (input.length > 4) {
//       formattedInput += `) ${input.substring(4, 7)}`; // Первые 3 цифры
//       if (input.length > 7) {
//         formattedInput += `-${input.substring(7, 9)}`; // Первые 2 последних цифры
//         if (input.length > 9) {
//           formattedInput += `-${input.substring(9, 11)}`; // Последние 2 цифры
//         }
//       }
//     }
//   }

//   this.value = formattedInput.trim(); // Обновляем значение поля ввода
// });

// const formatPhoneNumber = (input) => {
//   // Убираем все, кроме цифр
//   let phoneNumber = input.value.replace(/\D/g, '');

//   // Проверяем, начинается ли с '7'
//   if (phoneNumber.length === 0 || phoneNumber.charAt(0) !== '7') {
//     phoneNumber = `7${phoneNumber}`; // Добавляем 7, если пользователь не вводит её
//   }

//   // Обрезаем до 11 цифр
//   phoneNumber = phoneNumber.substring(0, 11);

//   // Формируем новый ввод
//   let formattedPhoneNumber = '+7 ';
//   if (phoneNumber.length > 1) {
//     formattedPhoneNumber += `(${phoneNumber.substring(1, 4)}`; // Код региона
//     if (phoneNumber.length > 4) {
//       formattedPhoneNumber += `) ${phoneNumber.substring(4, 7)}`; // Первые 3 цифры
//       if (phoneNumber.length > 7) {
//         formattedPhoneNumber += `-${phoneNumber.substring(7, 9)}`; // Первые 2 последних цифры
//         if (phoneNumber.length > 9) {
//           formattedPhoneNumber += `-${phoneNumber.substring(9, 11)}`; // Последние 2 цифры
//         }
//       }
//     }
//   }

//   input.value = formattedPhoneNumber.trim(); // Обновляем значение поля ввода
// };

// Добавляем обработчик событий для каждого поля ввода телефона
// phoneInputs.forEach((input) => {
//   input.addEventListener('input', () => formatPhoneNumber(input));
// });



// Сбрасываем фокус с кнопки после клика



// document.querySelectorAll('.link-btn, .swiper-buttons__next, .swiper-buttons__prev, .nav__button, .site-list__item--subgroup, .faq__button, .news__tab-title, .select__button, .modal__close').forEach((button) => {
//   button.addEventListener('click', () => {
//     button.blur();
//   });
// });
