import { AVATAR_WIDTH, AVATAR_HEIGHT, SHOWN_COMMENTS_PORTION } from './variables.js';

const image = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const shownComments = document.querySelector('.social__comment-shown-count');
const totalComments = document.querySelector('.social__comment-total-count');
const photoCaption = document.querySelector('.social__caption');
const commentsList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');

const localComments = [];
let total;

const renderComment = ({avatar, name, message}) => {
  const newElement = document.createElement('li');
  newElement.classList.add('social__comment');
  newElement.innerHTML = '<img class="social__picture"><p class="social__text"></p>';

  const commentAvatar = newElement.querySelector('.social__picture');
  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentAvatar.width = AVATAR_WIDTH;
  commentAvatar.height = AVATAR_HEIGHT;

  const commentText = newElement.querySelector('.social__text');
  commentText.textContent = message;

  return newElement;
};

const renderLoader = () => {
  if (!localComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const renderStatistic = () => {
  shownComments.textContent = total - localComments.length;
};

const renderComments = () => {
  const localPictureComments = document.createDocumentFragment();

  localComments.splice(0, SHOWN_COMMENTS_PORTION).forEach((item) => {
    localPictureComments.append(renderComment(item));
  });

  commentsList.append(localPictureComments);

  renderLoader();
  renderStatistic();
};

const renderFullImage = ({url, likes, comments, description}) => {
  localComments.length = 0;
  localComments.push(...comments.slice());
  total = comments.length;
  image.src = url;
  likesCount.textContent = likes;
  totalComments.textContent = total;
  photoCaption.textContent = description;
  commentsList.innerHTML = '';
  renderComments();
};

commentsLoader.addEventListener('click', () => {
  renderComments();
});

export { renderFullImage };
