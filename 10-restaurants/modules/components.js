import { fetchCapacity, fetchPrices } from './data.js';

export async function createPriceButtons(btnsPriceRange) {
  const priceRanges = await fetchPrices();
  priceRanges.forEach(price => {
    const priceRange = createPriceRangeButton(price);
    btnsPriceRange.appendChild(priceRange);
  });
}

export async function createCapacityButtons(btnsCapacity) {
  const capacityRanges = await fetchCapacity();
  capacityRanges.forEach(capacity => {
    const capacityRange = createCapacityRangeButton(capacity);
    btnsCapacity.appendChild(capacityRange);
  });
}

export function createCapacityRangeButton(capacity) {
  const div = document.createElement('div');
  div.innerHTML = `
  <button class="${capacity.label}" value="${capacity.label}">
    <span class="tooltiptext blue">
      ${capacity.minTables}-${capacity.maxTables}
    </span>
    ${capacity.note}
  </button>
  `;
  return div;
}
export function createPriceRangeButton(price) {
  const div = document.createElement('div');
  div.innerHTML = `
  <button class="${price.label}" value="${price.label}">
    <span class="tooltiptext green">
      ${price.minAvgPricePerMeal}-${price.maxAvgPricePerMeal}$
    </span>
    ${price.note}
  </button>`;
  return div;
}
export function createRestaurantCard(res) {
  const foods = createFoodTypes(res.category);
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <div class="logo">
  <img src="${res.image}" alt="logo" />
  </div>
  <div class="details">
  <h2 class="restaurant-name">${res.name}</h2>
  <p class="address">${res.address}</p>
  <a href="tel:${res.phoneNumber}">${res.phoneNumber}</a>
    <div class="food-card" id="food-card">
    ${foods}
    </div>
    <div class="sizes">
      <div class="p-range">
        <h5>Average <br> meal price:</h5>
        <p class="avg-price">${res.avgMealPrice}$</p>
      </div>
      <div class="c-range">
        <h5>Capacity:</h5>
        <p class="card-capacity">${res.capacity}</p>
      </div>
    </div>
    <div class="w-hours">
      <p class="openning">opening: ${res.opening}h</p>
      <p class="closing">closing: ${res.closing}h</p>
    </div>
  </div>`;

  return div;
}

function createFoodTypes(foods) {
  let string = '';
  foods.forEach(food => {
    const li = document.createElement('li');
    li.innerText = food;
    string += li.outerHTML;
  });
  return string;
}
