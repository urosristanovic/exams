'use strict';

function calculateExpenses(distance, consumption, fuel_price) {
  return (distance / 100) * consumption * fuel_price;
}

const btn = document.getElementById('btn');

const distance = document.getElementById('distance');
const consumption = document.getElementById('consumption');
const fuel_price = document.getElementById('fuel_price');

const expenses = document.getElementById('expenses');

btn.addEventListener('click', e => {
  e.preventDefault();
  const res = calculateExpenses(
    Number(distance.value),
    Number(consumption.value),
    Number(fuel_price.value)
  );

  expenses.innerText = res.toFixed();
});
