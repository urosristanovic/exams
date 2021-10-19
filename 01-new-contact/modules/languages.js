import { getCookieValue, getCookie } from './cookies.js';
import { getLabels, getElements } from './elements.js';

export function getCurrentLanguage() {
  const cookieLanguage = getCookie('language');
  if (cookieLanguage) {
    return getCookieValue(cookieLanguage);
  }
  return navigator.language;
}

export function translate(language) {
  if (language === 'sr') {
    newContactToSerbian();
  } else {
    newContactToEnglish();
  }
}
export function translateMessage(language) {
  if (language === 'sr') {
    messageToSerbian();
  } else {
    messageToEnglish();
  }
}

function newContactToEnglish() {
  console.log('ldkhaasdnkh');
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

async function newContactToSerbian() {
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

function messageToEnglish() {
  const elements = getElements();
  fetch('json/translate-confirm.json')
    .then(response => response.json())
    .then(data => {
      elements.newContactText.innerText = data.newContact.english;
      elements.successText.innerText = data.successfully.english;
      elements.dobText.innerText = data.dob.english;
      elements.savesCounter.innerText = data.counter.english;
    });
}

async function messageToSerbian() {
  const elements = getElements();
  const response = await fetch('json/translate-confirm.json');
  const data = await response.json();
  elements.newContactText.innerText = data.newContact.serbian;
  elements.successText.innerText = data.successfully.serbian;
  elements.dobText.innerText = data.dob.serbian;
  elements.savesCounter.innerText = data.counter.serbian;
}
