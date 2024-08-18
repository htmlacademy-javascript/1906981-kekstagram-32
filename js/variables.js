export const POSTS_DESCRIPTIONS = [
  'И мое сердце остановилось, мое сердце замерло.',
  'Не слушай никого, лишь свое сердце',
  'Как мало нужно для счастья.',
  'Теплые воспоминания в холодное время года.',
  'Всегда готовы покорять новые вершины.',
  'Настойчивость окупается сполна.',
  'Будь голосом, а не эхом.',
  'Отсутствие сна — это не проблема. Проблема, когда ты не знаешь, ради чего просыпаешься по утрам.',
  'Временно в режиме off-line.',
  'Нормальные люди по утрам просыпаются, а я восстаю.',
];

export const POSTS_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

export const COMMENT_NAMES = [
  'Серёжа',
  'Олег',
  'Оля',
  'Саша',
  'Люся',
  'Женя',
  'Дима',
  'Данила',
  'Артём',
  'Настя',
  'Лиза',
  'Миша',
  'Роберт',
  'Паша',
  'Ляйсан',
  'Гарик',
  'Антон',
  'Арсений',
  'Ксюша',
];

export const POSTS_COUNT = 25;
export const AVATARS_COUNT = 6;
export const MIN_LIKES = 15;
export const MAX_LIKES = 200;
export const COMMENTS_COUNT = 30;
export const AVATAR_WIDTH = 35;
export const AVATAR_HEIGHT = 35;
export const SHOWN_COMMENTS_PORTION = 5;

export const DESCRIPTION_FIELD_MAX_LENGTH = 140;
export const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
export const HASHTAGS_AMOUNT = 5;

export const FILTERS = {
  'none': {
    'name': 'none',
    'style': '',
    'min': 0,
    'max': 100,
    'step': 1,
    'unit': '',
  },
  'chrome': {
    'name': 'chrome',
    'style': 'grayscale',
    'min': 0,
    'max': 1,
    'step': 0.1,
    'unit': '',
  },
  'sepia': {
    'name': 'sepia',
    'style': 'sepia',
    'min': 0,
    'max': 1,
    'step': 0.1,
    'unit': '',
  },
  'marvin': {
    'name': 'marvin',
    'style': 'invert',
    'min': 0,
    'max': 100,
    'step': 1,
    'unit': '%',
  },
  'phobos': {
    'name': 'phobos',
    'style': 'blur',
    'min': 0,
    'max': 3,
    'step': 0.1,
    'unit': 'px',
  },
  'heat': {
    'name': 'heat',
    'style': 'brightness',
    'min': 1,
    'max': 3,
    'step': 0.1,
    'unit': '',
  },
};

export const SCALE_STEP = 25;
export const SCALE_MIN = 25;
export const SCALE_MAX = 100;

export const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
export const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикация...'
};

export const ERROR_SHOW_TIME = 5000;

