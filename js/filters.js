import { renderPosts } from './miniatures.js';
import { debounce, getRandomArrayElement } from './util.js';

const filters = document.querySelector('.img-filters');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');

const RANDOM_POSTS_AMOUNT = 10;
const RERENDER_DELAY = 500;

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  const currentButton = document.querySelector('.img-filters__button--active');
  currentButton.classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const setDefaultFilter = (button, photos) => {
  setActiveButton(button);
  renderPosts(photos);
};

const setDiscussedFilter = (button, photos) => {
  setActiveButton(button);

  const arrayCopy = photos.slice();
  arrayCopy.sort((a, b) => {
    if (a.comments.length < b.comments.length) {
      return 1;
    } else if (a.comments.length > b.comments.length) {
      return -1;
    } else {
      return 0;
    }
  });

  renderPosts(arrayCopy);
};

const setRandomFilter = (button, photos) => {
  setActiveButton(button);

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
      setDefaultFilter(defaultButton, photos);
    }
    if (evt.target === discussedButton) {
      setDiscussedFilter(discussedButton, photos);
    }
    if (evt.target === randomButton) {
      setRandomFilter(randomButton, photos);
    }
  }, RERENDER_DELAY));
};

export { showFilters, onFilterClick };
