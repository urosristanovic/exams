function calculateCelsius(degree) {
  return (degree - 32) * (5 / 9);
}

const convert = document.getElementById('convert');

convert.addEventListener('click', () => {
  const fahrenheit = document.getElementById('fahrenheit');
  const celsius = document.getElementById('celsius');
  const calculation = document.getElementById('calculation');
  celsius.value = calculateCelsius(fahrenheit.value);
  calculation.innerText = `(${fahrenheit.value}°F - 32) × 5/9`;
});

// read only celsius

// const convert = document.getElementById('convert');

// convert.addEventListener('click', () => {
//   getFahrenheit();
// });

// function getFahrenheit() {
//   const fahrenheit = document.getElementById('fahrenheit');

//   console.log(fahrenheit.value);

//   fahrenheit.addEventListener('change', e => {
//     const fahValue = e.target.value;
//     calculateCelsius(fahValue);
//   });
// }

// function calculateCelsius(value) {
//   const celsius = document.getElementById('celsius');
//   const calculation = document.getElementById('calculation');
//   celsius.value = (value - 32) * (5 / 9);
//   calculation.innerText = `(${value}°F - 32) × 5/9`;
// }
