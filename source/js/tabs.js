// Реализация таба в разделе Новости
const tabsTitle = document.querySelectorAll('.news__tab-title');
const tabsContent = document.querySelectorAll('.news__tab-content');

tabsTitle.forEach((item) => item.addEventListener('click', (evt) => {
  const tabsTitleTarget = evt.target.getAttribute('data-tab');

  tabsTitle.forEach((element) => element.classList.remove('active'));
  tabsContent.forEach((element) => element.classList.remove('active'));

  item.classList.add('active');

  document.getElementById(tabsTitleTarget).classList.add('active');
}));

document.querySelector('[data-tab="news-tab-1"]').classList.add('active');
document.querySelector('#news-tab-1').classList.add('active');

// Аккордеон Блок FAQ
document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.faq__button');

  titles.forEach((item) => item.addEventListener('click', () => {
    const activeContent = document.querySelector(`#${item.dataset.tab}`);

    if (item.classList.contains('active')) {
      item.classList.remove('active');
      item.closest('.faq__tab-item').classList.remove('active');
      activeContent.style.maxHeight = 0;
    } else {
      item.classList.add('active');
      item.closest('.faq__tab-item').classList.add('active');
      activeContent.style.maxHeight = `${activeContent.scrollHeight}px`;
    }
  }));

  const defaultButton = document.querySelector('[data-tab=faq-tab-3]');
  const defaultContent = document.querySelector('#faq-tab-3');

  defaultButton.classList.add('active');
  defaultButton.closest('.faq__tab-item').classList.add('active');
  defaultContent.style.maxHeight = `${defaultContent.scrollHeight}px`;
});
