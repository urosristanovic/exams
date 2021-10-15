'use strict';

const nameCookieSaves = 'number-of-saves';
const nameCookieLanguage = 'language';

let counter = setCookieValue(nameCookieSaves) || 0;

translate(getCurrentLanguage());

const save = document.getElementById('form');
save.addEventListener('submit', e => {
  e.preventDefault();

  counter++;
  updateCookie(nameCookieSaves, counter);
  const query = setQuery(counter);

  location = `message.html?${query}`;
});

const languages = document.getElementById('languages');
languages.addEventListener('click', e => {
  const language = e.target.value;
  updateCookie(nameCookieLanguage, language);
  translate(language);
});

function getCurrentLanguage() {
  const cookieLanguage = getCookie('language');
  if (cookieLanguage) {
    return getCookieValue(cookieLanguage);
  }
  return navigator.language;
}

function setCookieValue(nameCookie) {
  const cookie = getCookie(nameCookie);
  if (cookie) {
    return getCookieValue(cookie);
  }
}

function setQuery(counter) {
  const query = new URLSearchParams();
  const name = document.getElementById('first-name');
  const surname = document.getElementById('surname');
  const date = document.getElementById('date');

  query.set('fullname', `${name.value} ${surname.value}`);
  query.set('date', `${date.value}`);
  query.set('counter', `${counter}`);

  name.value = '';
  surname.value = '';
  date.value = '';

  return query;
}

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
function translate(language) {
  if (language === 'sr') {
    translateToSerbian();
  } else {
    translateToEnglish();
  }
}

function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}
function getCookieValue(cookie) {
  return cookie.split('=')[1];
}
function updateCookie(name, counter) {
  document.cookie = `${name}=${counter}`;
}
