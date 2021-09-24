'use strict';

function createMessage(value) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = value;
  div.appendChild(p);
  return div;
}

const saveBtn = document.getElementById('btn-submit');

saveBtn.addEventListener('click', e => {
  e.preventDefault();
  const message = document.getElementById('message');

  const paragraph = document.createElement('p');
  const text = document.createTextNode('You successfully created new contact!');
  paragraph.appendChild(text);
  message.appendChild(paragraph);
});

// submit forme, a ne klik na button
