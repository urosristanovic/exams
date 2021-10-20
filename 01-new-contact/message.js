import { fetchLanguages, getCurrentLanguage } from './modules/languages.js';

const params = new URLSearchParams(location.search);

const fullname = params.get('fullname');
const dob = params.get('date');
const counter = params.get('counter');

const currentLanguage = getCurrentLanguage();
translateMessage(currentLanguage);
createMessage(fullname, dob, counter);

function createMessage(fullName, dob, counter) {
  const fullNameElement = document.getElementById('full-name');
  const dobElement = document.getElementById('em-dob');
  const counterElement = document.getElementById('em-counter');

  fullNameElement.innerText = `${fullName}`;
  dobElement.innerText = `${dob}.`;
  counterElement.innerText = `${counter}`;
}

const back = document.getElementById('btn-back');
back.addEventListener('click', () => {
  history.back();
});

export function translateMessage(language) {
  if (language === 'sr') {
    messageToSerbian();
  } else {
    messageToEnglish();
  }
}

async function messageToEnglish() {
  const elements = getElements();
  const data = await fetchLanguages();
  elements.newContactText.innerText = data.newContact.english;
  elements.successText.innerText = data.successfully.english;
  elements.dobText.innerText = data.dob.english;
  elements.savesCounter.innerText = data.counter.english;
}

async function messageToSerbian() {
  const elements = getElements();
  const data = await fetchLanguages();
  elements.newContactText.innerText = data.newContact.serbian;
  elements.successText.innerText = data.successfully.serbian;
  elements.dobText.innerText = data.dob.serbian;
  elements.savesCounter.innerText = data.counter.serbian;
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
