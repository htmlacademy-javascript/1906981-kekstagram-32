import './variables.js';
import { randomPosts } from './data.js';
import { renderPosts } from './miniatures.js';
import './form-validate.js';
import './img-scale.js';

const miniPictures = randomPosts();
renderPosts(miniPictures);
