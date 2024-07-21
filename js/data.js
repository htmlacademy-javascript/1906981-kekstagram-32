import {
  POSTS_COUNT,
  AVATARS_COUNT,
  MIN_LIKES,
  MAX_LIKES,
  COMMENTS_COUNT,
  POSTS_DESCRIPTIONS,
  POSTS_COMMENTS,
  COMMENT_NAMES
} from './variables.js';
import {
  getRandomInteger,
  getUniqueInteger,
  getRandomArrayElement
} from './util.js';

const randomPostId = getUniqueInteger(1, POSTS_COUNT);
const randomPostUrl = getUniqueInteger(1, POSTS_COUNT);
const randomCommentId = getUniqueInteger(1, 1000000);

const createPost = () => {
  const randomPostDescription = getRandomArrayElement(POSTS_DESCRIPTIONS);

  const createComment = () => ({
    'id': randomCommentId(),
    'avatar': `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
    'message': getRandomArrayElement(POSTS_COMMENTS),
    'name': getRandomArrayElement(COMMENT_NAMES),
  });

  return {
    'id': randomPostId(),
    'url': `photos/${randomPostUrl()}.jpg`,
    'description': randomPostDescription,
    'likes': getRandomInteger(MIN_LIKES, MAX_LIKES),
    'comments': Array.from({length: getRandomInteger(0, COMMENTS_COUNT)}, createComment),
  };
};

const randomPosts = () => Array.from({length: POSTS_COUNT}, createPost);

export { randomPosts };
