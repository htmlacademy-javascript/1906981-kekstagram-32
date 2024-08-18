import { onDocumentKeydown } from './form-validate.js';
import { isEscapeKey } from './util.js';
import { SubmitButtonText } from './variables.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);

const submitButton = document.querySelector('.img-upload__submit');

const showMessage = (message, button, messageInner) => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydownMessage);
  document.removeEventListener('keydown', onDocumentKeydown);

  const deleteMessage = () => {
    message.remove();
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onDocumentKeydownMessage);
    if (message.classList.contains('error')) {
      document.addEventListener('keydown', onDocumentKeydown);
    }
  };

  function onDocumentClick (evt) {
    const messageElement = evt.target.closest(messageInner);
    if (evt.target !== messageElement) {
      deleteMessage();
    }
  }

  function onDocumentKeydownMessage (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove();
    }
  }

  button.addEventListener('click', () => {
    deleteMessage();
  });
};

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  const successCloseButton = successMessage.querySelector('.success__button');
  const successInner = successMessage.querySelector('.success');
  showMessage(successMessage, successCloseButton, successInner);
};

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  const errorCloseButton = errorMessage.querySelector('.error__button');
  const errorInner = errorMessage.querySelector('.error');
  showMessage(errorMessage, errorCloseButton, errorInner);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = `${SubmitButtonText.SENDING}`;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = `${SubmitButtonText.IDLE}`;
};

export { showSuccessMessage, showErrorMessage, blockSubmitButton, unblockSubmitButton };
