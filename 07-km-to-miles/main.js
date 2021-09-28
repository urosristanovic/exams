const KM_IN_MILE = 1.609344;
function convertKmToMiles(kilometers) {
  return kilometers / KM_IN_MILE;
}

function createMessage(km, miles) {
  const message = document.getElementById('message');
  message.innerHTML = `Distance of <strong>${km}</strong> km is <strong>${miles}</strong> miles.`;
}

const convert = document.getElementById('form');
convert.addEventListener('submit', e => {
  e.preventDefault();
  const km = document.getElementById('kilometers').value;

  if (km < 0) {
    document.getElementById('negative').style.display = 'block';
    document.getElementById('message').style.display = 'none';
  } else {
    document.getElementById('negative').style.display = 'none';
    document.getElementById('message').style.display = 'block';
    const miles = convertKmToMiles(km).toFixed(2);
    createMessage(km, miles);
  }
});
