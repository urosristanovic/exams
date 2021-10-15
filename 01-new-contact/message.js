const params = new URLSearchParams(location.search);

const fullname = params.get('fullname');
const dob = params.get('date');
const counter = params.get('counter');

translate(getCurrentLanguage());
createMessage(fullname, dob, counter);

function createMessage(fullName, dob, counter) {
  const fullNameElement = document.getElementById('full-name');
  const dobElement = document.getElementById('em-dob');
  const counterElement = document.getElementById('em-counter');

  fullNameElement.innerText = `${fullName}`;
  dobElement.innerText = `${dob}.`;
  counterElement.innerText = `${counter}`;
}

function getCurrentLanguage() {
  const cookieLanguage = getCookie('language');
  if (cookieLanguage) {
    return getCookieValue(cookieLanguage);
  }
  return navigator.language;
}

function translate(language) {
  if (language === 'sr') {
    translateToSerbian();
  } else {
    translateToEnglish();
  }
}

const back = document.getElementById('btn-back');
back.addEventListener('click', () => {
  history.back();
});

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

function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}
function getCookieValue(cookie) {
  return cookie.split('=')[1];
}
