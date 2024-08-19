import { renderPosts } from './miniatures.js';
import { debounce, getRandomArrayElement } from './util.js';
import { RERENDER_DELAY, RANDOM_POSTS_AMOUNT } from './variables.js';

const filters = document.querySelector('.img-filters');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');
const filtersForm = filters.querySelector('.img-filters__form');

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  if (button.classList.contains('img-filters__button')) {
    const currentButton = document.querySelector('.img-filters__button--active');
    currentButton.classList.remove('img-filters__button--active');
    button.classList.add('img-filters__button--active');
  }
};

const setDefaultFilter = (photos) => {
  renderPosts(photos);
};

const setDiscussedFilter = (photos) => {

  const arrayCopy = photos.slice();
  arrayCopy.sort((a, b) => b.comments.length - a.comments.length);

  renderPosts(arrayCopy);
};

const setRandomFilter = (photos) => {

  const randomPosts = [];
  let arrayCopy = photos.slice();

  for (let i = 0; i < RANDOM_POSTS_AMOUNT; i++) {
    const randomElement = getRandomArrayElement(arrayCopy);
    randomPosts.push(randomElement);
    arrayCopy = arrayCopy.filter((element) => element !== randomElement);
  }

  renderPosts(randomPosts);
};

const onFilterClick = (photos) => {
  filters.addEventListener('click', debounce((evt) => {
    if (evt.target === defaultButton) {
      setDefaultFilter(photos);
    }
    if (evt.target === discussedButton) {
      setDiscussedFilter(photos);
    }
    if (evt.target === randomButton) {
      setRandomFilter(photos);
    }
  }, RERENDER_DELAY));
};

filtersForm.addEventListener('click', (evt) => {
  setActiveButton(evt.target);
});

export { showFilters, onFilterClick };
