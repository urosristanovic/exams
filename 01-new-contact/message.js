const params = new URLSearchParams(location.search);

const fullname = params.get('fullname');
const dob = params.get('date');

const cookies = document.cookie;
const nameOfCookie = 'number-of-saves';

if (cookies) {
  const cookie = getCookie(cookies, nameOfCookie);
  if (cookie) {
    cookieCounter = getCookieValue(cookie);
    if (cookieCounter > 0) {
      counter = getCookieValue(cookie);
    }
  }
}

const back = document.getElementById('btn-back');
back.addEventListener('click', () => {
  history.back();
});

const language = params.get('language');
if (language) {
  createMessage(fullname, dob, cookieCounter, language);
}

function createMessage(fullName, dob, cookieCounter, language) {
  const fullNameElement = document.getElementById('full-name');
  const dobElement = document.getElementById('em-dob');
  const counterElement = document.getElementById('em-counter');

  if (language) {
    checkLanguage(language);
  } else {
    checkLanguage(navigator.language);
  }

  fullNameElement.innerText = `${fullName}`;
  dobElement.innerText = `${dob}.`;
  counterElement.innerText = `${cookieCounter}`;
}

function checkLanguage(language) {
  if (language === 'sr') {
    translateToSerbian();
  } else {
    translateToEnglish();
  }
}

function getElements() {
  const newContactText = document.getElementById('new-contact');
  const successText = document.getElementById('success');
  const dobText = document.getElementById('dob');
  const savesCounter = document.getElementById('counter');

  return {
    newContactText,
    successText,
    dobText,
    savesCounter,
  };
}
function translateToEnglish() {
  const elements = getElements();
  elements.newContactText.innerText = `New contact: `;
  elements.successText.innerText = `Has successfully created!`;
  elements.dobText.innerText = `Date of birth: `;
  elements.savesCounter.innerText = `Number of saves: `;
}
function translateToSerbian() {
  const elements = getElements();
  elements.newContactText.innerText = `Nov kontakt: `;
  elements.successText.innerText = `Uspešno kreiran!`;
  elements.dobText.innerText = `Datum rođenja: `;
  elements.savesCounter.innerText = `Brojač čuvanja: `;
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
