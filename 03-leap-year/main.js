function isLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

const check = document.getElementById('check');
const year = document.getElementById('leap_year');
const result = document.getElementById('result');

check.addEventListener('click', () => {
  const isLeap = isLeapYear(year.value);
  result.innerHTML = `Year ${year.value} <strong>is${
    isLeap ? '' : ' not'
  }</strong> leap year.`;
});
