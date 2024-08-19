import { isEscapeKey } from './util.js';
import { DESCRIPTION_FIELD_MAX_LENGTH, HASHTAG_PATTERN, HASHTAGS_AMOUNT, SPACELIKE_CHARS } from './variables.js';
import { FILTERS } from './variables.js';
import { createSlider, resetFilter } from './img-filters.js';
import { blockSubmitButton, showErrorMessage, showSuccessMessage, unblockSubmitButton } from './api-post.js';
import { sendData } from './api.js';

const body = document.querySelector('body');
const imageForm = document.querySelector('.img-upload__form');
const imageInput = document.querySelector('.img-upload__input');
const editForm = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('.img-upload__cancel');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: '.img-upload__field-wrapper--error'
});

/* Открытие / закрытие модального окна */

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    editForm.classList.add('hidden');
    body.classList.remove('modal-open');
    imageForm.reset();
    pristine.reset();
    imageInput.value = '';
  }
};

const closeImageModal = () => {
  editForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  pristine.reset();
  imageForm.reset();
  imageInput.value = '';
  resetFilter();
};

imageInput.addEventListener('change', () => {
  editForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

closeFormButton.addEventListener('click', closeImageModal);

/* Валидация поля комментария */

const descriptionField = imageForm.querySelector('.text__description');

const validateDescription = () => descriptionField.value.length <= DESCRIPTION_FIELD_MAX_LENGTH;

descriptionField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

const getDescriptionErrorMessage = () => (`Длина комментария не должна превышать ${DESCRIPTION_FIELD_MAX_LENGTH} символов.`);

pristine.addValidator(descriptionField, validateDescription, getDescriptionErrorMessage);

/* Валидация поля хэштегов */

const hashTagsField = imageForm.querySelector('.text__hashtags');

const optimizeHashtags = (value) => !value.length ? [] : hashTagsField.value.toLowerCase().replaceAll(SPACELIKE_CHARS, ' ').trim().split(' ');

const validateHashtagPattern = (value) => {
  const hashtags = optimizeHashtags(value);
  return (hashtags.every((hashtag) => HASHTAG_PATTERN.test(hashtag)));
};

const checkUnique = (value) => {
  const hashtags = optimizeHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

const checkAmount = (value) => {
  const hashtags = optimizeHashtags(value);
  return !(hashtags.length > HASHTAGS_AMOUNT);
};

pristine.addValidator(
  hashTagsField,
  validateHashtagPattern,
  'Хэштег должен состоять из букв и чисел. Максимальная длина должна составлять 20 символов. В начале хештега стоит знак #.',
  1,
  true
);

pristine.addValidator(
  hashTagsField,
  checkUnique,
  'Хэштеги не должны повторяться.',
  2,
  true
);

pristine.addValidator(
  hashTagsField,
  checkAmount,
  `Количество хэштегов не должно превышать ${HASHTAGS_AMOUNT}.`,
  3,
  true
);

hashTagsField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

imageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();

    const formData = new FormData(evt.target);
    sendData(formData)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeImageModal();
        showSuccessMessage();
      })
      .catch(() => {
        showErrorMessage();
        closeImageModal();
      })
      .finally(() => unblockSubmitButton());
  }
});

createSlider(FILTERS.none);

export { onDocumentKeydown };
