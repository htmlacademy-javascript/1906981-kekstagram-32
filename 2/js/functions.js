// Проверка длины строки.

function checkLength(stroke, maxLength) {
  return (stroke.length <= maxLength);
}

console.log(checkLength('проверяемая строка', 10));

// Проверка на палиндром.

function checkPalindrome(stroke) {
  const resultStroke = stroke.toLowerCase().replaceAll(' ', '');
  let result = true;

  for (let i = 0; i < (resultStroke.length); i++) {
    if (resultStroke[i] !== resultStroke[resultStroke.length - 1 - i]) {
      result = false;
      return result;
    }
  }

  return result;
}

console.log(checkPalindrome('Лёша на полке клопа нашёл '));

// Положительное число из случайной строки.

function getNumber(stroke) {
  let resultStroke = '';
  stroke = stroke.toString().replaceAll(' ', '');

  for (let i = 0; i < stroke.length; i++) {
    if ((stroke[i] > 0) || (Number(stroke[i]) === 0)) {
      resultStroke += stroke[i];
    }
  }

  if (resultStroke === '') {
    resultStroke = NaN;
  }

  return Number(resultStroke);
}

console.log(getNumber('а я томат'));
