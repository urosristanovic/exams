'use strict';

checkLanguage(navigator.language);

// document.cookie = 'first-name="uros"';
// document.cookie = 'last-name="ristanovic"';

let counter = 0;
const cookies = document.cookie;
const nameOfCookie = 'number-of-saves';

if (cookies) {
  const cookie = getCookie(cookies, nameOfCookie);
  if (cookie) {
    const cookieCounter = getCookieValue(cookie);
    if (cookieCounter > 0) {
      counter = getCookieValue(cookie);
    }
  }
}

const save = document.getElementById('form');
save.addEventListener('submit', e => {
  e.preventDefault();
  const query = new URLSearchParams();
  const name = document.getElementById('first-name');
  const surname = document.getElementById('surname');
  const date = document.getElementById('date');

  query.set('fullname', `${name.value} ${surname.value}`);
  query.set('date', `${date.value}`);

  counter++;
  updateCookie(nameOfCookie, counter);

  location = `message.html?${query}`;

  name.value = '';
  surname.value = '';
  date.value = '';
});

// Get elements for translate the page
function getElements() {
  const name = document.getElementById('lbl-name');
  const surname = document.getElementById('lbl-surname');
  const date = document.getElementById('lbl-date');

  return {
    name,
    surname,
    date,
  };
}
function translateToEnglish() {
  const elements = getElements();
  elements.name.innerText = 'Name:';
  elements.surname.innerText = 'Surname:';
  elements.date.innerText = 'Date Of Birth:';
}
function translateToSerbian() {
  const elements = getElements();
  elements.name.innerText = 'Ime:';
  elements.surname.innerText = 'Prezime:';
  elements.date.innerText = 'Datum rođenja:';
}
function checkLanguage(language) {
  if (language === 'sr') {
    translateToSerbian();
  } else {
    translateToEnglish();
  }
}

// Create or Update cookie
function updateCookie(name, counter) {
  document.cookie = `${name}=${counter}`;
}
function getCookie(cookies, searchCookie) {
  const array = cookies.split(';');
  return array.filter(
    cookie => cookie.trim().split('=')[0] === searchCookie
  )[0];
}
function getCookieValue(cookie) {
  return cookie.split('=')[1];
}
