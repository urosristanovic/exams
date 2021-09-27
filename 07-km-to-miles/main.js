const KM_IN_MILE = 1.609344;
function convertKmToMiles(kilometers) {
  return kilometers / KM_IN_MILE;
}

function createMessage(km, miles) {
  const p = document.createElement('p');
  p.innerHTML = `Distance of <strong>${km}</strong> km is <strong>${miles}</strong> miles.`;
  return p;
}

const convert = document.getElementById('form');
convert.addEventListener('submit', e => {
  e.preventDefault();
  const kilometers = document.getElementById('kilometers');
  const km = kilometers.value;
  const miles = convertKmToMiles(km).toFixed(2);

  const heading = document.getElementById('miles');
  const mes = createMessage(km, miles);
  heading.appendChild(mes);
  kilometers.value = '';
});
