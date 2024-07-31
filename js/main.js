import './variables.js';
import { randomPosts } from './data.js';
import { renderPosts } from './miniatures.js';

const miniPictures = randomPosts();
renderPosts(miniPictures);
