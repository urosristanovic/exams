const KM_IN_MILE = 1.609344;
function convertKmToMiles(kilometers) {
  return kilometers / KM_IN_MILE;
}

function createMessage(km, miles) {
  const p = document.createElement('p');
  p.classList.add('green');
  p.innerHTML = `Distance of <strong>${km}</strong> km is <strong>${miles}</strong> miles.`;
  return p;
}

const convert = document.getElementById('form');
convert.addEventListener('submit', e => {
  e.preventDefault();
  const heading = document.getElementById('miles');
  const negative = document.getElementById('negative');
  const kilometers = document.getElementById('kilometers');
  const km = kilometers.value;
  if (km < 0) {
    negative.classList.add('red');
    negative.innerHTML = `Please use positive numbers for conversion kilometers in miles.`;
  } else {
    negative.classList.remove('red');
    negative.innerHTML = ``;
    const miles = convertKmToMiles(km).toFixed(2);
    const mes = createMessage(km, miles);
    heading.appendChild(mes);
  }
  kilometers.value = '';
});
