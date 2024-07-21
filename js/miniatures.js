const picturesList = document.querySelector('.pictures');
const miniTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPosts = (miniPictures) => {
  const miniPicturesList = document.createDocumentFragment();

  miniPictures.forEach(({url, description, likes, comments}) => {
    const miniPictureElement = miniTemplate.cloneNode(true);

    miniPictureElement.querySelector('.picture__img').src = url;
    miniPictureElement.querySelector('.picture__img').alt = description;
    miniPictureElement.querySelector('.picture__likes').textContent = likes;
    miniPictureElement.querySelector('.picture__comments').textContent = comments.length;

    miniPicturesList.appendChild(miniPictureElement);
  });

  picturesList.appendChild(miniPicturesList);
};

export { renderPosts };
