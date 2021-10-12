const params = new URLSearchParams(location.search);

const firstName = params.get('name');
const surename = params.get('surename');
const date = params.get('date');

const message = document.getElementById('message');
const contactMessage = createMessage(firstName, surename, date);
message.appendChild(contactMessage);

function createMessage(name, surename, date) {
  const p = document.createElement('p');
  p.innerHTML = `Date of birth: <em>${date}</em>. <br> New contact <strong>${name} ${surename}</strong> successfully created!`;
  return p;
}
