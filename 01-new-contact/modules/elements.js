export function getLabels() {
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

export function getElements() {
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
