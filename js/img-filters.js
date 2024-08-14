import { FILTERS } from './variables';

const previewImage = document.querySelector('.img-upload__preview img');
const effectValue = document.querySelector('.effect-level__value');
const effectSlider = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');

const effectsArray = Object.keys(FILTERS).map((key) => FILTERS[key]);

const showSlider = () => {
  effectSlider.classList.remove('hidden');
};

const hideSlider = () => {
  effectSlider.classList.add('hidden');
};

const setFilter = ({ style, max, unit }) => {
  previewImage.style.filter = '';
  previewImage.style.filter = `${style}(${max}${unit})`;
};

const onSliderUpdate = () => {
  const currentEffect = document.querySelector('.effects__radio:checked').value;
  effectValue.value = effectSlider.noUiSlider.get();
  previewImage.style.filter = `${FILTERS[currentEffect].style}(${effectValue.value}${FILTERS[currentEffect].unit})`;
};

export const createSlider = ({ min, max, step }) => {
  noUiSlider.create(effectSlider, {
    range: { min, max },
    start: max,
    step,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    },
  });

  effectSlider.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({ min, max, step }) => {
  effectSlider.noUiSlider.updateOptions({
    range: { min, max },
    start: max,
    step,
  });
};

effectsList.addEventListener('change', (evt) => {
  const effectItem = effectsArray.find((item) => item.name === evt.target.value);
  setFilter(effectItem);
  updateSlider(effectItem);

  if (evt.target.value === 'none') {
    hideSlider();
  } else {
    showSlider();
  }
});

export const resetFilter = () => {
  setFilter(FILTERS.none);
  hideSlider();
};
