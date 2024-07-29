import { AVATAR_WIDTH, AVATAR_HEIGHT } from './variables.js';

const image = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const shownComments = document.querySelector('.social__comment-shown-count');
const totalComments = document.querySelector('.social__comment-total-count');
const photoCaption = document.querySelector('.social__caption');

const commentsList = document.querySelector('.social__comments');

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

const renderComments = () => {
  const localPictureComments = Array(document.createDocumentFragment());

  localPictureComments.forEach((item) => {
    renderComment(item);
  });

  commentsList.append(localPictureComments);
};

const renderFullImage = ({url, likes, comments, description}) => {

  image.src = url;
  likesCount.textContent = likes;
  totalComments.textContent = comments.length;
  photoCaption.text = description;

  renderComments();
};

export { renderFullImage };
