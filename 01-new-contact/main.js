'use strict';

function createMessage(name, surename, date) {
  const p = document.createElement('p');
  p.innerHTML = `[<em>${date}</em>]: New contact <strong>${name} ${surename}</strong> successfully created!`;
  return p;
}

const save = document.getElementById('form');
save.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('first-name').value;
  const surename = document.getElementById('surename').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message');

  const contactMessage = createMessage(name, surename, date);

  message.appendChild(contactMessage);

  name.value = '';
  surename.value = '';
  date.value = '';
});
