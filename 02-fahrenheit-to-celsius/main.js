function calculateCelsius(degree) {
  return (degree - 32) * (5 / 9);
}

const convert = document.getElementById('form');

convert.addEventListener('submit', e => {
  e.preventDefault();
  const fahrenheit = document.getElementById('fahrenheit').value;
  const celsius = document.getElementById('celsius');
  const calculation = document.getElementById('calculation');

  celsius.value = calculateCelsius(fahrenheit).toFixed(2);

  calculation.innerText = `(${fahrenheit}°F - 32) × 5/9`;
});
