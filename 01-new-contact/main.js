'use strict';

const save = document.getElementById('form');
save.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('first-name').value;
  const surename = document.getElementById('surename').value;
  const date = document.getElementById('date').value;

  location = `message.html?name=${name}&surename=${surename}&date=${date}`;

  name.value = '';
  surename.value = '';
  date.value = '';
});
