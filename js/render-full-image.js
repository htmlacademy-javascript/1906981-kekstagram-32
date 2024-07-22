
const renderFullImage = ({url, likes, comments, description}) => {
  // const fullSizePhoto = document.querySelector('.big-picture');
  const image = document.querySelector('.big-picture__img img');
  const likesCount = document.querySelector('.likes-count');
  const shownComments = document.querySelector('.social__comment-shown-count');
  const totalComments = document.querySelector('.social__comment-total-count');
  const photoCaption = document.querySelector('.social__caption');

  image.src = url;
  likesCount.textContent = likes;
  totalComments.textContent = comments.length;
  photoCaption.text = description;

};

export { renderFullImage };
