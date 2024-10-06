// Модальное окно
const modalControll = ({ modal, btnOpen, btnClose }) => {
  const modalElement = document.querySelector(modal);
  const modalOpenBtn = document.querySelector(btnOpen);
  const modalCloseBtn = document.querySelector(btnClose);

  modalElement.style.cssText = `
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    `;

  const clearFormInputs = () => {
    const inputs = modalElement.querySelectorAll('input');
    const selectButton = modalElement.querySelector('.select__button');

    inputs.forEach((input) => {
      if (input.type === 'checkbox') {
        input.checked = false;
      } else {
        input.value = '';
      }
    });

    if (selectButton) {
      selectButton.innerText = '';
    }
  };

  const closeModal = (evt) => {
    const target = evt.target;

    if (target === modalElement || target === modalCloseBtn || evt.code === 'Escape') {
      modalElement.style.opacity = '0';

      setTimeout(() => {
        modalElement.style.visibility = 'hidden';
        window.removeEventListener('keydown', closeModal);
        clearFormInputs();
      }, 300);
    }
  };

  const openModal = () => {
    modalElement.style.visibility = 'visible';
    modalElement.style.opacity = '1';
    window.addEventListener('keydown', closeModal);
  };

  modalOpenBtn.addEventListener('click', openModal);
  modalElement.addEventListener('click', closeModal);
};

modalControll({
  modal: '.modal',
  btnOpen: '.about__button',
  btnClose: '.modal__close',
});

export {modalControll};
