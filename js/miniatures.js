import { openUserModal } from './full-image-modal.js';

const picturesList = document.querySelector('.pictures');
const miniTemplate = document.querySelector('#picture').content.querySelector('.picture');

const localPictures = [];

const clearPosts = () => {
  document.querySelectorAll('.picture').forEach((element) => element.remove());
};

const renderPosts = (data) => {
  clearPosts();

  localPictures.length = 0;
  localPictures.push(...data.slice());
  const localPicturesList = document.createDocumentFragment();

  localPictures.forEach(({url, description, likes, comments, id}) => {
    const localPictureElement = miniTemplate.cloneNode(true);

    localPictureElement.querySelector('.picture__img').src = url;
    localPictureElement.querySelector('.picture__img').alt = description;
    localPictureElement.querySelector('.picture__likes').textContent = likes;
    localPictureElement.querySelector('.picture__comments').textContent = comments.length;

    localPictureElement.dataset.marker = id;
    localPicturesList.appendChild(localPictureElement);
  });

  picturesList.appendChild(localPicturesList);
};

picturesList.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    const currentId = Number(currentPicture.dataset.marker);
    const currentData = localPictures.find((item) => item.id === currentId);
    openUserModal(currentData);
  }
});

export { renderPosts };
