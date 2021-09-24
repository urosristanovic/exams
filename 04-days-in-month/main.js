'use strict';

const check = document.getElementById('form');

check.addEventListener('submit', e => {
  e.preventDefault();
  const month = document.getElementById('month');
  const year = document.getElementById('year');
  const message = document.getElementById('message');
  const result = getDaysInMonth(Number(month.value), Number(year.value));
  const monthName = getMonthName(Number(month.value));
  message.innerHTML = `<p class="message">${monthName} in ${year.value} have ${result} days.</p>`;
});

function checkLeapYear(year) {
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  return leapYear;
}

function getDaysInMonth(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return !checkLeapYear(year) ? 28 : 29;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return -1;
  }
}

function getMonthName(month) {
  switch (month) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
    case 6:
      return 'May';
    case 7:
      return 'June';
    case 8:
      return 'July';
    case 9:
      return 'August';
    case 10:
      return 'September';
    case 11:
      return 'October';
    case 12:
      return 'November';
  }
}
