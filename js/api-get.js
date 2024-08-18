import { ERROR_SHOW_TIME } from './variables';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const showDataError = () => {
  const errorMessage = dataErrorTemplate.cloneNode(true);
  document.body.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, ERROR_SHOW_TIME);
};

export { showDataError };

