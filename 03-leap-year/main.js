function isLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

const check = document.getElementById('form');

check.addEventListener('submit', e => {
  e.preventDefault();
  const year = document.getElementById('leap_year');
  const isLeap = isLeapYear(year.value);
  const result = document.getElementById('result');
  result.innerHTML = `Year ${year.value} <strong>is${
    isLeap ? '' : ' not'
  }</strong> leap year.`;
});
