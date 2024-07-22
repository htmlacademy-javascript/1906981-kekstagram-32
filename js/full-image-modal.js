import { isEscapeKey } from './util.js';
import { renderFullImage } from './render-full-image.js';

const fullImage = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullImage.classList.add('hidden');
  }
};

const openUserModal = () => {
  fullImage.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUserModal = () => {
  fullImage.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', closeUserModal);

const showModal = (photo) => {
  renderFullImage(photo);
};

export {showModal, openUserModal, closeUserModal};
