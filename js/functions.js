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

const converseToMinutes = (timeStroke) => {
  const timeInMinutes = timeStroke.split(':');
  return (parseInt(timeInMinutes[0], 10) * 60 + parseInt(timeInMinutes[1], 10));
};

const isMeetingFits = (dayBeginning = '', dayEnding = '', meetingBeginning = '', meetingDuration) => {
  dayBeginning = converseToMinutes(dayBeginning);
  dayEnding = converseToMinutes(dayEnding);
  meetingBeginning = converseToMinutes(meetingBeginning);

  if (meetingBeginning >= dayBeginning) {
    if ((meetingBeginning + meetingDuration) <= dayEnding) {
      return console.log(true);
    }
  }

  return console.log(false);
};

isMeetingFits('08:00', '17:30', '14:00', 90); // true
isMeetingFits('8:0', '10:0', '8:0', 120); // true
isMeetingFits('08:00', '14:30', '14:00', 90); // false
isMeetingFits('14:00', '17:30', '08:0', 90); // false
isMeetingFits('8:00', '17:30', '08:00', 900); // false
