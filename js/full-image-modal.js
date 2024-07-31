import { isEscapeKey } from './util.js';
import { renderFullImage } from './render-full-image.js';

const fullImage = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullImage.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const openUserModal = (photo) => {
  fullImage.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderFullImage(photo);
};

const closeUserModal = () => {
  fullImage.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', closeUserModal);


export { openUserModal, closeUserModal };
