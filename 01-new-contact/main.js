'use strict';

function getElements() {
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
  const labels = getElements();
  labels.name.innerText = 'Name:';
  labels.surname.innerText = 'Surname:';
  labels.date.innerText = 'Date Of Birth:';
}
function translateToSerbian() {
  const labels = getElements();
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
  const query = new URLSearchParams();

  const name = document.getElementById('first-name').value;
  const surname = document.getElementById('surname').value;
  const date = document.getElementById('date').value;

  query.set('fullname', `${name} ${surname}`);
  query.set('date', `${date}`);

  location = `message.html?${query}`;

  name.value = '';
  surname.value = '';
  date.value = '';
});
