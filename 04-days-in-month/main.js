'use strict';

const month = document.getElementById('month');
const year = document.getElementById('year');

const check = document.getElementById('btn-submit');
const message = document.getElementById('message');

check.addEventListener('click', e => {
  e.preventDefault();
  const result = getDaysInMonth(Number(month.value), Number(year.value));
  message.innerHTML = `<p class="message">Month with ordinal number ${month.value} have ${result} days in ${year.value} year.</p>`;
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
