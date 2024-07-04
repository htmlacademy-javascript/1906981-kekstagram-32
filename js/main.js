const POSTS_COUNT = 25;

const POSTS_DESCRIPTIONS = [
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

const POSTS_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENT_NAMES = [
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

function getUniqueInteger (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const randomPostId = getUniqueInteger(1, POSTS_COUNT);
const randomPostUrl = getUniqueInteger(1, POSTS_COUNT);
const randomCommentId = getUniqueInteger(1, 1000000);

const createPost = () => {
  const randomPostDescription = getRandomArrayElement(POSTS_DESCRIPTIONS);

  const createComment = () => ({
    'id': randomCommentId(),
    'avatar': `img/avatar-${getRandomInteger(1, 6)}.svg`,
    'message': getRandomArrayElement(POSTS_COMMENTS),
    'name': getRandomArrayElement(COMMENT_NAMES),
  });

  return {
    'id': randomPostId(),
    'url': `photos/${randomPostUrl()}.jpg`,
    'description': randomPostDescription,
    'likes': getRandomInteger(15, 200),
    'comments': Array.from({length: getRandomInteger(0, 30)}, createComment),
  };
};

const randomPosts = Array.from({length: POSTS_COUNT}, createPost);

console.log(randomPosts);
