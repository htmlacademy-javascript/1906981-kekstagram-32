// Проверка длины строки.

function checkLength(stroke, maxLength) {
  return (stroke.length <= maxLength);
}

console.log(checkLength('проверяемая строка', 10));

// Проверка на палиндром.

function isPalindrome(stroke) {
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

console.log(isPalindrome('Лёша на полке клопа нашёл '));

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

// Проверка времени встречи

const isMeetingFits = (dayBeginning = '', dayEnding = '', meetingBeginning = '', meetingDuration) => {
  // перевести время в числовой тип
  // перевести время в длительность (мин)
  // сравнить начало и конец с началом встречи

  const toMinutes = (value) => {
    return (value.split(':').map(function(x) {
      return parseInt(x, 10);
    }));
  };

  dayBeginning = toMinutes(dayBeginning);
  dayEnding = toMinutes(dayEnding);
  meetingBeginning = toMinutes(meetingBeginning);
  console.log(dayBeginning, dayEnding, meetingBeginning);
};

isMeetingFits('08:00', '17:30', '14:00', 90);
