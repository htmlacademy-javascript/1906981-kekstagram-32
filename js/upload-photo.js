const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input');
const previewImage = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const filename = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => filename.endsWith(it));

  if (matches) {
    previewImage.src = URL.createObjectURL(file);
  }
});
