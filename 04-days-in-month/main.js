'use strict';

const check = document.getElementById('form');

check.addEventListener('submit', e => {
  e.preventDefault();
  const month = Number(document.getElementById('month').value);
  const year = Number(document.getElementById('year').value);
  const message = document.getElementById('message');

  if (month < 1 || month > 12) {
    message.innerHTML = `<p class="message">Please input nubmer between 1-12.</p>`;
  } else {
    const days = getDaysInMonth(month, year);
    const monthName = getMonthName(month);

    message.innerHTML = `<p class="message">${monthName} in ${year} have ${days} days.</p>`;
  }
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
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
  }
}
