const params = new URLSearchParams(location.search);

const firstName = params.get('name');
const surname = params.get('surname');
const date = params.get('date');

function createMessage(name, surname, date) {
  const fullName = document.getElementById('full-name');
  const dobMsg = document.getElementById('em-dob');

  fullName.innerText = `${name} ${surname}`;
  dobMsg.innerText = `${date}.`;

  checkLanguage();
}

createMessage(firstName, surname, date);

function checkLanguage(language) {
  if (language === 'sr') {
    translateToSerbian();
  } else {
    translateToEnglish();
  }
}

function getLabels() {
  const newContact = document.getElementById('new-contact');
  const message = document.getElementById('success');
  const dob = document.getElementById('dob');

  return {
    newContact,
    message,
    dob,
  };
}

function translateToEnglish() {
  const labels = getLabels();
  labels.newContact.innerText = `New contact: `;
  labels.message.innerText = `Has successfully created!`;
  labels.dob.innerText = `Date of birth: `;
}
function translateToSerbian() {
  const labels = getLabels();
  labels.newContact.innerText = `Nov kontakt: `;
  labels.message.innerText = `Uspešno kreiran!`;
  labels.dob.innerText = `Datum rođenja: `;
}
