import {modalControll} from './modal';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.form');

  const PATTERNS = {
    name: /^[A-Za-zА-Яа-я\s]{2,}$/,
    phone: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/
  };

  const ERROR_CLASSES = ['form__input--error', 'checkbox__input--error', 'select__button--error'];

  function addErrorClass(element, errorClass) {
    element.classList.add(errorClass);
  }

  function removeErrorClass(element, errorClass) {
    element.classList.remove(errorClass);
  }

  function validateInput(input, pattern, errorClass) {
    if (input.value.trim() === '' || (pattern && !pattern.test(input.value))) {
      addErrorClass(input, errorClass);
      return false;
    }
    removeErrorClass(input, errorClass);
    return true;
  }

  function validateCheckbox(checkbox, errorClass) {
    if (!checkbox.checked) {
      addErrorClass(checkbox, errorClass);
      return false;
    }
    removeErrorClass(checkbox, errorClass);
    return true;
  }

  // function validateSelect(selectInputHidden, selectButton, errorClass) {
  //   if (selectInputHidden.value === '') {
  //     addErrorClass(selectButton, errorClass);
  //     return false;
  //   }
  //   removeErrorClass(selectButton, errorClass);
  //   return true;
  // }

  function onInputChange(input, pattern, errorClass) {
    validateInput(input, pattern, errorClass);
  }

  function onCheckboxChange(checkbox, errorClass) {
    validateCheckbox(checkbox, errorClass);
  }

  function onValidateForm(form, evt) {
    ERROR_CLASSES.forEach((errorClass) => {
      form.querySelectorAll(`.${errorClass}`).forEach((element) => {
        removeErrorClass(element, errorClass);
      });
    });

    let isValid = true;

    const nameInput = form.querySelector('.form__input--name');
    const phoneInput = form.querySelector('.form__input--phone');
    const textInput = form.querySelector('.form__input--feedback');
    const checkboxInput = form.querySelector('.checkbox__input');
    // const selectInputHidden = form.querySelector('.select__input-hidden');
    // const selectButton = form.querySelector('.select__button');

    isValid = validateInput(nameInput, PATTERNS.name, 'form__input--error') && isValid;
    isValid = validateInput(phoneInput, PATTERNS.phone, 'form__input--error') && isValid;
    isValid = validateCheckbox(checkboxInput, 'checkbox__input--error') && isValid;
    // isValid = validateSelect(selectInputHidden, selectButton, 'select__button--error') && isValid;

    if (textInput && textInput.value.trim() === '') {
      addErrorClass(textInput, 'form__input--error');
      isValid = false;
    }

    if (!isValid) {
      evt.preventDefault();
    }

    return isValid;
  }

  function clearForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      if (input.type === 'checkbox') {
        input.checked = false;
      } else {
        input.value = '';
      }
    });

    const selectButton = form.querySelector('.select__button');
    if (selectButton) {
      selectButton.innerText = '';
    }
  }

  forms.forEach((form) => {
    const nameInput = form.querySelector('.form__input--name');
    const phoneInput = form.querySelector('.form__input--phone');
    const checkboxInput = form.querySelector('.checkbox__input');
    const textInput = form.querySelector('.form__input--feedback');

    if (form.contains(textInput)) {
      textInput.addEventListener('click', function() {
        this.setSelectionRange(0, 0);
      });
    }

    nameInput.addEventListener('input', () => onInputChange(nameInput, PATTERNS.name, 'form__input--error'));
    phoneInput.addEventListener('input', () => onInputChange(phoneInput, PATTERNS.phone, 'form__input--error'));
    checkboxInput.addEventListener('change', () => onCheckboxChange(checkboxInput, 'checkbox__input--error'));

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      if (onValidateForm(form, evt)) {
        const formData = new FormData(form);

        fetch(form.action, {
          method: form.method,
          body: formData
        })
          .then((response) => response.text())
          .then(() => {
            clearForm(form);

            if (form.closest('.form--modal')) {
              const modal = modalControll({
                modal: '.modal',
                btnOpen: '.about__button',
                btnClose: '.modal__close'
              });
              modal.closeModal({ target: form.closest('.modal') });
            }
          })
          .catch(() => {
          });
      }
    });
  });
});
