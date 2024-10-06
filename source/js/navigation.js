// Меню
const navButton = document.querySelector('.nav__button');
const navList = document.querySelector('.site-list');
const overlay = document.querySelector('.overlay');
const subgroupItem = document.querySelector('.subgroup__content-item');

// Открытие/закрытие навигации при клике на кнопку
navButton.addEventListener('click', function () {
  this.classList.toggle('active');
  navList.classList.toggle('open');
  subgroupItem.classList.remove('active');
  overlay.classList.toggle('open');
});

// Закрытие навигации при клике за её пределами
document.addEventListener('click', (evt) => {
  const isClickInside = navButton.contains(evt.target) || navList.contains(evt.target);

  if (!isClickInside) {
    navButton.classList.remove('active');
    navList.classList.remove('open');
    subgroupItem.classList.remove('active');
    overlay.classList.remove('open');
  }
});

// Меню -> подкатегории
document.addEventListener('DOMContentLoaded', () => {
  const subgroupItems = document.querySelectorAll('.subgroup');

  subgroupItems.forEach((item) => {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();

      const tabId = this.getAttribute('data-tab');
      const subgroupContent = document.getElementById(tabId);
      const subgroupLink = this.querySelector('.subgroup__title');

      const isSubgroupItemClick = evt.target.closest('.subgroup__content-item');

      if (!isSubgroupItemClick) {
        subgroupContent.classList.toggle('active');
        subgroupLink.classList.toggle('active');
      }
    });
  });
});
