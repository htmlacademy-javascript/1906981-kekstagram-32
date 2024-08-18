import './variables.js';
import { renderPosts } from './miniatures.js';
import './img-scale.js';
import './img-filters.js';
import './form-validate.js';
import { getData } from './api.js';
import './upload-photo.js';

getData(renderPosts);
