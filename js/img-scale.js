import { SCALE_STEP, SCALE_MIN, SCALE_MAX } from './variables';

const scaleMinButton = document.querySelector('.scale__control--smaller');
const scaleMaxButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

let scaleValue = parseInt(scaleInput.value, 10);

const renderScale = (scale) => {
  previewImage.style.transform = `scale(${scale / 100})`;
  scaleInput.value = `${scale}%`;
};

scaleMinButton.addEventListener('click', () => {
  if (scaleValue > SCALE_MIN) {
    scaleValue -= SCALE_STEP;
    renderScale(scaleValue);
  }
});

scaleMaxButton.addEventListener('click', () => {
  if (scaleValue < SCALE_MAX) {
    scaleValue += SCALE_STEP;
    renderScale(scaleValue);
  }
});
