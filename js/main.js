import './variables.js';
import {randomPosts} from './data.js';
import {renderPosts} from './miniatures.js';
import './render-full-image.js';

const miniPictures = randomPosts();
renderPosts(miniPictures);
