import { translateMessage, getCurrentLanguage } from './modules/languages.js';

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
