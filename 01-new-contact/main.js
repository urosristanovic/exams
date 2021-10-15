'use strict';

const nameCookieSaves = 'number-of-saves';
const nameCookieLanguage = 'language';

let counter = setCookieValue(nameCookieSaves) || 0;

translate(getCurrentLanguage());

const quote01 = createQuote(
  'Success is not final; failure is not fatal: it is the courage to continue that counts.',
  'Winston Churchill'
);
const quote02 = createQuote(
  'Play by the rules, but be ferocious.',
  'Phil Knight'
);
const quote03 = createQuote(
  'Business opportunities are like buses, there’s always another one coming.',
  'Richard Branson'
);
const quote04 = createQuote(
  'Every problem is a gift—without problems we would not grow.',
  'Anthony Robbins'
);
const quote05 = createQuote(
  'You only have to do a few things right in your life so long as you don’t do too many things wrong.',
  'Warren Buffett'
);
const quote06 = createQuote(
  'Success usually comes to those who are too busy to be looking for it.',
  'Henry David Thoreau'
);
const quote07 = createQuote(
  'If you really look closely, most overnight successes took a long time.',
  'Steve Jobs'
);
const quote08 = createQuote(
  'Imagination is everything. It is the preview of life’s coming attractions.',
  'Albert Einstein'
);
const arrayOfQuotes = [
  quote01,
  quote02,
  quote03,
  quote04,
  quote05,
  quote06,
  quote07,
  quote08,
];

delay(2000).then(() => {
  displayRandomQuote(arrayOfQuotes);
});
setInterval(() => {
  delay(2000).then(() => {
    displayRandomQuote(arrayOfQuotes);
  });
}, 3000);

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
