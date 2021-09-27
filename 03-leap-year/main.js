function isLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

const check = document.getElementById('form');

check.addEventListener('submit', e => {
  e.preventDefault();
  const year = document.getElementById('leap_year').value;
  const isLeap = isLeapYear(year);
  const result = document.getElementById('result');

  result.innerHTML = `Year ${year} <strong>is${
    isLeap ? '' : ' not'
  }</strong> leap year.`;
});
