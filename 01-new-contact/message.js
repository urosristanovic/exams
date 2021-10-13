const params = new URLSearchParams(location.search);

const fullname = params.get('fullname');
const dob = params.get('dob');

function createMessage(fullName, dob) {
  const fullNameElement = document.getElementById('full-name');
  const dobElement = document.getElementById('em-dob');

  fullNameElement.innerText = `${fullName}`;
  dobElement.innerText = `${dob}.`;

  checkLanguage();
}

createMessage(fullname, dob);

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

  return {
    newContactText,
    successText,
    dobText,
  };
}

function translateToEnglish() {
  const labels = getElements();
  labels.newContactText.innerText = `New contact: `;
  labels.successText.innerText = `Has successfully created!`;
  labels.dobText.innerText = `Date of birth: `;
}
function translateToSerbian() {
  const labels = getElements();
  labels.newContactText.innerText = `Nov kontakt: `;
  labels.successText.innerText = `Uspešno kreiran!`;
  labels.dobText.innerText = `Datum rođenja: `;
}
