'use strict';

function calculateExpenses(distance, consumption, fuel_price) {
  return (distance / 100) * consumption * fuel_price;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', e => {
  e.preventDefault();
  const expenses = document.getElementById('expenses');
  const distance = document.getElementById('distance');
  const consumption = document.getElementById('consumption');
  const fuel_price = document.getElementById('fuel_price');

  const res = calculateExpenses(
    Number(distance.value),
    Number(consumption.value),
    Number(fuel_price.value)
  );

  expenses.innerText = res.toFixed();
});
