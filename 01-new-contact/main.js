'use strict';

const nameCookieSaves = 'number-of-saves';
const nameCookieLanguage = 'language';

let counter = setCookieValue(nameCookieSaves) || 0;

translate(getCurrentLanguage());
fetchQuotes();

async function fetchQuotes() {
  const response = await fetch('json/quotes.json');
  const json = await response.json();
  await delay(2000);
  return displayRandomQuote(json);
}
// function fetchQuotes() {
//   fetch('json/quotes.json')
//     .then(response => {
//       console.log(response);
//       response.json();
//     })
//     .then(json => {
//       console.log(json);
//       displayRandomQuote(json);
//     });
// }

function displayRandomQuote(array) {
  const loader = document.getElementById('loader');
  const quotesWrapper = document.getElementById('quotes-wrapper');
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const randomElement = array[Math.floor(Math.random() * array.length)];
  loader.style.display = 'none';
  quotesWrapper.style.display = 'block';
  quote.innerText = randomElement.quote;
  author.innerText = randomElement.author;
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function createQuote(quote, author) {
  return {
    quote,
    author,
  };
}

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
  fetch('json/translate-new-contact.json')
    .then(response => response.json())
    .then(data => {
      elements.name.innerText = data.name.english;
      elements.surname.innerText = data.surname.english;
      elements.date.innerText = data.dob.english;
      elements.language.innerText = data.chooseLanguage.english;
      elements.langEnglish.innerText = data.langEnglish.english;
      elements.langSerbian.innerText = data.langSerbian.english;
    });
}
async function translateToSerbian() {
  const elements = getLabels();
  const response = await fetch('json/translate-new-contact.json');
  const data = await response.json();
  elements.name.innerText = data.name.serbian;
  elements.surname.innerText = data.surname.serbian;
  elements.date.innerText = data.dob.serbian;
  elements.language.innerText = data.chooseLanguage.serbian;
  elements.langEnglish.innerText = data.langEnglish.serbian;
  elements.langSerbian.innerText = data.langSerbian.serbian;
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
