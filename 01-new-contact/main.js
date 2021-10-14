'use strict';

checkLanguage(navigator.language);

let counter = 0;
let cookies = document.cookie;
const nameCookieSaves = 'number-of-saves';
const nameCookieLanguage = 'language';

if (cookies) {
  const saveCookie = getCookie(cookies, nameCookieSaves);
  if (saveCookie) {
    counter = getCookieValue(saveCookie);
  }
}

const save = document.getElementById('form');
save.addEventListener('submit', e => {
  e.preventDefault();
  let language;
  cookies = document.cookie;
  const languageCookie = getCookie(cookies, nameCookieLanguage);

  if (languageCookie) {
    language = getCookieValue(languageCookie);
  }

  counter++;
  updateCookie(nameCookieSaves, counter);
  const query = setQuery(counter, language);

  location = `message.html?${query}`;
});

const languages = document.getElementById('languages');
languages.addEventListener('click', e => {
  const language = e.target.value;
  updateCookie(nameCookieLanguage, language);
  checkLanguage(language);
});

function setQuery(counter, language) {
  const query = new URLSearchParams();
  const name = document.getElementById('first-name');
  const surname = document.getElementById('surname');
  const date = document.getElementById('date');

  query.set('fullname', `${name.value} ${surname.value}`);
  query.set('date', `${date.value}`);
  query.set('counter', `${counter}`);

  if (language) {
    query.set('language', `${language}`);
  }

  name.value = '';
  surname.value = '';
  date.value = '';

  return query;
}

// Get elements for translate the page
function getLabels() {
  const name = document.getElementById('lbl-name');
  const surname = document.getElementById('lbl-surname');
  const date = document.getElementById('lbl-date');

  const language = document.getElementById('lbl-language');
  const langSerbian = document.getElementById('lang-serbian');
  const langEnglish = document.getElementById('lang-english');

  return {
    name,
    surname,
    date,
    language,
    langSerbian,
    langEnglish,
  };
}
function translateToEnglish() {
  const elements = getLabels();
  elements.name.innerText = 'Name:';
  elements.surname.innerText = 'Surname:';
  elements.date.innerText = 'Date Of Birth:';
  elements.language.innerText = 'Choose language:';
  elements.langEnglish.innerText = 'English';
  elements.langSerbian.innerText = 'Serbian';
}
function translateToSerbian() {
  const elements = getLabels();
  elements.name.innerText = 'Ime:';
  elements.surname.innerText = 'Prezime:';
  elements.date.innerText = 'Datum rođenja:';
  elements.language.innerText = 'Izaberi jezik:';
  elements.langEnglish.innerText = 'Engleski';
  elements.langSerbian.innerText = 'Srpski';
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
