'use strict';

function getLabels() {
  const name = document.getElementById('lbl-name');
  const surname = document.getElementById('lbl-surname');
  const date = document.getElementById('lbl-date');

  return {
    name,
    surname,
    date,
  };
}
function translateToEnglish() {
  const labels = getLabels();
  labels.name.innerText = 'Name:';
  labels.surname.innerText = 'Surname:';
  labels.date.innerText = 'Date Of Birth:';
}
function translateToSerbian() {
  const labels = getLabels();
  labels.name.innerText = 'Ime:';
  labels.surname.innerText = 'Prezime:';
  labels.date.innerText = 'Datum rođenja:';
}

function checkLanguage(language) {
  if (language === 'sr') {
    translateToSerbian();
  } else {
    translateToEnglish();
  }
}

checkLanguage(navigator.language);

const save = document.getElementById('form');
save.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('first-name').value;
  const surname = document.getElementById('surname').value;
  const date = document.getElementById('date').value;

  location = `message.html?name=${name}&surname=${surname}&date=${date}`;

  name.value = '';
  surname.value = '';
  date.value = '';
});
