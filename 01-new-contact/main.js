import { getCurrentLanguage, fetchLanguages } from './modules/languages.js';
import { updateCookie, setCookieValue } from './modules/cookies.js';
import { fetchQuotes, randomQuote } from './modules/quotes.js';

const nameCookieSaves = 'number-of-saves';
const nameCookieLanguage = 'language';

let counter = setCookieValue(nameCookieSaves) || 0;

const currentLanguage = getCurrentLanguage();
translate(currentLanguage);

const quotes = await fetchQuotes();
displayQuote(quotes);

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
function displayQuote(array) {
  const loader = document.getElementById('loader');
  const quotesWrapper = document.getElementById('quotes-wrapper');
  const quoteEl = document.getElementById('quote');
  const author = document.getElementById('author');
  const quote = randomQuote(array);

  loader.style.display = 'none';
  quotesWrapper.style.display = 'block';
  quoteEl.innerText = quote.text;
  author.innerText = quote.author;
}

function translate(language) {
  if (language === 'sr') {
    translateToSerbian();
  } else {
    translateToEnglish();
  }
}
async function translateToEnglish() {
  const elements = getLabels();
  const data = await fetchLanguages();
  elements.name.innerText = data.name.english;
  elements.surname.innerText = data.surname.english;
  elements.date.innerText = data.dob.english;
  elements.language.innerText = data.chooseLanguage.english;
  elements.langEnglish.innerText = data.langEnglish.english;
  elements.langSerbian.innerText = data.langSerbian.english;
}
async function translateToSerbian() {
  const elements = getLabels();
  const data = await fetchLanguages();
  elements.name.innerText = data.name.serbian;
  elements.surname.innerText = data.surname.serbian;
  elements.date.innerText = data.dob.serbian;
  elements.language.innerText = data.chooseLanguage.serbian;
  elements.langEnglish.innerText = data.langEnglish.serbian;
  elements.langSerbian.innerText = data.langSerbian.serbian;
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
