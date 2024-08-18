import './variables.js';
import { renderPosts } from './miniatures.js';
import './img-scale.js';
import './img-filters.js';
import './form-validate.js';
import { getData } from './api.js';
import { debounce } from './util.js';

getData(renderPosts);
