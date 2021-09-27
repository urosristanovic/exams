function calculateCelsius(degree) {
  return (degree - 32) * (5 / 9).toFixed(2);
}

const convert = document.getElementById('form');

convert.addEventListener('submit', e => {
  e.preventDefault();
  const fahrenheit = document.getElementById('fahrenheit');
  const celsius = document.getElementById('celsius');
  const calculation = document.getElementById('calculation');

  celsius.value = calculateCelsius(fahrenheit.value);

  calculation.innerText = `(${fahrenheit.value}°F - 32) × 5/9`;
});
