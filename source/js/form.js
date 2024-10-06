// Реализация Выпадающего списка
document.querySelectorAll('.form').forEach((form) => {
  const selectBtn = form.querySelector('.select__button');
  const selectList = form.querySelector('.select__list');
  const selectItems = form.querySelectorAll('.select__item');
  const selectInput = form.querySelector('.select__input-hidden');

  selectBtn.addEventListener('click', function () {
    selectList.classList.toggle('select__list--visible');
    this.classList.add('select__button--active');
    this.classList.toggle('select__button--open');
  });

  selectItems.forEach((selectItem) => {
    selectItem.addEventListener('click', function (evt) {
      evt.stopPropagation();
      selectBtn.innerText = this.innerText;
      selectBtn.focus();
      selectInput.value = this.dataset.value;
      selectList.classList.remove('select__list--visible');
      selectBtn.classList.remove('select__button--open');
    });
  });

  form.addEventListener('click', (evt) => {
    if (evt.target !== selectBtn) {
      selectBtn.classList.remove('select__button--active');
      selectBtn.classList.remove('select__button--open');
      selectList.classList.remove('select__list--visible');
      selectInput.value = '';
    }
  });

  form.addEventListener('keydown', (evt) => {
    if (evt.key === 'Tab' || evt.key === 'Escape') {
      selectBtn.classList.remove('select__button--active');
      selectBtn.classList.remove('select__button--open');
      selectList.classList.remove('select__list--visible');
      selectInput.value = '';
    }
  });
});

// Маска для поля телефона
document.querySelectorAll('.form__input--phone').forEach((phoneInput) => {
  phoneInput.addEventListener('input', function () {
    // Убираем все, кроме цифр и обрезаем до 11 цифр
    let input = this.value.replace(/\D/g, '').substring(0, 11);

    // Проверяем, начинается ли с '7'
    if (input.length === 0 || input.charAt(0) !== '7') {
      input = `7${input}`; // Добавляем 7, если пользователь не вводит её
    }

    // Формируем новый ввод
    let formattedInput = '+7 ';
    if (input.length > 1) {
      formattedInput += `(${input.substring(1, 4)}`; // Код региона
      if (input.length > 4) {
        formattedInput += `) ${input.substring(4, 7)}`; // Первые 3 цифры
        if (input.length > 7) {
          formattedInput += `-${input.substring(7, 9)}`; // Первые 2 последних цифры
          if (input.length > 9) {
            formattedInput += `-${input.substring(9, 11)}`; // Последние 2 цифры
          }
        }
      }
    }

    this.value = formattedInput.trim(); // Обновляем значение поля ввода
  });
});
