'use strict';

function calculateExpenses(distance, consumption, fuel_price) {
  return (distance / 100) * consumption * fuel_price;
}

const btn = document.getElementById('form');

btn.addEventListener('submit', e => {
  e.preventDefault();
  const expenses = document.getElementById('expenses');
  const distance = Number(document.getElementById('distance').value);
  const consumption = Number(document.getElementById('consumption').value);
  const fuel_price = Number(document.getElementById('fuel_price').value);

  const res = calculateExpenses(distance, consumption, fuel_price);

  expenses.innerText = res.toFixed();
});
