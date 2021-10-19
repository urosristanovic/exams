import { getCurrentLanguage, translate } from './modules/languages.js';
import { updateCookie, setCookieValue } from './modules/cookies.js';
import { fetchQuotes } from './modules/quotes.js';

const nameCookieSaves = 'number-of-saves';
const nameCookieLanguage = 'language';

let counter = setCookieValue(nameCookieSaves) || 0;

const currentLanguage = getCurrentLanguage();
translate(currentLanguage);

fetchQuotes();

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
